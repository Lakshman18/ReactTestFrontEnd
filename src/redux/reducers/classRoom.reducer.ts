import { ACTION_STATUS } from '../../constants'
import { CLASSROOM_ACTIONS, COMMON_ACTIONS } from './../../constants/action.constants'
import { ClassRoomStateDto , ClassRoomDto, AllocateClassRoomDto} from './../../models'

const INITIAL_STATE: ClassRoomStateDto = { 
  gridData: {
    data: [],
    isLoading: false,
    status: null
  },
  saveOrUpdateItem: {
    isLoading: false,
    status: null,
    data: {} as ClassRoomDto
  },
  deleteItem: {
    isLoading: false,
    status: null
  },
  teachersData: {
    data: [],
    isLoading: false,
    status: null
  },
  allocate: {
    isLoading: false,
    status: null,
    data: {} as AllocateClassRoomDto
  },
  deAllocate: {
    isLoading: false,
    status: null
  },
}
const classRoomReducer = (state = INITIAL_STATE, action: { type: string; data: any }): ClassRoomStateDto => {
  switch (action.type) {

    // GET_ALL_CR
    case CLASSROOM_ACTIONS.GET_ALL_CR + COMMON_ACTIONS.REQUEST:
      return {
        ...state,
        gridData: {
          ...state.gridData,
          isLoading: true,
          status: ACTION_STATUS.LOADING
        }
      }
    case CLASSROOM_ACTIONS.GET_ALL_CR + COMMON_ACTIONS.SUCCESS:
      return {
        ...state,
        gridData: {
          data: action.data,
          isLoading: false,
          status: ACTION_STATUS.SUCCESS
        }
      }
    case CLASSROOM_ACTIONS.GET_ALL_CR + COMMON_ACTIONS.ERROR:
      return {
        ...state,
        gridData: {
          data: [],
          isLoading: false,
          status: ACTION_STATUS.ERROR
        }
      }

    // SAVE_OR_UPDATE_CR
    case CLASSROOM_ACTIONS.SAVE_OR_UPDATE_CR + COMMON_ACTIONS.REQUEST:
        return {
          ...state,
          saveOrUpdateItem: {
            isLoading: true,
            status: ACTION_STATUS.LOADING,
            data: {} as ClassRoomDto
          }
      }
    case CLASSROOM_ACTIONS.SAVE_OR_UPDATE_CR + COMMON_ACTIONS.SUCCESS:
        return {
          ...state,
          saveOrUpdateItem: {
            isLoading: false,
            status: ACTION_STATUS.SUCCESS,
            data: action.data
          }
      }
    case CLASSROOM_ACTIONS.SAVE_OR_UPDATE_CR + COMMON_ACTIONS.ERROR:
        return {
          ...state,
          saveOrUpdateItem: {
            isLoading: false,
            status: ACTION_STATUS.ERROR,
            data: {} as ClassRoomDto
          }
      }
      
    // DELETE_ITEM_CR
    case CLASSROOM_ACTIONS.DELETE_ITEM_CR + COMMON_ACTIONS.REQUEST:
      return {
        ...state,
        deleteItem: {
          isLoading: true,
          status: ACTION_STATUS.LOADING
        }
      }
    case CLASSROOM_ACTIONS.DELETE_ITEM_CR + COMMON_ACTIONS.SUCCESS:
      return {
        ...state,
        deleteItem: {
          isLoading: false,
          status: ACTION_STATUS.SUCCESS
        }
      }
    case CLASSROOM_ACTIONS.DELETE_ITEM_CR + COMMON_ACTIONS.ERROR:
      return {
        ...state,
        deleteItem: {
          isLoading: false,
          status: ACTION_STATUS.ERROR
        }
      }
    
    // GET_CR_BY_TID
    case CLASSROOM_ACTIONS.GET_CR_BY_TID + COMMON_ACTIONS.REQUEST:
      return {
        ...state,
        teachersData: {
          ...state.gridData,
          isLoading: true,
          status: ACTION_STATUS.LOADING
        }
      }
    case CLASSROOM_ACTIONS.GET_CR_BY_TID + COMMON_ACTIONS.SUCCESS:
      return {
        ...state,
        teachersData: {
          data: action.data,
          isLoading: false,
          status: ACTION_STATUS.SUCCESS
        }
      }
    case CLASSROOM_ACTIONS.GET_CR_BY_TID + COMMON_ACTIONS.ERROR:
      return {
        ...state,
        teachersData: {
          data: [],
          isLoading: false,
          status: ACTION_STATUS.ERROR
        }
      }

    // ALLOCATE_CR
    case CLASSROOM_ACTIONS.ALLOCATE_CR + COMMON_ACTIONS.REQUEST:
        return {
          ...state,
          allocate: {
            isLoading: true,
            status: ACTION_STATUS.LOADING,
            data: {} as AllocateClassRoomDto
          }
      }
    case CLASSROOM_ACTIONS.ALLOCATE_CR + COMMON_ACTIONS.SUCCESS:
        return {
          ...state,
          allocate: {
            isLoading: false,
            status: ACTION_STATUS.SUCCESS,
            data: action.data
          }
      }
    case CLASSROOM_ACTIONS.ALLOCATE_CR + COMMON_ACTIONS.ERROR:
        return {
          ...state,
          allocate: {
            isLoading: false,
            status: ACTION_STATUS.ERROR,
            data: {} as AllocateClassRoomDto
          }
      }
    // DEALLOCATE_CR
    case CLASSROOM_ACTIONS.DEALLOCATE_CR + COMMON_ACTIONS.REQUEST:
      return {
        ...state,
        deAllocate: {
          isLoading: true,
          status: ACTION_STATUS.LOADING
        }
      }
    case CLASSROOM_ACTIONS.DEALLOCATE_CR + COMMON_ACTIONS.SUCCESS:
      return {
        ...state,
        deAllocate: {
          isLoading: false,
          status: ACTION_STATUS.SUCCESS
        }
      }
    case CLASSROOM_ACTIONS.DEALLOCATE_CR + COMMON_ACTIONS.ERROR:
      return {
        ...state,
        deAllocate: {
          isLoading: false,
          status: ACTION_STATUS.ERROR
        }
      }
      

    default:
      return state
  }
}

export default classRoomReducer