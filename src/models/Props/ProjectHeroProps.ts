import type { CloudFlareVideo } from "../CloudFlareVideo";

export class ProjectHeroProps {
    videoSrc: CloudFlareVideo = {
        hlsSrc: '',
        dashSrc: ''
    };
    src?: string = '';
}