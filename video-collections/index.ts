import { VideoType } from "~/type/video-type";
import { diverseVideos } from "~/video-collections/diverse-videos";

export const DIVERSE_VIDEOS = "diverse-videos";

export const videoCollections = new Map<string, VideoType[]>().set(
  DIVERSE_VIDEOS,
  diverseVideos
);
