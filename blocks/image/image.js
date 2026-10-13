/*
blocks/image/image.js
Simple helper for creating an <img> element for the image block.
*/

export default function createImage({ src = '', alt = '', srcset = '', sizes = '100vw', className = '' } = {}) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  if (srcset) img.srcset = srcset;
  if (sizes) img.sizes = sizes;
  if (className) img.className = className;
  return img;
}
