import React from 'react'
import { Modal} from 'react-bootstrap';
import RemoveBookForm from '../RemoveBookForm';
import { useSelector, useDispatch } from 'react-redux';
import { setBookRemove } from './../../../redux/actions/actions';
import { removeBookThunk } from '../../../redux/store';




export const RemoveBook = () => {
    const remove = useSelector(state => state.componentsReducer.booksForm.remove);
    const dispatch = useDispatch();
    const close = () => dispatch( setBookRemove(false))
    const send = data => {
      dispatch(removeBookThunk(data))
    }
    const errors = useSelector(state => state.componentsReducer.errors)
    return (
      <>
        <Modal show={remove} onHide={close}>
          < Modal.Header>
                <Modal.Title>Удаление книги</Modal.Title>
            </Modal.Header>
          < Modal.Body>
                <RemoveBookForm send={send}/>
                <div className='modal_errors'>{errors}</div> 
            </Modal.Body>
        </Modal>
      </>
    );
  }