module.exports = async (getAll) => {
  const listIdAll = getAll.message.map((category) => category.id);

  return listIdAll;
};