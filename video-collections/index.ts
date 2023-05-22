import { shortMovies } from "~/video-collections/short-movies";
import { songVideos } from "~/video-collections/song-videos";
import { VideoType } from "~/type/video-type";

export const videoCollections: Record<string, VideoType[]> = {
  "short-movies": shortMovies,
  "song-videos": songVideos,
};
