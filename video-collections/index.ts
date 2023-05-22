import { mediumVideos } from "~/video-collections/medium-videos";
import { shortVideos } from "~/video-collections/short-videos";
import { VideoType } from "~/type/video-type";

export const SHORT_VIDEOS = "short-videos";
export const MEDIUM_VIDEOS = "medium-videos";

export const videoCollections = new Map<string, VideoType[]>()
  .set(SHORT_VIDEOS, shortVideos)
  .set(MEDIUM_VIDEOS, mediumVideos);
