import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ProfileDropDown from "components/dashboard/navigation/ProfileDropDown";
import ButtonOpenDrawer from "components/dashboard/navigation/ButtonOpenDrawer";
// import SideBarMobile from "components/dashboard/navigation/SideBarMobile";
import SideBarDesktop from "components/dashboard/navigation/SideBarDesktop";
import AdminContent from "components/dashboard/admin-content/AdminContent";

const Dashboard = () => {
  // to allow open the side bar in mobile version
  // SignIn(providers, null, null, session);

  return (
    <>
      <div>
        <div className="relative z-50 lg:hidden">
          <div className="fixed inset-0 bg-gray-900/80" />

          <div className="fixed inset-0 flex">
            <div className="relative mr-16 flex w-full max-w-xs flex-1">
              <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                <button type="button" className="-m-2.5 p-2.5">
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </button>
              </div>
              {/* <SideBarMobile /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-full h-40 bg-gradient-to-r from-gray-900  to-blue-primary" />
      <SideBarDesktop />
      <div className="lg:pl-60 ">
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
