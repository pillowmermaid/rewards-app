import * as types from 'actions/constants'

export const toggleLogin = data => ({
  type: types.TOGGLE_LOGIN,
  data
});

export const updatePoints =  data => ({
  type: types.UPDATE_POINTS,
  data
});