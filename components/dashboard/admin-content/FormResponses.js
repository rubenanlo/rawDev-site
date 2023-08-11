import { useEffect, useState } from "react";
import DeleteEntry from "components/modals/DeleteEntry";
import Loading from "components/modals/Loading";
import { handleRetrieve } from "helpers/handleDataFromDatabase";
import TableResponses from "components/dashboard/admin-content/TableResponses";
import { useToggleModal } from "helpers/useRedux";

const FormResponses = () => {
  const [responses, setResponses] = useState([]);
  const [deleteIdArray, setDeleteIdArray] = useState([]);
  // recoil state for modal open/close is in atoms/openDeleteModal.js
  const [openModal, toggleModal] = useToggleModal();
  const apiEndpoint = "contact-form/retrieve-responses";

  useEffect(
    () => async () => {
      const { data } = await handleRetrieve(apiEndpoint);
      setResponses(data);
    },
    [responses]
  );

  return (
    <>
      {!responses && <Loading />}
      {/* modal to delete entry/ies */}
      {openModal && (
        <DeleteEntry
          id={deleteIdArray}
          setDeleteIdArray={setDeleteIdArray}
          toggleModal={toggleModal}
          openModal={openModal}
        />
      )}
      <TableResponses
        responses={responses}
        deleteIdArray={deleteIdArray}
        setDeleteIdArray={setDeleteIdArray}
        toggleModal={toggleModal}
        openDeleteModal={openModal}
      />
    </>
  );
};

export default FormResponses;
