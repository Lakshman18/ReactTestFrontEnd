import { AxiosResponse } from 'axios'
import axios from 'axios'
import { StudentDto } from '../models'
 

const getAll = (): Promise<AxiosResponse<StudentDto[]>> => {
  return axios.get('/api/Student/GetAll')
}

const saveOrUpdate = (saveObj: StudentDto): Promise<AxiosResponse<StudentDto>> => {
  return axios.post('/api/Student/SaveOrUpdate', saveObj)
}

const deleteItem = (id: number): Promise<AxiosResponse<void>> => {
  return axios.delete('/api/Student/Delete/?id='+id)
}

export const studentService = {
    getAll,
    saveOrUpdate,
    deleteItem,
}