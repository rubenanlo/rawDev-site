import FormResponses from "components/dashboard/admin-content/FormResponses";

const AdminContent = () => {
  return (
    <main className="h-screen overflow-y-scroll scrollbar-hide pt-14 max-w-5xl mx-auto">
      <div className="px-4 sm:px-6 lg:px-20 mt-5">
        <FormResponses />
      </div>
    </main>
  );
};

export default AdminContent;
