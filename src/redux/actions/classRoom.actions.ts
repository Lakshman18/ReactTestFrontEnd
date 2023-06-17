import { classRoomService } from './../../services'
import { CLASSROOM_ACTIONS, COMMON_ACTIONS } from './../../constants'
import {ClassRoomDto, AllocateClassRoomDto} from '../../models'
import { toast } from "react-toastify";

const getAll = () => {
  return (dispatch: (arg0: { type: string, data?: any, error?: string }) => void) => {
    dispatch({ type: CLASSROOM_ACTIONS.GET_ALL_CR + COMMON_ACTIONS.REQUEST })
    classRoomService.getAll()
      .then((res) => {
        dispatch({ type: CLASSROOM_ACTIONS.GET_ALL_CR + COMMON_ACTIONS.SUCCESS, data: res.data })
      })
      .catch((error) => {
        if(error.response){
            toast.error(error.response.data.message);
        }
        dispatch({ type: CLASSROOM_ACTIONS.GET_ALL_CR + COMMON_ACTIONS.ERROR })
      })
  }
}

const deleteItem = (id: number) => {
  return (dispatch: (arg0: { type: string, data?: any, error?: string }) => void) => {
    dispatch({ type: CLASSROOM_ACTIONS.DELETE_ITEM_CR + COMMON_ACTIONS.REQUEST })
    classRoomService.deleteItem(id)
      .then((res) => {
        dispatch({ type: CLASSROOM_ACTIONS.DELETE_ITEM_CR + COMMON_ACTIONS.SUCCESS, data: res.data })
      })
      .catch((error) => {
        if(error.response){
            toast.error(error.response.data.message);
        }
        dispatch({ type: CLASSROOM_ACTIONS.DELETE_ITEM_CR + COMMON_ACTIONS.ERROR })
      })
  }
}

const saveOrUpdate = (paylod: ClassRoomDto) => {
  return (dispatch: (arg0: { type: string, data?: any, error?: string }) => void) => {
    dispatch({ type: CLASSROOM_ACTIONS.SAVE_OR_UPDATE_CR + COMMON_ACTIONS.REQUEST })
    classRoomService.saveOrUpdate(paylod)
      .then((res) => {
        dispatch({ type: CLASSROOM_ACTIONS.SAVE_OR_UPDATE_CR + COMMON_ACTIONS.SUCCESS, data: res.data })
      })
      .catch((error) => {
        if(error.response){
            toast.error(error.response.data.message);
        }
        dispatch({ type: CLASSROOM_ACTIONS.SAVE_OR_UPDATE_CR + COMMON_ACTIONS.ERROR })
      })
  }
}

const getByTeacher = (id: number) => {
  return (dispatch: (arg0: { type: string, data?: any, error?: string }) => void) => {
    dispatch({ type: CLASSROOM_ACTIONS.GET_CR_BY_TID + COMMON_ACTIONS.REQUEST })
    classRoomService.getByTeacher(id)
      .then((res) => {
        dispatch({ type: CLASSROOM_ACTIONS.GET_CR_BY_TID + COMMON_ACTIONS.SUCCESS, data: res.data })
      })
      .catch((error) => {
        if(error.response){
            toast.error(error.response.data.message);
        }
        dispatch({ type: CLASSROOM_ACTIONS.GET_CR_BY_TID + COMMON_ACTIONS.ERROR })
      })
  }
}


const teacherAllocate = (paylod: AllocateClassRoomDto) => {
  return (dispatch: (arg0: { type: string, data?: any, error?: string }) => void) => {
    dispatch({ type: CLASSROOM_ACTIONS.ALLOCATE_CR + COMMON_ACTIONS.REQUEST })
    classRoomService.teacherAllocate(paylod)
      .then((res) => {
        dispatch({ type: CLASSROOM_ACTIONS.ALLOCATE_CR + COMMON_ACTIONS.SUCCESS, data: res.data })
      })
      .catch((error) => {
        if(error.response){
            toast.error(error.response.data.message);
        }
        dispatch({ type: CLASSROOM_ACTIONS.ALLOCATE_CR + COMMON_ACTIONS.ERROR })
      })
  }
}

const teacherDeallocate = (tId: number, sId: number) => {
  return (dispatch: (arg0: { type: string, data?: any, error?: string }) => void) => {
    dispatch({ type: CLASSROOM_ACTIONS.DEALLOCATE_CR + COMMON_ACTIONS.REQUEST })
    classRoomService.teacherDeallocate(tId, sId)
      .then((res) => {
        dispatch({ type: CLASSROOM_ACTIONS.DEALLOCATE_CR + COMMON_ACTIONS.SUCCESS, data: res.data })
      })
      .catch((error) => {
        if(error.response){
            toast.error(error.response.data.message);
        }
        dispatch({ type: CLASSROOM_ACTIONS.DEALLOCATE_CR + COMMON_ACTIONS.ERROR })
      })
  }
}


export const classRoomActions = {
    getAll,
    deleteItem,
    saveOrUpdate,
    getByTeacher,
    teacherAllocate,
    teacherDeallocate
}