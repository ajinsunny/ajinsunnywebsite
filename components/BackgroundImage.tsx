import Image from "next/image";
import { HTMLAttributes } from "react";

// Define the props interface
interface BackgroundImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string; // Type for the image source
  alt: string; // Type for the alt text
}

// Use the interface in the component
const BackgroundImage = ({ src, alt, ...props }: BackgroundImageProps) => {
  return (
    <div className="w-full h-full" {...props}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{
          objectFit: "cover",
          objectPosition: "right",
        }}
      />
    </div>
  );
};

export default BackgroundImage;
