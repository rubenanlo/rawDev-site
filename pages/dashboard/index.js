import AppLayoutWithoutNavbar from "layouts/AppLayoutWithoutNavbar.js";
import ProfileDropDown from "components/dashboard/navigation/ProfileDropDown";
import ButtonOpenDrawer from "components/dashboard/navigation/ButtonOpenDrawer";
// import SideBarMobile from "components/dashboard/navigation/SideBarMobile";
import SideBarDesktop from "components/dashboard/navigation/SideBarDesktop";
import AdminContent from "components/dashboard/admin-content/AdminContent";

const UserPage = () => {
  return (
    <AppLayoutWithoutNavbar>
      {/* <SideBarMobile/> */}
      {/* This div is to make the first row of the table for users with solid background */}
      <div className="absolute w-full h-52 bg-gradient-to-r from-gray-900  to-blue-primary" />
      <SideBarDesktop />
      <div className="lg:pl-60 pr-10">
        <div className="fixed z-40 flex h-16 shrink-0 items-center gap-x-4 px-4 sm:gap-x-6 sm:px-6 lg:px-8 right-0">
          <ButtonOpenDrawer />
          <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />
          <ProfileDropDown />
        </div>
        <AdminContent />
      </div>
    </AppLayoutWithoutNavbar>
  );
};

export default UserPage;
