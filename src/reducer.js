const initialState = {
  isNavOpen: 0
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_NAV':
      return (state.isNavOpen) ? { isNavOpen: 0 } : { isNavOpen: 1 };
    
    default:
      return state;
  }
}