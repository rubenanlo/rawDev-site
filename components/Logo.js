import Image from "next/image";
import Link from "next/link";
import LOGO_LIGHT from "static/assets/logo-white.png";

const Logo = ({ size }) => {
  return size === "big" ? (
    <Link href="/" className="flex h-16 shrink-0 items-center gap-x-2 ">
      <Image className="h-10 w-auto" src={LOGO_LIGHT} alt="Your Company" />
      <p className=" text-xl -mb-1 text-orange ">rawDev</p>
    </Link>
  ) : (
    <Link href="/" className="flex h-16 shrink-0 items-center gap-x-2 ">
      <Image
        width={400}
        height={400}
        className="h-6 w-auto"
        src={LOGO_LIGHT}
        alt="rawDev"
      />
      <p className="text-sm -mb-3 text-orange">rawDev</p>
    </Link>
  );
};

export default Logo;
