export function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomSample(samples: any[]) {
  return samples[Math.floor(Math.random() * samples.length)];
}
