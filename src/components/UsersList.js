import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../redux/actions/UsersActions'
import UserCard from './UserCard'

const UsersList = () => {

    const dispatch=useDispatch()
    useEffect((e) => {
        
    dispatch(getUsers())
    },[])

    
    const mosta3mlin= useSelector(state=>state.users)
// console.log(mosta3mlin)
  return (
    <div>
      {
        mosta3mlin && mosta3mlin.map((kamchamosta3mlin)=> <UserCard kamchamosta3mlin={kamchamosta3mlin} />)
      }
    </div>
  )
}

export default UsersList