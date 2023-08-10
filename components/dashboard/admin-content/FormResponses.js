import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import DeleteEntry from "components/modals/DeleteEntry";
import Loading from "components/modals/Loading";
import { handleRetrieve } from "helpers/handleDataFromDatabase";
import { openDeleteModalState } from "atoms/openDeleteModal";
import TableResponses from "./TableResponses";

const FormResponses = () => {
  const [responses, setResponses] = useState([]);
  const [singleDeleteId, setSingleDeleteId] = useState("");
  const [deleteIdArray, setDeleteIdArray] = useState([]);
  // recoil state for modal open/close is in atoms/openDeleteModal.js
  const [openDeleteModal, setOpenDeleteModal] =
    useRecoilState(openDeleteModalState);
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
        <DeleteEntry id={idDelete} setSingleDeleteId={setSingleDeleteId} />
      )}
      <TableResponses
        responses={responses}
        deleteIdArray={deleteIdArray}
        setDeleteIdArray={setDeleteIdArray}
        setOpenDeleteModal={setOpenDeleteModal}
        singleDeleteId={singleDeleteId}
        openDeleteModal={openDeleteModal}
        setSingleDeleteId={setSingleDeleteId}
      />
    </>
  );
};

export default FormResponses;
