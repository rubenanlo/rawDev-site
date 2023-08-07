import { Bars3Icon } from "@heroicons/react/24/outline";

const ButtonOpenDrawer = () => {
  return (
    <button
      type="button"
      className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
      onClick={() => ""}
    >
      <span className="sr-only">Open sidebar</span>
      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};

export default ButtonOpenDrawer;
