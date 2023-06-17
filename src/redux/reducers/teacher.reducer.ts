import { ACTION_STATUS } from '../../constants'
import { TEACHER_ACTIONS, COMMON_ACTIONS } from './../../constants/action.constants'
import { TeacherStateDto , TeacherDto} from './../../models'

const INITIAL_STATE: TeacherStateDto = { 
  gridData: {
    data: [],
    isLoading: false,
    status: null
  },
  saveOrUpdateItem: {
    isLoading: false,
    status: null,
    data: {} as TeacherDto
  },
  deleteItem: {
    isLoading: false,
    status: null
  },
}
const teacherReducer = (state = INITIAL_STATE, action: { type: string; data: any }): TeacherStateDto => {
  switch (action.type) {

    // GET_ALL
    case TEACHER_ACTIONS.GET_ALL + COMMON_ACTIONS.REQUEST:
      return {
        ...state,
        gridData: {
          ...state.gridData,
          isLoading: true,
          status: ACTION_STATUS.LOADING
        }
      }
    case TEACHER_ACTIONS.GET_ALL + COMMON_ACTIONS.SUCCESS:
      return {
        ...state,
        gridData: {
          data: action.data,
          isLoading: false,
          status: ACTION_STATUS.SUCCESS
        }
      }
    case TEACHER_ACTIONS.GET_ALL + COMMON_ACTIONS.ERROR:
      return {
        ...state,
        gridData: {
          data: [],
          isLoading: false,
          status: ACTION_STATUS.ERROR
        }
      }

    // SAVE_OR_UPDATE
    case TEACHER_ACTIONS.SAVE_OR_UPDATE + COMMON_ACTIONS.REQUEST:
        return {
          ...state,
          saveOrUpdateItem: {
            isLoading: true,
            status: ACTION_STATUS.LOADING,
            data: {} as TeacherDto
          }
      }
    case TEACHER_ACTIONS.SAVE_OR_UPDATE + COMMON_ACTIONS.SUCCESS:
        return {
          ...state,
          saveOrUpdateItem: {
            isLoading: false,
            status: ACTION_STATUS.SUCCESS,
            data: action.data
          }
      }
    case TEACHER_ACTIONS.SAVE_OR_UPDATE + COMMON_ACTIONS.ERROR:
        return {
          ...state,
          saveOrUpdateItem: {
            isLoading: false,
            status: ACTION_STATUS.ERROR,
            data: {} as TeacherDto
          }
      }
      
    // DELETE_INSTALLMENT
    case TEACHER_ACTIONS.DELETE_ITEM + COMMON_ACTIONS.REQUEST:
      return {
        ...state,
        deleteItem: {
          isLoading: true,
          status: ACTION_STATUS.LOADING
        }
      }
    case TEACHER_ACTIONS.DELETE_ITEM + COMMON_ACTIONS.SUCCESS:
      return {
        ...state,
        deleteItem: {
          isLoading: false,
          status: ACTION_STATUS.SUCCESS
        }
      }
    case TEACHER_ACTIONS.DELETE_ITEM + COMMON_ACTIONS.ERROR:
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

export default teacherReducer