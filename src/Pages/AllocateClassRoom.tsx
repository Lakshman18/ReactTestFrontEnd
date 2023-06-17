import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpDown, faCube} from '@fortawesome/free-solid-svg-icons'
import BreadCrumb from './BreadCrumb'
import {
    Table, Form, Row, Col, Label, FormGroup, Input, Button
  } from 'reactstrap';
import './style/page.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppStatDto, AllocateClassRoomDto } from '../models'
import { teacherActions, classRoomActions } from '../redux/actions'
import { ACTION_STATUS } from '../constants'
import { toast } from "react-toastify";

const INITIAL_FORM_STATE: AllocateClassRoomDto = {
    id: 0,
    teacherId: 0,
    classRoomId: 0
}

function AllocateClassRoom() {
    const dispatch = useDispatch<any>()
    const TeacherGridList = useSelector((state: AppStatDto) => state.teacher.gridData)
    const ClassRoomGridList = useSelector((state: AppStatDto) => state.classRoom.gridData)
    const AllocatedGridList = useSelector((state: AppStatDto) => state.classRoom.teachersData)
    const AllocatedItem = useSelector((state: AppStatDto) => state.classRoom.allocate)
    const DeAllocatedItem = useSelector((state: AppStatDto) => state.classRoom.deAllocate)
    const [formdata, setFormData] = useState<AllocateClassRoomDto>(INITIAL_FORM_STATE)

    useEffect(() => {
        dispatch(teacherActions.getAll() )
        dispatch(classRoomActions.getAll() )
    }, [])

    useEffect(() => {
        if (AllocatedItem.status === ACTION_STATUS.SUCCESS) {
            if(formdata.teacherId != 0){
                dispatch(classRoomActions.getByTeacher(formdata.teacherId))
            }
        }
      }, [AllocatedItem.status])
    
    useEffect(() => {
        if (DeAllocatedItem.status === ACTION_STATUS.SUCCESS) {
            if(formdata.teacherId != 0){
                dispatch(classRoomActions.getByTeacher(formdata.teacherId))
            }
        }
    }, [DeAllocatedItem.status])

    const handleChange = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      ) => {
        setFormData({
          ...formdata,
          [e.target.name]: e.target.value.trim()
        });
    };

    const onSearch = () => {
        if(formdata.teacherId != 0){
            dispatch(classRoomActions.getByTeacher(formdata.teacherId))
        }
        else{
            toast.error("Please Select a Record");
        }
    }

    const onSave = (e:any) => {
        if(formdata.teacherId != 0 && formdata.classRoomId != 0){
            e.preventDefault() 
              const payload: AllocateClassRoomDto = {
                id: formdata.id,
                teacherId: formdata.teacherId,
                classRoomId: formdata.classRoomId
              }
            dispatch(classRoomActions.teacherAllocate(payload))
        }
        else{
            toast.error("Please fill the required fields");
        }
    }

    const onDeallocate = (id:number) => {
        if(formdata.teacherId != 0 && id> 0){
            dispatch(classRoomActions.teacherDeallocate(formdata.teacherId, id))
        }
        else{
            toast.error("Please Select a Record");
        }
    }

  return (
    <>
        <div className="gridAllocationDiv" >
            <fieldset className="border rounded-3 p-3">
                <legend className="float-none w-auto px-3">
                    Teacher Details
                </legend>
                <Form>
                    <FormGroup row>
                        <Col sm={1}>
                            <Label
                            sm={2}
                            >
                            Teacher
                            </Label>
                        </Col>
                        <Col sm={3}>
                                <select name="teacherId" className="form-select form-select- md mb-3" aria-label=".form-select-md example"
                                    onChange={(e: any) => handleChange(e)}
                                    >
                                        <option value="0" >Select teacher </option>
                                        {
                                            TeacherGridList.data.map((item) => {
                                                return <option value={item.id} key={item.id} >{item.firstName}</option>
                                            })
                                        }
                                </select>
                        </Col>
                        <Col sm={3}>
                            <Button color="secondary" onClick={onSearch} >
                                Search
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </fieldset>

            <fieldset className="border rounded-3 p-3 mt-3">
                <legend className="float-none w-auto px-3">
                    Allocated Class Rooms
                </legend>
                <Form>
                    <FormGroup row>
                        <Col sm={1}>
                            <Label
                            sm={2}
                            >
                            Class Rooms
                            </Label>
                        </Col>
                        <Col sm={3}>
                                <select name="classRoomId" className="form-select form-select- md mb-3" aria-label=".form-select-md example"
                                    onChange={(e: any) => handleChange(e)}
                                    >
                                        <option value="0" >Select class room </option>
                                        {
                                            ClassRoomGridList.data.map((item) => {
                                                return <option value={item.id} key={item.id} >{item.name}</option>
                                            })
                                        }
                                </select>
                        </Col>
                        <Col sm={3}>
                            <Button color="secondary" onClick ={onSave} >
                                Allocate
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>

                <Table >
                    <thead>
                        <tr>
                        <th style={{width:'80%', background:'grey', color:'white'}}>
                            Class Rooms
                        </th>
                        <th style={{  background:'grey', color:'white'}}>
                            Action
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            AllocatedGridList.data.map((item) => {
                                return <tr key={item.id}> 
                                        <td >                                                        
                                            {item.name}
                                        </td>
                                        <td >                                                        
                                        <Button color="secondary" onClick={() => onDeallocate(item.id)} >
                                            Deallocate
                                        </Button>
                                        </td>
                                    </tr>
                            })
                        }
                    </tbody>
                </Table>
            </fieldset>
        </div>

    </>
    );
}   

export default AllocateClassRoom;
