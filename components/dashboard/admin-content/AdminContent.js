import FormResponses from "components/dashboard/admin-content/FormResponses";

const AdminContent = () => {
  return (
    <main className="h-screen overflow-y-scroll scrollbar-hide">
      <div className="px-4 sm:px-6 lg:px-8 mt-5">
        <FormResponses />
      </div>
    </main>
  );
};

export default AdminContent;
