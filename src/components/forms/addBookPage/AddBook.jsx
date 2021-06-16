import React from 'react'
import { Modal} from 'react-bootstrap';
import AddBookForm from '../AddBookForm';
import { useSelector, useDispatch } from 'react-redux';
import { setBookAdd } from '../../../redux/actions/actions';
import { addBookThunk } from './../../../redux/store';


export const AddBook = () => {
    const add = useSelector(state => state.componentsReducer.booksForm.add);
    const dispatch = useDispatch();
    const close = () => dispatch( setBookAdd(false))
    const send = (data) => {
      dispatch(addBookThunk(data))
    }
    const errors = useSelector(state => state.componentsReducer.errors)
    return (
      <>
        <Modal show={add} onHide={close}>
          < Modal.Header>
                <Modal.Title>Добавление книги</Modal.Title>
            </Modal.Header>
          < Modal.Body>
                <AddBookForm send={send}/>
                <div className='modal_errors'>{errors}</div> 
            </Modal.Body>
        </Modal>
      </>
    );
  }