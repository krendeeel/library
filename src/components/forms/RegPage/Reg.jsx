import React from 'react'
import { Modal, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserThunk } from '../../../redux/store';
import { setAuthReg } from './../../../redux/actions/actions';
import {BookingForm} from './../BookingForm';


export const RegPage = () => {
    const errors = useSelector(state => state.authReducer.errors);
    const reg = useSelector(state => state.componentsReducer.authForm.regForm);
    const dispatch = useDispatch();
    const handleClose = () => dispatch(setAuthReg(false))
    const send = (data) => {
      dispatch(registerUserThunk(data))
    }
  
    return (
      <>
        <Modal show={reg} onHide={handleClose}>
          < Modal.Header>
                <Modal.Title>Регистрация</Modal.Title>
            </Modal.Header>
          < Modal.Body>
                <BookingForm send={send}/>
                <div className='modal_errors'>{errors}</div>
            </Modal.Body>
        </Modal>
      </>
    );
  }
  