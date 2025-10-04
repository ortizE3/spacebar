export class CloudflareVideoProps {
    dashSrc: string = ''; // .mpd
    hlsSrc: string = '';  // .m3u8
    autoPlay?: boolean;
    inView?: boolean;
    loop?: boolean;
    className?: string;
}