import React from 'react'
import { Modal} from 'react-bootstrap';
import {LoginForm} from '../LoginForm';
import s from './Login.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setAuthError, setAuthLogin, setAuthReg} from '../../../redux/actions/actions';
import { loginUserThunk } from './../../../redux/store';



export const LoginPage = () => {
  const errors = useSelector(state => state.authReducer.errors);
  const login = useSelector(state => state.componentsReducer.authForm.loginForm);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(setAuthLogin(false))
  const regFunc = () => {
    dispatch(setAuthLogin(false))
    dispatch(setAuthReg(true))
    dispatch(setAuthError(false)) 
   }
  const send = (data) => {
    dispatch(loginUserThunk(data))
    dispatch(setAuthError(false))
   }
  return (
    <>
      <Modal show={login} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Вход</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <LoginForm send={send}/>
            <div className={s.reg} onClick={regFunc}>Зарегистрироваться</div>
            <div className='modal_errors'>{errors}</div>
        </Modal.Body>
      </Modal>
    </>
    );
  }
  