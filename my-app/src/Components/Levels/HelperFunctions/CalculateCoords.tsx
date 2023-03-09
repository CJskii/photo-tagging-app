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
  console.log(
    `Clicked at (${pixelX}, ${pixelY}) in image with size (${imageWidth}, ${imageHeight})`
  );
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
  const pixelX = Math.round(Math.floor((x / rect.width) * divWidth));
  const pixelY = Math.round(Math.floor((y / rect.height) * divHeight));
  console.log(
    `Clicked at (${pixelX}, ${pixelY}) in div with size (${divWidth}, ${divHeight})`
  );
  return { x: pixelX, y: pixelY };
};
