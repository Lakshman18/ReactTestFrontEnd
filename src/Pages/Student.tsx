import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpDown, faCube} from '@fortawesome/free-solid-svg-icons'
import BreadCrumb from './BreadCrumb'
import {
    Table, Form, Row, Col, Label, FormGroup, Input, Button
  } from 'reactstrap';
import './style/page.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppStatDto, StudentDto } from '../models'
import { studentActions, classRoomActions } from '../redux/actions'
import { ACTION_STATUS } from '../constants'
import { toast } from "react-toastify";

const INITIAL_FORM_STATE: StudentDto = {
    id: 0,
    firstName: '',
    lastName: '',
    contactPerson: '',
    contactNumber: '',
    email: '',
    dob: '',
    age: 0,
    classRoomId: 0

  }

function Student() {
    const dispatch = useDispatch<any>()
    const [showTable, setShowTable] = useState(true);
    const [showForm, setShowForm] = useState(true);
    const GridList = useSelector((state: AppStatDto) => state.student.gridData)
    const SaveItem = useSelector((state: AppStatDto) => state.student.saveOrUpdateItem)
    const DeleteItem = useSelector((state: AppStatDto) => state.student.deleteItem)
    const DropDownList = useSelector((state: AppStatDto) => state.classRoom.gridData)
    const [formdata, setFormData] = useState<StudentDto>(INITIAL_FORM_STATE)

    useEffect(() => {
        dispatch(classRoomActions.getAll() )
        dispatch(studentActions.getAll() )
    }, [])

    useEffect(() => {
        if (GridList.status === ACTION_STATUS.SUCCESS) {
        }
      }, [GridList.status])

    useEffect(() => {
    if (SaveItem.status === ACTION_STATUS.SUCCESS) {
        dispatch(studentActions.getAll() )
        toast.success("Success");
        onReset()
    }
    }, [SaveItem.status])

    useEffect(() => {
        if (DeleteItem.status === ACTION_STATUS.SUCCESS) {
            dispatch(studentActions.getAll() )
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
            dispatch(studentActions.deleteItem(formdata.id))
        }
        else{
            toast.error("Please Select a Record");
        }
        setFormData(INITIAL_FORM_STATE);
    }

    const onSave = (e:any) => {
        if(formdata.firstName.trim() != '' && formdata.lastName.trim() != '' && formdata.contactPerson.trim() != '' &&
             formdata.contactNumber.trim() != '' && formdata.email.trim() != ''  && formdata.dob.trim() != ''
             && formdata.classRoomId != 0){
            e.preventDefault()
            let actAge = getAge(formdata.dob.trim() )
              const payload: StudentDto = {
                id: formdata.id,
                firstName: formdata.firstName,
                lastName: formdata.lastName,
                contactPerson: formdata.contactPerson,
                contactNumber: formdata.contactNumber,
                email: formdata.email,
                dob: formdata.dob,
                age: actAge,
                classRoomId: formdata.classRoomId
              }
            dispatch(studentActions.saveOrUpdate(payload))
        }
        else{
            toast.error("Please fill the required fields");
        }
    }

    const getAge = (dob:string) => {
        // Math.floor((new Date() - new Date(dob).getTime()) / 3.15576e+10)
        var ageMS = Date.parse(Date()) - Date.parse(dob);
        var age = new Date();
        age.setTime(ageMS);
        var ageYear = age.getFullYear() - 1970;

        return ageYear;
    }

  return (
    <>
      <BreadCrumb name={"Students"} />

      <div className="gridDiv" >
        <div className=" divHeader  align-items-center">
            <FontAwesomeIcon icon={faCube} size="lg" className="divHeaderIcon" />
            <span className="divHeaderTitle" >Student Details</span>
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
                                Contact Person
                                </Label>
                                <Input
                                id=""
                                name="contactPerson"
                                placeholder=""
                                type="text"
                                value = {formdata.contactPerson}
                                onChange={(e: any) => handleChange(e)}
                                />
                            </FormGroup>
                        </Col>
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
                    </Row>

                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label >
                                Email
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
                        <Col md={6}>
                            <FormGroup>
                                <Label >
                                DOB
                                </Label>
                                <Input
                                id=""
                                name="dob"
                                placeholder=""
                                type="date"
                                value = {formdata.dob.split('T')[0]}
                                onChange={(e: any) => handleChange(e)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label >
                                Class Room
                                </Label>
                                <select name="classRoomId" className="form-select form-select- md mb-3" aria-label=".form-select-md example"
                                    onChange={(e: any) => handleChange(e)}>
                                        <option value="0" >Select class room </option>
                                        {
                                            DropDownList.data.map((item) => {
                                                return <option value={item.id} key={item.id} selected={item.id === formdata.classRoomId? true :false}>{item.name}</option>
                                            })
                                        }
                                </select>
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
            <span className="divHeaderTitle" >Existing Students</span>
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
                        Contact Person
                    </th>
                    <th>
                        Contact Number
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        DOB
                    </th>
                    <th>
                        Age
                    </th>
                    <th>
                        Class Room
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
                                        {item.contactPerson}
                                    </td>
                                    <td >
                                        {item.contactNumber}
                                    </td>
                                    <td >
                                        {item.email}
                                    </td>
                                    <td >
                                        {item.dob}
                                    </td>
                                    <td >
                                        {item.age}
                                    </td>
                                    <td >
                                        {item.classRoomId}
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

export default Student;
