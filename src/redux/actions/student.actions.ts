import { studentService } from './../../services'
import { STUDENT_ACTIONS, COMMON_ACTIONS } from './../../constants'
import {StudentDto} from '../../models'
import { toast } from "react-toastify";

const getAll = () => {
  return (dispatch: (arg0: { type: string, data?: any, error?: string }) => void) => {
    dispatch({ type: STUDENT_ACTIONS.GET_ALL_STU + COMMON_ACTIONS.REQUEST })
    studentService.getAll()
      .then((res) => {
        dispatch({ type: STUDENT_ACTIONS.GET_ALL_STU + COMMON_ACTIONS.SUCCESS, data: res.data })
      })
      .catch((error) => {
        if(error.response){
            toast.error(error.response.data.message);
        }
        dispatch({ type: STUDENT_ACTIONS.GET_ALL_STU + COMMON_ACTIONS.ERROR })
      })
  }
}

const deleteItem = (id: number) => {
  return (dispatch: (arg0: { type: string, data?: any, error?: string }) => void) => {
    dispatch({ type: STUDENT_ACTIONS.DELETE_ITEM_STU + COMMON_ACTIONS.REQUEST })
    studentService.deleteItem(id)
      .then((res) => {
        dispatch({ type: STUDENT_ACTIONS.DELETE_ITEM_STU + COMMON_ACTIONS.SUCCESS, data: res.data })
      })
      .catch((error) => {
        if(error.response){
            toast.error(error.response.data.message);
        }
        dispatch({ type: STUDENT_ACTIONS.DELETE_ITEM_STU + COMMON_ACTIONS.ERROR })
      })
  }
}

const saveOrUpdate = (paylod: StudentDto) => {
  return (dispatch: (arg0: { type: string, data?: any, error?: string }) => void) => {
    dispatch({ type: STUDENT_ACTIONS.SAVE_OR_UPDATE_STU + COMMON_ACTIONS.REQUEST })
    studentService.saveOrUpdate(paylod)
      .then((res) => {
        dispatch({ type: STUDENT_ACTIONS.SAVE_OR_UPDATE_STU + COMMON_ACTIONS.SUCCESS, data: res.data })
      })
      .catch((error) => {
        if(error.response){
            toast.error(error.response.data.message);
        }
        dispatch({ type: STUDENT_ACTIONS.SAVE_OR_UPDATE_STU + COMMON_ACTIONS.ERROR })
      })
  }
}



export const studentActions = {
    getAll,
    deleteItem,
    saveOrUpdate,
}