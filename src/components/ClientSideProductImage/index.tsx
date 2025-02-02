import { useEffect, useState } from "react";

interface ClientSideImageProps {
  slug: string;
  imageName: string;
  className?: string;
}
const ClientSideImage = ({ slug, imageName }: ClientSideImageProps) => {
  const [deviceType, setDeviceType] = useState<"mobile" | "tablet" | "desktop">(
    "mobile"
  );
  useEffect(() => {
    const width = window.innerWidth;
    console.log("width", width);
    setDeviceType(width < 768 ? "mobile" : width < 1024 ? "tablet" : "desktop");
  }, []);
  return (
    <img
      src={`/assets/product-${slug}/${deviceType}/${imageName}`}
      alt={slug}
      className=" object-fill"
    />
  );
};

export default ClientSideImage;
