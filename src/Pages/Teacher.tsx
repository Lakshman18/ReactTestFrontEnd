import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpDown, faCube} from '@fortawesome/free-solid-svg-icons'
import BreadCrumb from './BreadCrumb'
import {
    Table, Form, Row, Col, Label, FormGroup, Input, Button
  } from 'reactstrap';
import './style/page.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppStatDto, TeacherDto } from '../models'
import { teacherActions } from '../redux/actions'
import { ACTION_STATUS } from '../constants'
import { toast } from "react-toastify";

const INITIAL_FORM_STATE: TeacherDto = {
    id: 0,
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
  }

function Teacher() {
    const dispatch = useDispatch<any>() 
    const [showTable, setShowTable] = useState(true);
    const [showForm, setShowForm] = useState(true);
    const GridList = useSelector((state: AppStatDto) => state.teacher.gridData)
    const SaveItem = useSelector((state: AppStatDto) => state.teacher.saveOrUpdateItem)
    const DeleteItem = useSelector((state: AppStatDto) => state.teacher.deleteItem)
    const [formdata, setFormData] = useState<TeacherDto>(INITIAL_FORM_STATE)

    useEffect(() => {
        dispatch(teacherActions.getAll() )
    }, [])

    useEffect(() => {
        if (GridList.status === ACTION_STATUS.SUCCESS) {
        }
      }, [GridList.status])
    
    useEffect(() => {
    if (SaveItem.status === ACTION_STATUS.SUCCESS) {
        dispatch(teacherActions.getAll() )
        toast.success("Success");
        onReset()
    }
    }, [SaveItem.status])

    useEffect(() => {
        if (DeleteItem.status === ACTION_STATUS.SUCCESS) {
            dispatch(teacherActions.getAll() )
            toast.success("Success");
            onReset()
        }
    }, [DeleteItem.status])

    const onClickGridColapse = () => {
        setShowTable(!showTable);
    } 

    const onClickFormColapse = () => {
        setShowForm(!showForm);
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      ) => {
        setFormData({
          ...formdata,
          [e.target.name]: e.target.value.trim()
        });
    };

    const onReset = () => {
        setFormData(INITIAL_FORM_STATE);
    }

    const onDelete = () => {
        if(formdata.id != 0){
            dispatch(teacherActions.deleteItem(formdata.id))
        }
        else{
            toast.error("Please Select a Record");
        }
        setFormData(INITIAL_FORM_STATE);
    }

    const onSave = (e:any) => {
        if(formdata.firstName.trim() != '' && formdata.contactNumber.trim() != '' && formdata.email.trim() != ''){
            e.preventDefault() 
              const payload: TeacherDto = {
                id: formdata.id,
                firstName: formdata.firstName,
                lastName: formdata.lastName,
                contactNumber: formdata.contactNumber,
                email: formdata.email,
              }
            dispatch(teacherActions.saveOrUpdate(payload))
        }
        else{
            toast.error("Please fill the required fields");
        }
    }

  return (
    <>
      <BreadCrumb name={"Teachers"} />

      <div className="gridDiv" >
        <div className=" divHeader  align-items-center">
            <FontAwesomeIcon icon={faCube} size="lg" className="divHeaderIcon" />
            <span className="divHeaderTitle" >Teacher Details</span>
            <FontAwesomeIcon icon={faUpDown} size="lg" className="divHeaderColapse" onClick={onClickFormColapse} />        
        </div>
        {
            showForm ?
            <>
                <Form className="FormStyle">
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label >
                                First Name
                                </Label>
                                <Input
                                id=""
                                name="firstName"
                                placeholder=""
                                type="text"
                                value = {formdata.firstName}
                                onChange={(e: any) => handleChange(e)}
                                />
                            </FormGroup>
                        </Col> 
                        <Col md={6}>
                            <FormGroup>
                                <Label >
                                Last Name
                                </Label>
                                <Input
                                id=""
                                name="lastName"
                                placeholder=""
                                type="text"
                                value = {formdata.lastName}
                                onChange={(e: any) => handleChange(e)}
                                />
                            </FormGroup>
                        </Col> 
                    </Row>

                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label >
                                Contact Number
                                </Label>
                                <Input
                                id=""
                                name="contactNumber"
                                placeholder=""
                                type="number"
                                value = {formdata.contactNumber}
                                onChange={(e: any) => handleChange(e)}
                                />
                            </FormGroup>
                        </Col> 
                        <Col md={6}>
                            <FormGroup>
                                <Label >
                                email
                                </Label>
                                <Input
                                id=""
                                name="email"
                                placeholder=""
                                type="email"
                                value = {formdata.email}
                                onChange={(e: any) => handleChange(e)}
                                />
                            </FormGroup>
                        </Col> 
                    </Row>

                    
                </Form>
                <div className="FormButtonStyle">
                    <Row>
                        <Col md={3} >
                             
                        </Col>
                        <Col md={3}>
                            <Button color="success" style={{width:'100%'}} onClick={onSave}>
                                Save
                            </Button>
                        </Col>
                        <Col md={3}>
                            <Button color="danger" style={{width:'100%'}} onClick={onDelete}>
                                Delete
                            </Button>   
                        </Col>
                        <Col md={3}>
                            <Button color="warning" style={{width:'100%'}} onClick={onReset}>
                                Reset
                            </Button>
                        </Col>
                    </Row>
                        
                
                </div>
            </>
            :<></>
        }
      </div>

      <div className="gridDiv" >
        <div className="divHeader align-items-center">
            <FontAwesomeIcon icon={faCube} size="lg" className="divHeaderIcon"/>
            <span className="divHeaderTitle" >Existing Teachers</span>
            <FontAwesomeIcon icon={faUpDown} size="lg"  className="divHeaderColapse" onClick={onClickGridColapse} />        
        </div>

        {
            showTable ?
            <Table striped>
                <thead>
                    <tr>
                    <th>
                        First Name
                    </th>
                    <th>
                        Last Name
                    </th>
                    <th>
                        Contact Number
                    </th>
                    <th>
                        Email
                    </th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        GridList.data.map((item) => {
                            return <tr key={item.id} onClick={() => setFormData(item)}> 
                                    <td >
                                        {item.firstName}
                                    </td>
                                    <td >
                                        {item.lastName}
                                    </td>
                                    <td >
                                        {item.contactNumber}
                                    </td>
                                    <td >
                                        {item.email}
                                    </td>
                                </tr>
                        })
                    }
                </tbody>
            </Table>
            : <></>
        }

      </div>

    </>
    );
}   

export default Teacher;
