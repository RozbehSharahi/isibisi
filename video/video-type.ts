export type VideoType = {
  code: string;
  description?: string;
};

export function isVideoType(input: any): input is VideoType {
  return "code" in input;
}

export const isVideoTypeArray = (input: any): input is VideoType[] => {
  if (!Array.isArray(input)) {
    return false;
  }

  for (const item of input) {
    if (!isVideoType(item)) {
      return false;
    }
  }
  return true;
};
