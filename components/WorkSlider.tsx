// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import navigation styles

// Import required modules
import { Pagination, Navigation } from "swiper";

// Icons
import { BsArrowRight } from "react-icons/bs";
// Next.js Image component
import Image from "next/image";

// Define the interface for an image item
interface WorkImage {
  title: string;
  url: string;
  path: string;
}

// Define the structure of workSlider
interface WorkSlide {
  images: WorkImage[];
}

interface WorkSliderData {
  slides: WorkSlide[];
}

// Work slider data
export const workSlider: WorkSliderData = {
  slides: [
    {
      images: [
        {
          title: "Animation Cursor",
          url: "https://github.com/ajinsunny/animated-cursor",
          path: "/animation.gif",
        },
        {
          title: "Fleet Management System",
          url: "https://main.d2tmvp8ck6o5qe.amplifyapp.com/",
          path: "/fms.webp",
        },
        {
          title: "DC Homeless Outreach",
          url: "https://www.saturday3rdserve.org/",
          path: "/homelessoutreach.png",
        },
      ],
    },
  ],
};

// Function to chunk images into groups of four
const chunkArray = (array: WorkImage[], size: number): WorkImage[][] => {
  const result: WorkImage[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const WorkSlider = () => {
  // Get all images from the slides
  const images = workSlider.slides[0].images;

  // Chunk the images into groups of four
  const imageChunks = chunkArray(images, 4);

  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      navigation={true} // Enable navigation arrows
      modules={[Pagination, Navigation]} // Include Navigation module
      className="h-[280px] sm:h-[480px]"
    >
      <div>
        {imageChunks.map((chunk, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 gap-7">
              {chunk.map((image) => (
                <a
                  href={image.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={image.title}
                  className="relative rounded-lg overflow-hidden flex items-center justify-center group cursor-pointer"
                >
                  <div className="flex items-center justify-center relative overflow-hidden">
                    {/* Image */}
                    <Image
                      src={image.path}
                      width={700}
                      height={400}
                      alt={image.title}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    {/* Title */}
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 xl:group-hover:-translate-y-20 transition-all duration-300">
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                        {/* Title part 1 */}
                        <div className="delay-100">LIVE</div>
                        {/* Title part 2 */}
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          PROJECT
                        </div>
                        {/* Icon */}
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default WorkSlider;
