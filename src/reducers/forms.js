const initState = {
  stepOne: {
    name: '',
    domain: '',
  },
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'SAVE_STEP_ONE':
      return { ...state, stepOne: action.data };
    default:
      return state;
  }
}
