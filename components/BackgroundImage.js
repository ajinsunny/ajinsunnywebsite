import Image from "next/image";

const BackgroundImage = ({ src, alt, ...props }) => {
  return (
    <div className="relative w-full h-full" {...props}>
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
