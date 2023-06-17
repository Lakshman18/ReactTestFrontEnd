import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faArrowRight } from '@fortawesome/free-solid-svg-icons'

function BreadCrumb(props:any) { 
  return (
    <>
      <div style={{height:'50px', background:'#68bc44'}}>
        <FontAwesomeIcon icon={faHouse} size="lg" style={{color: "#f7f7f7", marginTop:"15px", marginLeft:"25px",   position:'absolute'}}/>
        <FontAwesomeIcon icon={faArrowRight} size="lg" style={{color: "#f7f7f7", marginTop:"15px", marginLeft:"65px",   position:'absolute'}} />
        <span style={{color: "#f7f7f7", marginTop:"12px", marginLeft:"100px",   position:'absolute'}} >{props.name}</span>
      </div>
    </>
    );
}

export default BreadCrumb;
