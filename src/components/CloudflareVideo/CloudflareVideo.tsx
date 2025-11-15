import React, { useContext, useEffect, useRef } from "react";
import Hls from "hls.js";
import * as dashjs from "dashjs";
import type { CloudflareVideoProps } from "../../models/Props/CloudflareVideoProps";
import "./CloudflareVideo.scss";
import { usePageVisibility } from "../../hooks/hooks";
import LoadingPage from "../../context/loading";

const CloudflareVideo: React.FC<CloudflareVideoProps> = ({
    dashSrc,
    hlsSrc,
    autoPlay = true,
    loop = true,
    inView = true,
    className = "",
    checkPageLoading = false
}) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const hlsRef = useRef<Hls | null>(null);
    const dashRef = useRef<dashjs.MediaPlayerClass | null>(null);
    const isVisible = usePageVisibility();

    const { setLoadingPage } = useContext(LoadingPage);

    /** Mark loaded only ONCE */
    const markLoaded = (() => {
        let called = false;
        return () => {
            if (called) return;
            called = true;

            if (checkPageLoading) setLoadingPage(false);
        };
    })();

    /** Init only when src changes */
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (checkPageLoading) setLoadingPage(true);

        // cleanup old players
        if (hlsRef.current) {
            hlsRef.current.destroy();
            hlsRef.current = null;
        }
        if (dashRef.current) {
            dashRef.current.reset();
            dashRef.current = null;
        }

        video.oncanplaythrough = markLoaded;
        video.onloadeddata = markLoaded;

        if (dashjs.supportsMediaSource()) {
            const dashPlayer = dashjs.MediaPlayer().create();
            dashPlayer.initialize(video, dashSrc, true);

            dashPlayer.on(dashjs.MediaPlayer.events.STREAM_INITIALIZED, markLoaded);

            dashRef.current = dashPlayer;
            return;
        }

        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(hlsSrc);
            hls.attachMedia(video);

            hls.on(Hls.Events.MANIFEST_PARSED, markLoaded);

            hlsRef.current = hls;
            return;
        }

        if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = hlsSrc;
        }

        return () => {
            if (hlsRef.current) hlsRef.current.destroy();
            if (dashRef.current) dashRef.current.reset();
        };
    }, [dashSrc, hlsSrc]);

    /** Only play/pause — NEVER reinitialize */
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (!inView || !isVisible) video.pause();
        else video.play().catch(() => { });
    }, [inView, isVisible]);

    /** Autoplay setup */
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = true;
        video.playsInline = true;
        video.loop = loop;
        video.autoplay = autoPlay;
    }, [autoPlay, loop]);

    return (
        <div className="cloudflare-video-container">
            <video
                preload="auto"
                ref={videoRef}
                autoPlay={autoPlay}
                muted
                loop={loop}
                playsInline
                className={className}
                controls={false}
            />
        </div>
    );
};

export default CloudflareVideo;
