import { combineReducers } from 'redux'
import classRoomReducer from './classRoom.reducer'
import subjectReducer from './subject.reducer'
import teacherReducer from './teacher.reducer'
import studentReducer from './student.reducer'

const rootReducer = combineReducers({
  classRoom: classRoomReducer,
  subject: subjectReducer,
  teacher: teacherReducer,
  student: studentReducer
})

export default rootReducer