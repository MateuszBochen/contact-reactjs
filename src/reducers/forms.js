const initState = {
  stepOne: {
    name: '',
    domain: '',
  },
  stepTwo: {
    emailsAdress: []
  },
  stepThree: {
    fields: []
  },
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'SAVE_STEP_ONE':
      return { ...state, stepOne: action.data };
    case 'SAVE_STEP_TWO':
      return { ...state, stepTwo: action.data };
    case 'SAVE_STEP_THREE':
      return { ...state, stepThree: action.data };
    case 'SAVE_STEP_FOUR':
      return { ...state, stepFour: action.data };
    default:
      return state;
  }
}
