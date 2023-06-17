import { ACTION_STATUS } from '../../constants'
import { SUBJECT_ACTIONS, COMMON_ACTIONS } from './../../constants/action.constants'
import { SubjectStateDto , SubjectDto, AllocateSubjectDto} from './../../models'

const INITIAL_STATE: SubjectStateDto = { 
  gridData: {
    data: [],
    isLoading: false,
    status: null
  },
  saveOrUpdateItem: {
    isLoading: false,
    status: null,
    data: {} as SubjectDto
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
    data: {} as AllocateSubjectDto
  },
  deAllocate: {
    isLoading: false,
    status: null
  },
}
const subjectReducer = (state = INITIAL_STATE, action: { type: string; data: any }): SubjectStateDto => {
  switch (action.type) {

    // GET_ALL_SUB
    case SUBJECT_ACTIONS.GET_ALL_SUB + COMMON_ACTIONS.REQUEST:
      return {
        ...state,
        gridData: {
          ...state.gridData,
          isLoading: true,
          status: ACTION_STATUS.LOADING
        }
      }
    case SUBJECT_ACTIONS.GET_ALL_SUB + COMMON_ACTIONS.SUCCESS:
      return {
        ...state,
        gridData: {
          data: action.data,
          isLoading: false,
          status: ACTION_STATUS.SUCCESS
        }
      }
    case SUBJECT_ACTIONS.GET_ALL_SUB + COMMON_ACTIONS.ERROR:
      return {
        ...state,
        gridData: {
          data: [],
          isLoading: false,
          status: ACTION_STATUS.ERROR
        }
      }

    // SAVE_OR_UPDATE_SUB
    case SUBJECT_ACTIONS.SAVE_OR_UPDATE_SUB + COMMON_ACTIONS.REQUEST:
        return {
          ...state,
          saveOrUpdateItem: {
            isLoading: true,
            status: ACTION_STATUS.LOADING,
            data: {} as SubjectDto
          }
      }
    case SUBJECT_ACTIONS.SAVE_OR_UPDATE_SUB + COMMON_ACTIONS.SUCCESS:
        return {
          ...state,
          saveOrUpdateItem: {
            isLoading: false,
            status: ACTION_STATUS.SUCCESS,
            data: action.data
          }
      }
    case SUBJECT_ACTIONS.SAVE_OR_UPDATE_SUB + COMMON_ACTIONS.ERROR:
        return {
          ...state,
          saveOrUpdateItem: {
            isLoading: false,
            status: ACTION_STATUS.ERROR,
            data: {} as SubjectDto
          }
      }
      
    // DELETE_INSTALLMENT
    case SUBJECT_ACTIONS.DELETE_ITEM_SUB + COMMON_ACTIONS.REQUEST:
      return {
        ...state,
        deleteItem: {
          isLoading: true,
          status: ACTION_STATUS.LOADING
        }
      }
    case SUBJECT_ACTIONS.DELETE_ITEM_SUB + COMMON_ACTIONS.SUCCESS:
      return {
        ...state,
        deleteItem: {
          isLoading: false,
          status: ACTION_STATUS.SUCCESS
        }
      }
    case SUBJECT_ACTIONS.DELETE_ITEM_SUB + COMMON_ACTIONS.ERROR:
      return {
        ...state,
        deleteItem: {
          isLoading: false,
          status: ACTION_STATUS.ERROR
        }
      }
    // GET_CR_BY_TID
    case SUBJECT_ACTIONS.GET_SUB_BY_TID + COMMON_ACTIONS.REQUEST:
      return {
        ...state,
        teachersData: {
          ...state.gridData,
          isLoading: true,
          status: ACTION_STATUS.LOADING
        }
      }
    case SUBJECT_ACTIONS.GET_SUB_BY_TID + COMMON_ACTIONS.SUCCESS:
      return {
        ...state,
        teachersData: {
          data: action.data,
          isLoading: false,
          status: ACTION_STATUS.SUCCESS
        }
      }
    case SUBJECT_ACTIONS.GET_SUB_BY_TID + COMMON_ACTIONS.ERROR:
      return {
        ...state,
        teachersData: {
          data: [],
          isLoading: false,
          status: ACTION_STATUS.ERROR
        }
      }

    // ALLOCATE_CR
    case SUBJECT_ACTIONS.ALLOCATE_SUB + COMMON_ACTIONS.REQUEST:
        return {
          ...state,
          allocate: {
            isLoading: true,
            status: ACTION_STATUS.LOADING,
            data: {} as AllocateSubjectDto
          }
      }
    case SUBJECT_ACTIONS.ALLOCATE_SUB + COMMON_ACTIONS.SUCCESS:
        return {
          ...state,
          allocate: {
            isLoading: false,
            status: ACTION_STATUS.SUCCESS,
            data: action.data
          }
      }
    case SUBJECT_ACTIONS.ALLOCATE_SUB + COMMON_ACTIONS.ERROR:
        return {
          ...state,
          allocate: {
            isLoading: false,
            status: ACTION_STATUS.ERROR,
            data: {} as AllocateSubjectDto
          }
      }
    // DEALLOCATE_CR
    case SUBJECT_ACTIONS.DEALLOCATE_SUB + COMMON_ACTIONS.REQUEST:
      return {
        ...state,
        deAllocate: {
          isLoading: true,
          status: ACTION_STATUS.LOADING
        }
      }
    case SUBJECT_ACTIONS.DEALLOCATE_SUB + COMMON_ACTIONS.SUCCESS:
      return {
        ...state,
        deAllocate: {
          isLoading: false,
          status: ACTION_STATUS.SUCCESS
        }
      }
    case SUBJECT_ACTIONS.DEALLOCATE_SUB + COMMON_ACTIONS.ERROR:
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

export default subjectReducer