export const getYouTubeId = (url: string): string | null => {
  try {
    const parsed = new URL(url);

    if (parsed.hostname === 'youtu.be') {
      return parsed.pathname.replace('/', '');
    }

    if (parsed.hostname.includes('youtube.com')) {
      if (parsed.pathname === '/watch') {
        return parsed.searchParams.get('v');
      }

      if (parsed.pathname.startsWith('/embed/')) {
        return parsed.pathname.split('/')[2] ?? null;
      }

      if (parsed.pathname.startsWith('/shorts/')) {
        return parsed.pathname.split('/')[2] ?? null;
      }
    }

    return null;
  } catch {
    return null;
  }
};

export const getYouTubeEmbedUrl = (
  url: string,
  { autoplay = false }: { autoplay?: boolean } = {},
) => {
  const videoId = getYouTubeId(url);
  if (!videoId) {
    return url;
  }

  const params = new URLSearchParams({
    modestbranding: '1',
    rel: '0',
    playsinline: '1',
  });

  if (autoplay) {
    params.set('autoplay', '1');
  }

  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
};

export const getYouTubePoster = (src: string, fallback?: string) => {
  if (fallback) {
    return fallback;
  }

  const videoId = getYouTubeId(src);
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : undefined;
};
