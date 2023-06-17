import { AxiosResponse } from 'axios'
import axios from 'axios'
import { TeacherDto } from '../models'
 

const getAll = (): Promise<AxiosResponse<TeacherDto[]>> => {
  return axios.get('/api/Teacher/GetAll')
}

const saveOrUpdate = (saveObj: TeacherDto): Promise<AxiosResponse<TeacherDto>> => {
  return axios.post('/api/Teacher/SaveOrUpdate', saveObj)
}

const deleteItem = (id: number): Promise<AxiosResponse<void>> => {
  return axios.delete('/api/Teacher/Delete/?id='+id)
}

export const teacherService = {
    getAll,
    saveOrUpdate,
    deleteItem,
}