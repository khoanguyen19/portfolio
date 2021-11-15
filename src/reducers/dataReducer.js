import Data from '../data'

const initialState = Data.editStream[0].videos

const dataReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_DATA':
      return Data[action.id]
    case 'LOAD_EDIT':
      return Data.editStream[action.userId - 1].videos
    default:
      return state
  }
}

export const loadData = (id) => {
  return {
    type: 'LOAD_DATA',
    id
  }
}

export const loadEdit = (userId) => {
  return {
    type: 'LOAD_EDIT',
    userId
  }
}

export default dataReducer