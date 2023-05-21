export function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomSample(samples: any[]) {
  return samples[Math.floor(Math.random() * samples.length)];
}

export const shuffle = (elements: any[]): any[] =>
  elements
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
