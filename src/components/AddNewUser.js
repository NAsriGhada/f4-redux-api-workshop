import React, { useState } from 'react'
import { Button, Form, FormControl, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import  {AddUser} from '../redux/actions/UsersActions'

const AddNewUser = () => {

    const [show, setShow] = useState(false)
    const handleShow=()=>{
        setShow(!show)
    }
    const [input, setInput] = useState("")

    const handleInput=(e)=>{
        setInput(e.target.value)
    }
    const [input2, setInput2] = useState("")
    const handleInput2=(e)=>{
      setInput2(e.target.value)
    }

    const dispatch=useDispatch()

    const add=()=>{
     
        dispatch(AddUser({id:Math.random(),name:input,email:input2}))
        handleShow()
    }

  return (
    <div>
         <>
      <Button variant="primary" onClick={handleShow}>
        add new user
      </Button>

      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <FormControl onChange={handleInput} />
        <FormControl onChange={handleInput2}/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Close
          </Button>
          <button  onClick={add}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default AddNewUser