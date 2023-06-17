import { ACTION_STATUS } from '../../constants'
import { STUDENT_ACTIONS, COMMON_ACTIONS } from './../../constants/action.constants'
import { StudentStateDto , StudentDto} from './../../models'

const INITIAL_STATE: StudentStateDto = { 
  gridData: {
    data: [],
    isLoading: false,
    status: null
  },
  saveOrUpdateItem: {
    isLoading: false,
    status: null,
    data: {} as StudentDto
  },
  deleteItem: {
    isLoading: false,
    status: null
  },
}
const studentReducer = (state = INITIAL_STATE, action: { type: string; data: any }): StudentStateDto => {
  switch (action.type) {

    // GET_ALL_STU
    case STUDENT_ACTIONS.GET_ALL_STU + COMMON_ACTIONS.REQUEST:
      return {
        ...state,
        gridData: {
          ...state.gridData,
          isLoading: true,
          status: ACTION_STATUS.LOADING
        }
      }
    case STUDENT_ACTIONS.GET_ALL_STU + COMMON_ACTIONS.SUCCESS:
      return {
        ...state,
        gridData: {
          data: action.data,
          isLoading: false,
          status: ACTION_STATUS.SUCCESS
        }
      }
    case STUDENT_ACTIONS.GET_ALL_STU + COMMON_ACTIONS.ERROR:
      return {
        ...state,
        gridData: {
          data: [],
          isLoading: false,
          status: ACTION_STATUS.ERROR
        }
      }

    // SAVE_OR_UPDATE_STU
    case STUDENT_ACTIONS.SAVE_OR_UPDATE_STU + COMMON_ACTIONS.REQUEST:
        return {
          ...state,
          saveOrUpdateItem: {
            isLoading: true,
            status: ACTION_STATUS.LOADING,
            data: {} as StudentDto
          }
      }
    case STUDENT_ACTIONS.SAVE_OR_UPDATE_STU + COMMON_ACTIONS.SUCCESS:
        return {
          ...state,
          saveOrUpdateItem: {
            isLoading: false,
            status: ACTION_STATUS.SUCCESS,
            data: action.data
          }
      }
    case STUDENT_ACTIONS.SAVE_OR_UPDATE_STU + COMMON_ACTIONS.ERROR:
        return {
          ...state,
          saveOrUpdateItem: {
            isLoading: false,
            status: ACTION_STATUS.ERROR,
            data: {} as StudentDto
          }
      }
      
    // DELETE_INSTALLMENT
    case STUDENT_ACTIONS.DELETE_ITEM_STU + COMMON_ACTIONS.REQUEST:
      return {
        ...state,
        deleteItem: {
          isLoading: true,
          status: ACTION_STATUS.LOADING
        }
      }
    case STUDENT_ACTIONS.DELETE_ITEM_STU + COMMON_ACTIONS.SUCCESS:
      return {
        ...state,
        deleteItem: {
          isLoading: false,
          status: ACTION_STATUS.SUCCESS
        }
      }
    case STUDENT_ACTIONS.DELETE_ITEM_STU + COMMON_ACTIONS.ERROR:
      return {
        ...state,
        deleteItem: {
          isLoading: false,
          status: ACTION_STATUS.ERROR
        }
      }

    
    default:
      return state
  }
}

export default studentReducer