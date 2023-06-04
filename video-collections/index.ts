import { mediumVideos } from "~/video-collections/medium-videos";
import { shortVideos } from "~/video-collections/short-videos";
import { newVideos } from "~/video-collections/new-videos";
import { VideoType } from "~/type/video-type";

export const SHORT_VIDEOS = "short-videos";
export const MEDIUM_VIDEOS = "medium-videos";
export const NEW_VIDEOS = "new-videos";

export const videoCollections = new Map<string, VideoType[]>()
  .set(SHORT_VIDEOS, shortVideos)
  .set(MEDIUM_VIDEOS, mediumVideos)
  .set(NEW_VIDEOS, newVideos);
