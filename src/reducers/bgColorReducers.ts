interface Action {
  type: string;
}

const initialState = {
  color: '',
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'CHANGE_RED':
      return (state = { color: 'allRed' });
    case 'CHANGE_GREEN':
      return (state = { color: 'allGreen' });
    case 'CHANGE_BLUE':
      return (state = { color: 'allBlue' });
    default:
      return (state = { color: '' });
  }
};

export default reducer;
