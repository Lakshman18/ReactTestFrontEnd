import { ClassRoomDto, SubjectDto, TeacherDto, StudentDto, AllocateClassRoomDto, AllocateSubjectDto } from '../models'
import { ACTION_STATUS } from '../constants'

export interface  ClassRoomStateDto {
    gridData: {
        isLoading: boolean;
        status: ACTION_STATUS | null;
        data: ClassRoomDto[]
    },
    deleteItem: {
        isLoading: boolean;
        status: ACTION_STATUS | null;
    },
    saveOrUpdateItem: {
        isLoading: boolean;
        status: ACTION_STATUS | null;
        data: ClassRoomDto
    },
    teachersData: {
        isLoading: boolean;
        status: ACTION_STATUS | null;
        data: ClassRoomDto[]
    },
    allocate: {
        isLoading: boolean;
        status: ACTION_STATUS | null;
        data: AllocateClassRoomDto
    },
    deAllocate: {
        isLoading: boolean;
        status: ACTION_STATUS | null;
    },
}

export interface  SubjectStateDto {
    gridData: {
        isLoading: boolean;
        status: ACTION_STATUS | null;
        data: SubjectDto[]
    },
    deleteItem: {
        isLoading: boolean;
        status: ACTION_STATUS | null;
    },
    saveOrUpdateItem: {
        isLoading: boolean;
        status: ACTION_STATUS | null;
        data: SubjectDto
    },
    teachersData: {
        isLoading: boolean;
        status: ACTION_STATUS | null;
        data: SubjectDto[]
    },
    allocate: {
        isLoading: boolean;
        status: ACTION_STATUS | null;
        data: AllocateSubjectDto
    },
    deAllocate: {
        isLoading: boolean;
        status: ACTION_STATUS | null;
    },
}

export interface  TeacherStateDto {
    gridData: {
        isLoading: boolean;
        status: ACTION_STATUS | null;
        data: TeacherDto[]
    },
    deleteItem: {
        isLoading: boolean;
        status: ACTION_STATUS | null;
    },
    saveOrUpdateItem: {
        isLoading: boolean;
        status: ACTION_STATUS | null;
        data: TeacherDto
    }
}

export interface  StudentStateDto {
    gridData: {
        isLoading: boolean;
        status: ACTION_STATUS | null;
        data: StudentDto[]
    },
    deleteItem: {
        isLoading: boolean;
        status: ACTION_STATUS | null;
    },
    saveOrUpdateItem: {
        isLoading: boolean;
        status: ACTION_STATUS | null;
        data: StudentDto
    }
}


export interface AppStatDto { 
    classRoom : ClassRoomStateDto,
    subject: SubjectStateDto,
    teacher: TeacherStateDto,
    student: StudentStateDto
}