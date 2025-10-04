import React, { useEffect, useRef } from "react";
import Hls from "hls.js";
import * as dashjs from "dashjs";
import type { CloudflareVideoProps } from "../../models/Props/CloudflareVideoProps";

import './CloudflareVideo.scss'

const CloudflareVideo: React.FC<CloudflareVideoProps> = ({
    dashSrc,
    hlsSrc,
    autoPlay = true,
    loop = true,
    inView = true,
    className = "",
}) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (dashjs.supportsMediaSource()) {
            const dashPlayer = dashjs.MediaPlayer().create();
            dashPlayer.initialize(video, dashSrc, true);
            return () => dashPlayer.reset();
        }
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(hlsSrc);
            hls.attachMedia(video);
            return () => hls.destroy();
        }
        if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = hlsSrc;
        }
    }, [dashSrc, hlsSrc]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = true;
        video.playsInline = true;
        video.loop = true;
        video.autoplay = true;

        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // fallback: autoplay blocked, maybe show a play button
                console.log("Autoplay blocked on mobile.");
            });
        }
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (video && !inView) {
            video.pause();
        } else {
            video.play();
        }
    }, [inView])

    return (
        <div className="cloudflare-video-container">
            <video
                preload="auto"
                ref={videoRef}
                autoPlay={autoPlay}
                muted
                loop={loop}
                playsInline
                className={`${className}`}
                controls={false}
            />
        </div>

    );
};

export default CloudflareVideo;
