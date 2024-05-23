export async function fetchImage(imageUrl:any) {
    try {
      const response = await fetch(imageUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
      }
      const blob = await response.blob();
      return new File([blob], 'image.png', { type: 'image/png' });
    } catch (error) {
      console.error('Error fetching image:', error);
      return null;
    }
  }
