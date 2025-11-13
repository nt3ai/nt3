export function extractYouTubeId(url: string) {
  const match = url.match(
    /(?:youtube\.com\/(?:.*v=|v\/|embed\/|live\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}
