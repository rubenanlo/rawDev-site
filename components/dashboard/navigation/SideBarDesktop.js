import Link from "next/link";
import { classNames } from "helpers/setClassNames";
import { teams } from "static/sidebar/SIDEBAR";
import Logo from "components/Logo";

const SideBarDesktop = () => (
  <>
    {/* Static sidebar for desktop */}
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-60 lg:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-transparent px-10 pb-4">
        <Logo />
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="-mx-2 mt-16 space-y-1">
            {teams.map((team) => (
              <li key={team.name}>
                <Link
                  href={team.href}
                  className={classNames(
                    team.current
                      ? "bg-gray-50 text-orange-secondary"
                      : "text-gray-700 hover:text-orange-secondary hover:bg-gray-50",
                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                  )}
                >
                  <span
                    className={classNames(
                      team.current
                        ? "text-orange-secondary border-orange-secondary"
                        : "text-gray-400 border-gray-200 group-hover:border-orange-secondary group-hover:text-orange-secondary",
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"
                    )}
                  >
                    {team.initial}
                  </span>
                  <span className="truncate">{team.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </>
);

export default SideBarDesktop;
