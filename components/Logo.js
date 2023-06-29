import Image from "next/image";
import Link from "next/link";
import { classNames } from "helpers/setClassNames";
import LOGO_ORANGE from "static/assets/logo-orange-light.png";
import LOGO_BLUE from "static/assets/logo-blue.png";

const Logo = ({ size, color }) => {
  const logo = color === "blue" ? LOGO_BLUE : LOGO_ORANGE;
  return size === "big" ? (
    <Link href="/" className="flex h-16 shrink-0 items-center gap-x-2 ">
      <Image className="h-10 w-auto" src={logo} alt="Your Company" />
      <p
        className={classNames(
          (color === "blue" && "text-blue-primary") || "text-orange-tertiary",
          "text-xl -mb-6"
        )}
      >
        rawDev
      </p>
    </Link>
  ) : (
    <Link href="/" className="flex h-16 shrink-0 items-center gap-x-2 ">
      <Image
        width={400}
        height={400}
        className="h-6 w-auto"
        src={logo}
        alt="rawDev"
      />
      <p
        className={classNames(
          (color === "blue" && "text-blue-primary") || "text-orange-tertiary",
          "text-sm -mb-3"
        )}
      >
        rawDev
      </p>
    </Link>
  );
};

export default Logo;
