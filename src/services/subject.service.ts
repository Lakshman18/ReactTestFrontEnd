import { AxiosResponse } from 'axios'
import axios from 'axios'
import { SubjectDto, AllocateSubjectDto } from '../models'
 

const getAll = (): Promise<AxiosResponse<SubjectDto[]>> => {
  return axios.get('/api/Subject/GetAll')
}

const saveOrUpdate = (saveObj: SubjectDto): Promise<AxiosResponse<SubjectDto>> => {
  return axios.post('/api/Subject/SaveOrUpdate', saveObj)
}

const deleteItem = (id: number): Promise<AxiosResponse<void>> => {
  return axios.delete('/api/Subject/Delete/?id='+id)
}

const getByTeacher = (id: number): Promise<AxiosResponse<SubjectDto[]>> => {
  return axios.get('/api/Subject/GetByTeacher/?id='+id)
}

const teacherAllocate = (saveObj: AllocateSubjectDto): Promise<AxiosResponse<AllocateSubjectDto>> => {
  return axios.post('/api/Subject/AllocateSubject', saveObj)
}

const teacherDeallocate = (tId: number, sId: number): Promise<AxiosResponse<void>> => {
  return axios.delete('/api/Subject/DelocateSubject/?tId='+tId+ '&sId='+sId)
}

export const subjectService = {
    getAll,
    saveOrUpdate,
    deleteItem,
    getByTeacher,
    teacherAllocate,
    teacherDeallocate
}