import * as types from 'actions/constants/'

// Reducer for general states used by the application

const initialState = {
  isAuthenticated: false,
  isModalOpen: false
};

const application = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_LOGIN:
      return {
        ...state,
        isAuthenticated: action.data
      }
    case types.TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: action.data
      }
    default:
      return state
  }
}

export default application;