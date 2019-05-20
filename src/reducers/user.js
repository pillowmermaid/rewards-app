import * as types from 'actions/constants/'

// Reducer for the state relating to user actions

const initialState = {
  login: {
    userName: 'admin',
    password: 'password'
  },
  firstName: 'Tom',
  points: 50000,
  products: [
    {
      name: 'AirBuds',
      types: [
        {
          subName: 'Smokey White',
          img: 'airbuds/white.png',
          color: '#d4d4d4',
          price: 5000
        },
        {
          subName: 'Charcoal Black',
          img: 'airbuds/black.png',
          color: '#292929',
          price: 5000
        },
        {
          subName: 'Coral Red',
          img: 'airbuds/red.png',
          color: '#db2c2c',
          price: 9000
        },
        {
          subName: 'Spring Green',
          img: 'airbuds/green.png',
          color: '#49cc54',
          price: 8500
        }
      ]
    },
    {
      name: 'OtherBud',
      types: [
        {
          subName: 'Smokey White',
          color: '#d4d4d4',
          price: 5000
        }
      ]
    }
  ]
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_POINTS:
      return {
        ...state,
        points: action.data
      }
      default:
        return state
  }
}

export default user;