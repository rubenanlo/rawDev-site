import Image from "next/image";

const CardImage = ({ image: { src, alt } }) => (
  <div className="relative">
    <Image
      src={src}
      alt={alt}
      className="aspect-[2/3] w-full rounded-xl bg-orange-tertiary/5 object-cover shadow-lg"
    />
    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
  </div>
);

export default CardImage;
