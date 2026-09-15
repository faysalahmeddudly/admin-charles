import Image from "next/image";
import clsx from "clsx";

export const LogoComp = ({
  className,
  containerClassName = "",
  width = 183,
  height = 62,
  alt = "Logo",
  priority = false,
  src = "/logo.png",
  ...rest
}) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center bg-white rounded-[8px]",
        containerClassName
      )}
      style={{ width, height }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={clsx("logo object-contain w-full h-full", className)}
        {...rest}
      />
    </div>
  );
};

export default LogoComp;