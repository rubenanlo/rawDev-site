import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DeleteEntry from "components/modals/DeleteEntry";
import Loading from "components/modals/Loading";
import { handleRetrieve } from "helpers/handleDataFromDatabase";
import TableResponses from "components/dashboard/admin-content/TableResponses";

const FormResponses = () => {
  const [responses, setResponses] = useState([]);
  const [singleDeleteId, setSingleDeleteId] = useState("");
  const [deleteIdArray, setDeleteIdArray] = useState([]);
  // recoil state for modal open/close is in atoms/openDeleteModal.js
  const openDeleteModal = useSelector((state) => state.deleteModal.value);
  const dispatch = useDispatch();

  const apiEndpoint = "contact-form/retrieve-responses";

  const idDelete = singleDeleteId || deleteIdArray;

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
      {openDeleteModal && (
        <DeleteEntry
          id={idDelete}
          setSingleDeleteId={setSingleDeleteId}
          dispatch={dispatch}
          openDeleteModal={openDeleteModal}
        />
      )}
      <TableResponses
        responses={responses}
        deleteIdArray={deleteIdArray}
        setDeleteIdArray={setDeleteIdArray}
        dispatch={dispatch}
        singleDeleteId={singleDeleteId}
        openDeleteModal={openDeleteModal}
        setSingleDeleteId={setSingleDeleteId}
      />
    </>
  );
};

export default FormResponses;
