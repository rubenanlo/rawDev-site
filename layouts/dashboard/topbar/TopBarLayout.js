const TopBarLayout = ({ children }) => (
  <>
    <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />
    <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
      {children}
    </div>
  </>
);

export default TopBarLayout;
