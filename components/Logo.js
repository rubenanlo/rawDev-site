import Image from "next/image";
import Link from "next/link";
import { isDarkMode } from "helpers/isDarkMode";

const Logo = () => {
  const logo = isDarkMode()
    ? "static/assets/logo.png"
    : "static/assets/logo-white.png";
  return (
    <Link href="/" className="flex h-16 shrink-0 items-center gap-x-2 ">
      <Image
        width={400}
        height={400}
        className="h-6 w-auto"
        src={logo}
        alt="rawDev"
      />
      <p className="text-sm -mb-3 text-textLight dark:text-textDark">rawDev</p>
    </Link>
  );
};

export default Logo;
