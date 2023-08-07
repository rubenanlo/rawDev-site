import { Fragment } from "react";
import { useRecoilState } from "recoil";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ProfileDropDown from "components/dashboard/navigation/ProfileDropDown";
import ButtonOpenDrawer from "components/dashboard/navigation/ButtonOpenDrawer";
import SideBarMobile from "components/dashboard/navigation/SideBarMobile";
import SideBarDesktop from "components/dashboard/navigation/SideBarDesktop";
import AdminContent from "components/dashboard/admin-content/AdminContent";
import { openDrawerSideBar } from "atoms/openDrawerSideBar";

const Dashboard = () => {
  // to allow open the side bar in mobile version
  const [sidebarOpen, setSidebarOpen] = useRecoilState(openDrawerSideBar);
  // SignIn(providers, null, null, session);

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <SideBarMobile />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <SideBarDesktop />
      {/* TODO: Check if the overflow-y-hidden works as intended */}
      <div className="lg:pl-60">
        <div className="z-40 flex h-16 shrink-0 items-center gap-x-4 px-4 sm:gap-x-6 sm:px-6 lg:px-8 ">
          <ButtonOpenDrawer />
          <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />
          <div className="flex justify-end flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <ProfileDropDown />
          </div>
        </div>
        <AdminContent />
      </div>
    </>
  );
};

export default Dashboard;
