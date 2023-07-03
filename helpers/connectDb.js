import clientPromise from "library/mongodb";

export const connectToDatabase = async (collection) => {
  return (await clientPromise).db().collection(collection);
};
