const initialState = {
  category: 'editStream',
  ofEditStream: {
    isShow: true,
    userId: 1
  }
}

const filterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_CATEGORY': 
      return {
        ...state,
        category: action.id
      }
    case 'CHANGE_USER': 
      return { 
        ...state,
        ofEditStream: {
          ...state.ofEditStream,
          userId: action.userId
        }
      }
    case 'SHOW_EDIT':
      return { 
        ...state,
        ofEditStream: {
          ...state.ofEditStream,
          isShow: action.show
        }
      }
    default:
      return state
  }
}

export const changeCategory = (id) => {
  return {
    type: 'CHANGE_CATEGORY',
    id
  }
}

export const changeUser = (userId) => {
  return {
    type: 'CHANGE_USER',
    userId
  }
}

export const showEdit = (show) => {
  return {
    type: 'SHOW_EDIT',
    show
  }
}

export default filterReducer