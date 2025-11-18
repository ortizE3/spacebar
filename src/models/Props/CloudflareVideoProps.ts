import type { CloudFlareVideo } from "../CloudFlareVideo";

export class CloudflareVideoProps {
    videoSrc: CloudFlareVideo = {
        hlsSrc: '',
        dashSrc: ''
    };
    autoPlay?: boolean;
    inView?: boolean;
    loop?: boolean;
    className?: string;
    checkPageLoading?: boolean;
}