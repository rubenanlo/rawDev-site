import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex h-16 shrink-0 items-center gap-x-2">
      <Image
        width={400}
        height={400}
        className="h-6 w-auto"
        src="static/assets/logo.png"
        alt="rawDev"
      />
      <p className="text-sm -mb-3">rawDev</p>
    </Link>
  );
};

export default Logo;
