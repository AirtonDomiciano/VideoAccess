import Image from "next/image";
import type { ComponentProps } from "react";

type MethodRemarIconProps = Omit<
  ComponentProps<typeof Image>,
  "alt" | "height" | "src" | "width"
> & {
  alt?: string;
  height?: number;
  size?: number;
  width?: number;
};

export function MethodRemarIcon({
  alt = "",
  height,
  size = 24,
  width,
  ...props
}: MethodRemarIconProps) {
  return (
    <Image
      {...props}
      alt={alt}
      height={height ?? size}
      src="/metodo-remar-icon.svg"
      width={width ?? size}
    />
  );
}
