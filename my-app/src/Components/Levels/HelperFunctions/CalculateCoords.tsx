export const calculateImageCoords = (
  image: HTMLImageElement,
  e: React.MouseEvent<HTMLImageElement>
) => {
  const rect = image.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const imageWidth = image.naturalWidth;
  const imageHeight = image.naturalHeight;
  const pixelX = Math.round(Math.floor((x / rect.width) * imageWidth));
  const pixelY = Math.round(Math.floor((y / rect.height) * imageHeight));
  return { x: pixelX, y: pixelY };
};

export const calculateContainerCoords = (
  div: HTMLDivElement,
  e: React.MouseEvent<HTMLDivElement>
) => {
  const rect = div.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const divWidth = div.clientWidth;
  const divHeight = div.clientHeight;
  let pixelX = Math.round(Math.floor((x / rect.width) * divWidth));
  let pixelY = Math.round(Math.floor((y / rect.height) * divHeight));
  const containerWidth = 160;
  const containerHeight = 240;

  // adjust x coordinate if it exceeds the width of the image
  if (pixelX + containerWidth > divWidth) {
    pixelX = Math.max(divWidth - containerWidth, 0);
  }
  // adjust y coordinate if it exceeds the height of the image
  if (pixelY + containerHeight > divHeight) {
    pixelY = Math.max(divHeight - containerHeight, 0);
  }
  return { x: pixelX, y: pixelY };
};
