export const createString = () => {
  const len = 8;
  let randomString = "";
  for (let i = 0; i < len; i++) {
    const ch = Math.floor(Math.random() * 10 + 1);
    randomString += ch;
  }
  return randomString;
};
