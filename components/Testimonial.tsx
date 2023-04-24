import Image from "next/image";

interface TestimonialItems {
  user: string;
  avatar: string;
  message: string;
}

interface TestimonialProps {
  content: TestimonialItems[];
}

const Testimonial = ({ content }: TestimonialProps) => {
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <div className="columns-3 gap-6 [column-fill:_balance] lg:gap-8 md:columns-2 sm:columns-1">
          {content.map((item, index) => {
            return (
              <>
                <div className="mb-8 break-inside-avoid" key={index}>
                  <blockquote className="rounded-xl bg-white p-6 shadow shadow-black/5 dark:bg-gray-800 dark:shadow-white/5">
                    <p className="leading-relaxed text-gray-700 dark:text-gray-200">
                      {item.message}
                    </p>
                  </blockquote>

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
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
