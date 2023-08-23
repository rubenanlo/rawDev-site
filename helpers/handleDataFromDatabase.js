export const handleRetrieve = async (endpoint) => {
  const response = await fetch(`/api/${endpoint}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  return await response.json();
};

export const handleDelete = (id, endpoint) =>
  fetch(`/api/${endpoint}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
