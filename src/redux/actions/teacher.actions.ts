import { teacherService } from './../../services'
import { TEACHER_ACTIONS, COMMON_ACTIONS } from './../../constants'
import {TeacherDto} from '../../models'
import { toast } from "react-toastify";

const getAll = () => {
  return (dispatch: (arg0: { type: string, data?: any, error?: string }) => void) => {
    dispatch({ type: TEACHER_ACTIONS.GET_ALL + COMMON_ACTIONS.REQUEST })
    teacherService.getAll()
      .then((res) => {
        dispatch({ type: TEACHER_ACTIONS.GET_ALL + COMMON_ACTIONS.SUCCESS, data: res.data })
      })
      .catch((error) => {
        if(error.response){
            toast.error(error.response.data.message);
        }
        dispatch({ type: TEACHER_ACTIONS.GET_ALL + COMMON_ACTIONS.ERROR })
      })
  }
}

const deleteItem = (id: number) => {
  return (dispatch: (arg0: { type: string, data?: any, error?: string }) => void) => {
    dispatch({ type: TEACHER_ACTIONS.DELETE_ITEM + COMMON_ACTIONS.REQUEST })
    teacherService.deleteItem(id)
      .then((res) => {
        dispatch({ type: TEACHER_ACTIONS.DELETE_ITEM + COMMON_ACTIONS.SUCCESS, data: res.data })
      })
      .catch((error) => {
        if(error.response){
            toast.error(error.response.data.message);
        }
        dispatch({ type: TEACHER_ACTIONS.DELETE_ITEM + COMMON_ACTIONS.ERROR })
      })
  }
}

const saveOrUpdate = (paylod: TeacherDto) => {
  return (dispatch: (arg0: { type: string, data?: any, error?: string }) => void) => {
    dispatch({ type: TEACHER_ACTIONS.SAVE_OR_UPDATE + COMMON_ACTIONS.REQUEST })
    teacherService.saveOrUpdate(paylod)
      .then((res) => {
        dispatch({ type: TEACHER_ACTIONS.SAVE_OR_UPDATE + COMMON_ACTIONS.SUCCESS, data: res.data })
      })
      .catch((error) => {
        if(error.response){
            toast.error(error.response.data.message);
        }
        dispatch({ type: TEACHER_ACTIONS.SAVE_OR_UPDATE + COMMON_ACTIONS.ERROR })
      })
  }
}



export const teacherActions = {
    getAll,
    deleteItem,
    saveOrUpdate,
}