export function parseHoursMinSec(seconds: number): string {
  const milliseconds = seconds * 1000;
  // return 'HH:MM:SS'
  if (milliseconds > 3_600_000) {
    return new Date(seconds * 1000).toISOString().slice(11, 19);
  }
  // return 'MM:SS'
  return new Date(seconds * 1000).toISOString().slice(14, 19);
}
