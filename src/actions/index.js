import * as types from 'actions/constants'

export const toggleLogin = data => ({
  type: types.TOGGLE_LOGIN,
  data
});

export const toggleModal =  data => ({
  type: types.TOGGLE_MODAL,
  data
});

export const updatePoints =  data => ({
  type: types.UPDATE_POINTS,
  data
});

export const selectProduct =  data => ({
  type: types.SELECT_PRODUCT,
  data
});