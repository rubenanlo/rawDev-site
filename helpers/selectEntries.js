export const handleDeleteArray = (
  deleteIdArray,
  responses,
  setDeleteIdArray,
  all = true,
  id
) => {
  if (all)
    deleteIdArray.length === responses.length
      ? setDeleteIdArray([])
      : setDeleteIdArray(responses.map(({ _id }) => _id));
  if (!all) {
    if (deleteIdArray.length === responses.length) setDeleteIdArray([id]);
    if (!deleteIdArray.includes(id)) setDeleteIdArray([...deleteIdArray, id]);
    if (deleteIdArray.includes(id))
      setDeleteIdArray(deleteIdArray.filter((currentId) => currentId !== id));
  }
};
