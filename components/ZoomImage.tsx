import Image, { StaticImageData } from "next/image";
import Zoom from "react-medium-image-zoom";

interface ZoomImageProps {
  images: StaticImageData[];
}

const ZoomImage = ({ images }: ZoomImageProps) => {
  return (
    <>
      <div className="flex h-fit w-full flex-row flex-wrap items-center justify-center gap-5">
        {images.map(image => {
          return (
            <>
              <Zoom>
                <Image
                  alt="image"
                  src={image}
                  priority
                  quality={100}
                  className="max-w-[16rem] rounded-2xl transition duration-200 ease-in hover:scale-105 sm:max-w-[6rem]"
                />
              </Zoom>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ZoomImage;
