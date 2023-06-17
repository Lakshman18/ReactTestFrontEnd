export const COMMON_ACTIONS = {
    REQUEST: '_REQUEST',
    SUCCESS: '_SUCCESS',
    ERROR: '_ERROR',
    CLEAR: '_CLEAR',
    RESET_STATUS: '_RESET_STATUS',
    MODIFY: '_MODIFY'
}

export enum ACTION_STATUS {
    SUCCESS = 'Success',
    UPDATED = 'Updated',
    ERROR = 'Error',
    WARNING = 'Warning',
    LOADING = 'Loading',
}

export const CLASSROOM_ACTIONS = {
    GET_ALL_CR: 'GET_ALL_CR',
    SAVE_OR_UPDATE_CR: 'SAVE_OR_UPDATE_CR',
    DELETE_ITEM_CR: 'DELETE_ITEM_CR',
    GET_CR_BY_TID: 'GET_CR_BY_TID',
    ALLOCATE_CR: 'ALLOCATE_CR',
    DEALLOCATE_CR: 'DEALLOCATE_CR'
}

export const SUBJECT_ACTIONS = {
    GET_ALL_SUB: 'GET_ALL_SUB',
    SAVE_OR_UPDATE_SUB: 'SAVE_OR_UPDATE_SUB',
    DELETE_ITEM_SUB: 'DELETE_ITEM_SUB',
    GET_SUB_BY_TID: 'GET_SUB_BY_TID',
    ALLOCATE_SUB: 'ALLOCATE_SUB',
    DEALLOCATE_SUB: 'DEALLOCATE_SUB'
}

export const TEACHER_ACTIONS = {
    GET_ALL: 'GET_ALL',
    SAVE_OR_UPDATE: 'SAVE_OR_UPDATE',
    DELETE_ITEM: 'DELETE_ITEM'
}

export const STUDENT_ACTIONS = {
    GET_ALL_STU: 'GET_ALL_STU',
    SAVE_OR_UPDATE_STU: 'SAVE_OR_UPDATE_STU',
    DELETE_ITEM_STU: 'DELETE_ITEM_STU'
}