import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpDown, faCube} from '@fortawesome/free-solid-svg-icons'
import BreadCrumb from './BreadCrumb'
import {
    Table, Form, Row, Col, Label, FormGroup, Input, Button
  } from 'reactstrap';
import './style/page.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppStatDto, ClassRoomDto } from '../models'
import { classRoomActions } from '../redux/actions'
import { ACTION_STATUS } from '../constants'
import { toast } from "react-toastify";

const INITIAL_FORM_STATE: ClassRoomDto = {
    id: 0,
    name: '',
  }

function ClassRoom() {
    const dispatch = useDispatch<any>() 
    const [showTable, setShowTable] = useState(true);
    const [showForm, setShowForm] = useState(true);
    const GridList = useSelector((state: AppStatDto) => state.classRoom.gridData)
    const SaveItem = useSelector((state: AppStatDto) => state.classRoom.saveOrUpdateItem)
    const DeleteItem = useSelector((state: AppStatDto) => state.classRoom.deleteItem)
    const [formdata, setFormData] = useState<ClassRoomDto>(INITIAL_FORM_STATE)

    useEffect(() => {
        dispatch(classRoomActions.getAll() )
    }, [])

    useEffect(() => {
        if (GridList.status === ACTION_STATUS.SUCCESS) {
        }
      }, [GridList.status])
    
    useEffect(() => {
    if (SaveItem.status === ACTION_STATUS.SUCCESS) {
        dispatch(classRoomActions.getAll() )
        toast.success("Success");
        onReset()
    }
    }, [SaveItem.status])

    useEffect(() => {
        if (DeleteItem.status === ACTION_STATUS.SUCCESS) {
            dispatch(classRoomActions.getAll() )
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
            dispatch(classRoomActions.deleteItem(formdata.id))
        }
        else{
            toast.error("Please Select a Record");
        }
        setFormData(INITIAL_FORM_STATE);
    }

    const onSave = (e:any) => {
        if(formdata.name.trim() != ''){
            e.preventDefault() 
              const payload: ClassRoomDto = {
                id: formdata.id,
                name: formdata.name
              }
            dispatch(classRoomActions.saveOrUpdate(payload))
        }
        else{
            toast.error("Please fill the required fields");
        }
    }

  return (
    <>
      <BreadCrumb name={"Class Rooms"} />

      <div className="gridDiv" >
        <div className=" divHeader  align-items-center">
            <FontAwesomeIcon icon={faCube} size="lg" className="divHeaderIcon" />
            <span className="divHeaderTitle" >Class Room Details</span>
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
                            Class Name
                            </Label>
                            <Input
                            id=""
                            name="name"
                            placeholder=""
                            type="text"
                            value = {formdata.name}
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
            <span className="divHeaderTitle" >Existing Class Rooms</span>
            <FontAwesomeIcon icon={faUpDown} size="lg"  className="divHeaderColapse" onClick={onClickGridColapse} />        
        </div>

        {
            showTable ?
            <Table striped>
                <thead>
                    <tr>
                    <th>
                        Class Room Name
                    </th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        GridList.data.map((item) => {
                            return <tr key={item.id} onClick={() => setFormData(item)}> 
                                    <td >
                                                    
                                        {item.name}
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

export default ClassRoom;
