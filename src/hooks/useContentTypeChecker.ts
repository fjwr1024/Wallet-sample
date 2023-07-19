import { useState, useEffect } from 'react';

export const useContentTypeChecker = (imgSrc: string) => {
  const [contentType, setContentType] = useState<string>('');

  useEffect(() => {
    const checkContentType = async () => {
      try {
        const response = await fetch(imgSrc);
        const resHeader = response.headers.get('Content-Type') as string;
        setContentType(resHeader);
      } catch (error) {
        console.error(error); // eslint-disable-line no-console
      }
    };

    checkContentType();
  }, [imgSrc]);

  const isImage = contentType.startsWith('image/');
  const isVideo = contentType.startsWith('video/');

  return {
    contentType,
    isImage,
    isVideo,
  };
};
