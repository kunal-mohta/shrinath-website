const initialState = {
  isNavOpen: 0,
  activePageIndex: 0,
  prevPageIndex: null
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_NAV':
      return (state.isNavOpen) ? { ...state, isNavOpen: 0 } : { ...state, isNavOpen: 1 };
    
    case 'NAVIGATE_TO':
      return { ...state, prevPageIndex: state.activePageIndex, activePageIndex: action.pageIndex };

    default:
      return state;
  }
}