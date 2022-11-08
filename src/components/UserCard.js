import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { DeleteUser } from '../redux/actions/UsersActions'

const UserCard = ({kamchamosta3mlin}) => {

    const id=kamchamosta3mlin.id
    const dispatch=useDispatch()
   



    
  return (
    <div id='users'>
 <Card style={{ width: '18rem' }}>
      <Card.Header> {kamchamosta3mlin.name} </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item> {kamchamosta3mlin.email} </ListGroup.Item>
        {/* <ListGroup.Item> {kamchamosta3mlin.address.street} </ListGroup.Item>
        <ListGroup.Item> {kamchamosta3mlin.website} </ListGroup.Item> */}
        <button onClick={()=>dispatch(DeleteUser(kamchamosta3mlin.id))} >delete</button>
      </ListGroup>
    </Card>
    </div>
  )
}

export default UserCard