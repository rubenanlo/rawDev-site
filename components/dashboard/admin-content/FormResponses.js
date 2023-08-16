import { useEffect, useState } from "react";
import DeleteEntry from "components/modals/DeleteEntry";
import Loading from "components/modals/Loading";
import { handleRetrieve } from "helpers/handleDataFromDatabase";
import TableResponses from "components/dashboard/admin-content/TableResponses";
import { useToggleContainer } from "helpers/useRedux";

const FormResponses = () => {
  const [responses, setResponses] = useState([]);
  const [deleteIdArray, setDeleteIdArray] = useState([]);
  const [openModal, toggleModal] = useToggleContainer("modal");
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
