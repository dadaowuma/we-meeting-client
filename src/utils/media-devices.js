/**
 * https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices
 * https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getDisplayMedia
 */

export const getMedia = () => {
  return navigator.mediaDevices
  .getUserMedia({ audio: true, video: true })
}

export const getDisplayMedia = async () => {
  let captureStream = null;

  try {
    captureStream =
      await navigator.mediaDevices.getDisplayMedia({ audio: true, video: true });
  } catch (err) {
    console.error("Error: " + err);
  }
  
  return captureStream;
}