export const setReposData = payload => {
  return {
    type: 'SET_DATA',
    payload,
  };
};

export const clearReposData = payload => {
  return {
    type: 'CLEAR_DATA',
    payload,
  };
};
