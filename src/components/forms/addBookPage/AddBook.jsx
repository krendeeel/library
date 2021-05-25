import React from 'react'
import { Modal, Button} from 'react-bootstrap';
import AddBookForm from '../AddBookForm';
import { useSelector, useDispatch } from 'react-redux';
import { setBookAdd } from '../../../redux/actions/actions';


export const AddBook = () => {
    const add = useSelector(state => state.componentsReducer.booksForm.add);
    const dispatch = useDispatch();
    const close = () => dispatch( setBookAdd(false))
    const errors = useSelector(state => state.componentsReducer.errors)
    return (
      <>
        <Modal show={add} onHide={close}>
          < Modal.Header>
                <Modal.Title>Добавление книги</Modal.Title>
            </Modal.Header>
          < Modal.Body>
                <AddBookForm/>
                <div className='modal_errors'>{errors}</div> 
            </Modal.Body>
        </Modal>
      </>
    );
  }