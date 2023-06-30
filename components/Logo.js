import Image from "next/image";
import Link from "next/link";
import LOGO_ORANGE from "static/assets/logo-orange-light.png";

const Logo = ({ size }) => {
  return size === "big" ? (
    <Link href="/" className="flex h-16 shrink-0 items-center gap-x-2 ">
      <Image className="h-10 w-auto" src={LOGO_ORANGE} alt="Your Company" />
      <p className="text-orange-tertiary text-xl -mb-6">rawDev</p>
    </Link>
  ) : (
    <Link href="/" className="flex h-16 shrink-0 items-center gap-x-2 ">
      <Image
        width={400}
        height={400}
        className="h-6 w-auto"
        src={LOGO_ORANGE}
        alt="rawDev"
      />
      <p className="text-orange-tertiary text-sm -mb-3">rawDev</p>
    </Link>
  );
};

export default Logo;
