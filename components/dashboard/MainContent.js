import ListClientProjects from "components/github/ListClientProjects";

const MainContent = () => {
  return (
    <main className="h-screen overflow-y-scroll scrollbar-hide">
      <div className="px-4 sm:px-6 lg:px-8 mt-5">
        <ListClientProjects />
      </div>
    </main>
  );
};

export default MainContent;
