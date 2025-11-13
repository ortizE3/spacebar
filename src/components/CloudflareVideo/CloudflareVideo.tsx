import React, { useEffect, useRef } from "react";
import Hls from "hls.js";
import * as dashjs from "dashjs";
import type { CloudflareVideoProps } from "../../models/Props/CloudflareVideoProps";
import "./CloudflareVideo.scss";
import { usePageVisibility } from "../../hooks/hooks";

const CloudflareVideo: React.FC<CloudflareVideoProps> = ({
    dashSrc,
    hlsSrc,
    autoPlay = true,
    loop = true,
    inView = true,
    className = "",
}) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const hlsRef = useRef<Hls | null>(null);
    const dashRef = useRef<dashjs.MediaPlayerClass | null>(null);
    const isVisible = usePageVisibility();

    const initializePlayer = () => {
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

        if (dashjs.supportsMediaSource()) {
            const dashPlayer = dashjs.MediaPlayer().create();
            dashPlayer.initialize(video, dashSrc, true);
            dashRef.current = dashPlayer;
        } else if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(hlsSrc);
            hls.attachMedia(video);
            hlsRef.current = hls;
        } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = hlsSrc;
        }
    };

    useEffect(() => {
        initializePlayer();
        return () => {
            if (hlsRef.current) hlsRef.current.destroy();
            if (dashRef.current) dashRef.current.reset();
        };
    }, [dashSrc, hlsSrc]);

    useEffect(() => {
        if (isVisible) {
            initializePlayer();
        }
    }, [isVisible]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = true;
        video.playsInline = true;
        video.loop = loop;
        video.autoplay = autoPlay;

        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                console.log("Autoplay blocked on mobile.");
            });
        }
    }, [autoPlay, loop]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (!inView || !isVisible) {
            video.pause();
        } else {
            video.play().catch(() => { });
        }
    }, [inView, isVisible]);

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
