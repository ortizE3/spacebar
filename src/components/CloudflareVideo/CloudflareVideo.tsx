import React, { useContext, useEffect, useRef } from "react";
import Hls from "hls.js";
import * as dashjs from "dashjs";
import type { CloudflareVideoProps } from "../../models/Props/CloudflareVideoProps";
import "./CloudflareVideo.scss";
import { usePageVisibility } from "../../hooks/hooks";
import LoadingPage from "../../context/loading";

const CloudflareVideo: React.FC<CloudflareVideoProps> = ({
    videoSrc,
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

    const { setLoadingPage } = useContext(LoadingPage)

    const markLoaded = () => {
        if (checkPageLoading)
            setLoadingPage(false);
    };

    const initializePlayer = () => {
        if (checkPageLoading)
            setLoadingPage(true);

        const video = videoRef.current;
        if (!video) return;

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
            dashPlayer.initialize(video, videoSrc.dashSrc, true);

            dashPlayer.on(dashjs.MediaPlayer.events.STREAM_INITIALIZED, markLoaded);
            dashPlayer.on(dashjs.MediaPlayer.events.MANIFEST_LOADED, markLoaded);

            dashRef.current = dashPlayer;
            return;
        }

        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(videoSrc.hlsSrc);
            hls.attachMedia(video);

            hls.on(Hls.Events.MANIFEST_PARSED, markLoaded);
            hls.on(Hls.Events.LEVEL_LOADED, markLoaded);

            hlsRef.current = hls;
            return;
        }

        if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = videoSrc.hlsSrc;
        }
    };

    useEffect(() => {
        initializePlayer();
        return () => {
            if (hlsRef.current) hlsRef.current.destroy();
            if (dashRef.current) dashRef.current.reset();
        };
    }, [videoSrc.dashSrc, videoSrc.hlsSrc]);

    useEffect(() => {
        if (isVisible) initializePlayer();
    }, [isVisible]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = true;
        video.playsInline = true;
        video.loop = loop;
        video.autoplay = autoPlay;

        const promise = video.play();
        if (promise) promise.catch(() => { });
    }, [autoPlay, loop]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (!inView || !isVisible) video.pause();
        else video.play().catch(() => { });
    }, [inView, isVisible]);

    return (
        <>
            <div className="cloudflare-video-container">
                <video
                    preload="none"
                    ref={videoRef}
                    autoPlay={autoPlay}
                    muted
                    loop={loop}
                    playsInline
                    className={className}
                    controls={false}
                    src=""
                />
            </div>
        </>

    );
};

export default CloudflareVideo;
