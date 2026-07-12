export async function getPexelsImage(query: string, orientation: 'square' | 'landscape' | 'portrait' = 'square'): Promise<string> {
  if (!process.env.PEXELS_API_KEY) {
    return "/placeholder.jpg";
  }
  
  try {
    const res = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=${orientation}`, {
      headers: {
        Authorization: process.env.PEXELS_API_KEY,
      },
      next: { revalidate: 86400 } // Cache for 24 hours
    });
    
    if (!res.ok) {
      return "/placeholder.jpg";
    }

    const data = await res.json();
    if (data.photos && data.photos.length > 0) {
      return data.photos[0].src.large2x || data.photos[0].src.large;
    }
    return "/placeholder.jpg";
  } catch (error) {
    console.error('Pexels API error:', error);
    return "/placeholder.jpg";
  }
}
