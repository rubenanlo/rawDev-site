import { Bars3Icon } from "@heroicons/react/24/outline";
import { useRecoilState } from "recoil";
import { openDrawerSideBar } from "atoms/openDrawerSideBar";

const ButtonOpenDrawer = () => {
  const [, setSidebarOpen] = useRecoilState(openDrawerSideBar);
  return (
    <button
      type="button"
      className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
      onClick={() => setSidebarOpen(true)}
    >
      <span className="sr-only">Open sidebar</span>
      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};

export default ButtonOpenDrawer;
