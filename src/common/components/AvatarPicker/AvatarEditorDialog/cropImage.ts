import { Area } from 'react-easy-crop/types';

function getRadianAngle(degreeValue: number) {
    return (degreeValue * Math.PI) / 180;
}

export const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener('load', () => resolve(image));
        image.addEventListener('error', error => reject(error));
        image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues on CodeSandbox
        image.src = url;
    });

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 */
export default async function getCroppedImg(
    imageSrc: string,
    pixelCrop: Area,
    rotation = 0
): Promise<string | null> {
    const image = await createImage(imageSrc);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
        return null;
    }

    const maxSize = Math.max(image.width, image.height);
    const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

    // set width to double image size to allow for a safe area for the
    // image to rotate in without being clipped by canvas context
    canvas.width = safeArea;
    canvas.height = safeArea;

    // translate canvas context to a central location to allow rotating around the center.
    ctx.translate(safeArea / 2, safeArea / 2);
    ctx.rotate(getRadianAngle(rotation));
    ctx.translate(-safeArea / 2, -safeArea / 2);

    // draw rotated image and store data.
    ctx.drawImage(
        image,
        safeArea / 2 - image.width * 0.5,
        safeArea / 2 - image.height * 0.5
    );
    const data = ctx.getImageData(0, 0, safeArea, safeArea);

    // set canvas width to final desired crop size - this will clear existing context
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    // paste generated rotate image with correct offsets for x,y crop values.
    ctx.putImageData(
        data,
        0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x,
        0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y
    );

    const getDataUrlFromFile = (file: File): Promise<string> =>
        new Promise((resolve, reject) => {
            const fileReader = new window.FileReader();
            // @ts-ignore
            fileReader.addEventListener('load', () =>
                // @ts-ignore
                resolve(fileReader.result)
            );
            fileReader.addEventListener('error', error => reject(error));
            fileReader.readAsDataURL(file);
        });

    const getBase64FromCanvas = (
        _canvas: HTMLCanvasElement,
        quality = 0.65
    ): Promise<string> => {
        return new Promise(resolve => {
            // @ts-ignore
            const callback = file => resolve(getDataUrlFromFile(file));
            canvas.toBlob(callback, 'image/jpeg', quality);
        });
    };

    return getBase64FromCanvas(canvas);
}
