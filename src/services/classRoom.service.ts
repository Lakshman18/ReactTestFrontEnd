import { AxiosResponse } from 'axios'
import axios from 'axios'
import { ClassRoomDto, AllocateClassRoomDto } from '../models'
 

const getAll = (): Promise<AxiosResponse<ClassRoomDto[]>> => {
  return axios.get('/api/ClassRoom/GetAll')
}

const saveOrUpdate = (saveObj: ClassRoomDto): Promise<AxiosResponse<ClassRoomDto>> => {
  return axios.post('/api/ClassRoom/SaveOrUpdate', saveObj)
}

const deleteItem = (id: number): Promise<AxiosResponse<void>> => {
  return axios.delete('/api/ClassRoom/Delete/?id='+id)
}

const getByTeacher = (id: number): Promise<AxiosResponse<ClassRoomDto[]>> => {
  return axios.get('/api/ClassRoom/GetByTeacher/?id='+id)
}

const teacherAllocate = (saveObj: AllocateClassRoomDto): Promise<AxiosResponse<AllocateClassRoomDto>> => {
  return axios.post('/api/ClassRoom/AllocateClassRoom', saveObj)
}

const teacherDeallocate = (tId: number, sId: number): Promise<AxiosResponse<void>> => {
  return axios.delete('/api/ClassRoom/DelocateClassRoom/?tId='+tId+ '&sId='+sId)
}

export const classRoomService = {
    getAll,
    saveOrUpdate,
    deleteItem,
    getByTeacher,
    teacherAllocate,
    teacherDeallocate
}