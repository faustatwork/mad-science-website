import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import useMediaQuery from "../utils/hooks/useMediaQuery";

import "swiper/css";
import "swiper/css/pagination";

interface TestimonialItems {
  user: string;
  avatar: string;
  message: string;
  position?: string;
}

interface TestimonialProps {
  content: TestimonialItems[];
}

const Testimonial = ({ content }: TestimonialProps) => {
  const isSmall = useMediaQuery("(max-width: 1025px)");

  return (
    <>
      <Swiper
        slidesPerView={!isSmall ? 3 : 1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className="mySwiper w-full"
      >
        {content.map((item, index) => {
          return (
            <>
              <SwiperSlide key={index}>
                <div className="flex flex-col justify-between rounded-xl bg-white p-6 shadow shadow-black/5 dark:bg-gray-800 dark:shadow-white/5">
                  <p className="leading-relaxed text-gray-700 dark:text-gray-200">
                    {item.message}
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <Image
                      alt="testimonial user avatar"
                      src={item.avatar}
                      width={240}
                      height={240}
                      quality={100}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="text-sm text-black dark:text-white">
                      <p className="font-medium">{item.user}</p>
                      <p className="font-normal text-gray-500 dark:text-gray-400">
                        {item.position}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
};

export default Testimonial;
