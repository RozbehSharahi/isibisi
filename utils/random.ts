export function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomSample<T = unknown>(samples: T[]): T {
  return samples[Math.floor(Math.random() * samples.length)];
}

export const shuffle = <T = unknown>(elements: T[]): T[] =>
  elements
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
