import { subjectService } from '../../services'
import { SUBJECT_ACTIONS, COMMON_ACTIONS } from '../../constants'
import {ClassRoomDto, AllocateSubjectDto} from '../../models'
import { toast } from "react-toastify";

const getAll = () => {
  return (dispatch: (arg0: { type: string, data?: any, error?: string }) => void) => {
    dispatch({ type: SUBJECT_ACTIONS.GET_ALL_SUB + COMMON_ACTIONS.REQUEST })
    subjectService.getAll()
      .then((res) => {
        dispatch({ type: SUBJECT_ACTIONS.GET_ALL_SUB + COMMON_ACTIONS.SUCCESS, data: res.data })
      })
      .catch((error) => {
        if(error.response){
            toast.error(error.response.data.message);
        }
        dispatch({ type: SUBJECT_ACTIONS.GET_ALL_SUB + COMMON_ACTIONS.ERROR })
      })
  }
}

const deleteItem = (id: number) => {
  return (dispatch: (arg0: { type: string, data?: any, error?: string }) => void) => {
    dispatch({ type: SUBJECT_ACTIONS.DELETE_ITEM_SUB + COMMON_ACTIONS.REQUEST })
    subjectService.deleteItem(id)
      .then((res) => {
        dispatch({ type: SUBJECT_ACTIONS.DELETE_ITEM_SUB + COMMON_ACTIONS.SUCCESS, data: res.data })
      })
      .catch((error) => {
        if(error.response){
            toast.error(error.response.data.message);
        }
        dispatch({ type: SUBJECT_ACTIONS.DELETE_ITEM_SUB + COMMON_ACTIONS.ERROR })
      })
  }
}

const saveOrUpdate = (paylod: ClassRoomDto) => {
  return (dispatch: (arg0: { type: string, data?: any, error?: string }) => void) => {
    dispatch({ type: SUBJECT_ACTIONS.SAVE_OR_UPDATE_SUB + COMMON_ACTIONS.REQUEST })
    subjectService.saveOrUpdate(paylod)
      .then((res) => {
        dispatch({ type: SUBJECT_ACTIONS.SAVE_OR_UPDATE_SUB + COMMON_ACTIONS.SUCCESS, data: res.data })
      })
      .catch((error) => {
        if(error.response){
            toast.error(error.response.data.message);
        }
        dispatch({ type: SUBJECT_ACTIONS.SAVE_OR_UPDATE_SUB + COMMON_ACTIONS.ERROR })
      })
  }
}

const getByTeacher = (id: number) => {
  return (dispatch: (arg0: { type: string, data?: any, error?: string }) => void) => {
    dispatch({ type: SUBJECT_ACTIONS.GET_SUB_BY_TID + COMMON_ACTIONS.REQUEST })
    subjectService.getByTeacher(id)
      .then((res) => {
        dispatch({ type: SUBJECT_ACTIONS.GET_SUB_BY_TID + COMMON_ACTIONS.SUCCESS, data: res.data })
      })
      .catch((error) => {
        if(error.response){
            toast.error(error.response.data.message);
        }
        dispatch({ type: SUBJECT_ACTIONS.GET_SUB_BY_TID + COMMON_ACTIONS.ERROR })
      })
  }
}


const teacherAllocate = (paylod: AllocateSubjectDto) => {
  return (dispatch: (arg0: { type: string, data?: any, error?: string }) => void) => {
    dispatch({ type: SUBJECT_ACTIONS.ALLOCATE_SUB + COMMON_ACTIONS.REQUEST })
    subjectService.teacherAllocate(paylod)
      .then((res) => {
        dispatch({ type: SUBJECT_ACTIONS.ALLOCATE_SUB + COMMON_ACTIONS.SUCCESS, data: res.data })
      })
      .catch((error) => {
        if(error.response){
            toast.error(error.response.data.message);
        }
        dispatch({ type: SUBJECT_ACTIONS.ALLOCATE_SUB + COMMON_ACTIONS.ERROR })
      })
  }
}

const teacherDeallocate = (tId: number, sId: number) => {
  return (dispatch: (arg0: { type: string, data?: any, error?: string }) => void) => {
    dispatch({ type: SUBJECT_ACTIONS.DEALLOCATE_SUB + COMMON_ACTIONS.REQUEST })
    subjectService.teacherDeallocate(tId, sId)
      .then((res) => {
        dispatch({ type: SUBJECT_ACTIONS.DEALLOCATE_SUB + COMMON_ACTIONS.SUCCESS, data: res.data })
      })
      .catch((error) => {
        if(error.response){
            toast.error(error.response.data.message);
        }
        dispatch({ type: SUBJECT_ACTIONS.DEALLOCATE_SUB + COMMON_ACTIONS.ERROR })
      })
  }
}



export const subjectActions = {
    getAll,
    deleteItem,
    saveOrUpdate,
    getByTeacher,
    teacherAllocate,
    teacherDeallocate
}