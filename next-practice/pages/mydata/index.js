import {useState} from 'react'
import {Nav} from '../../components/Nav';

function Users() {

    const [users, setUsers] = useState([]);

    const loadAll = ()  => {
        fetch("/api/users")
        .then((res)=>res.json())
        .then((data)=>setUsers(data))
    }
  return (
    <div>
        <Nav></Nav>
        <h1>All Users</h1>
        <button onClick={loadAll}>Load Data</button>
        {
            users.map((user)=>{
                return (
                    <>
                        <h3>{user.name}</h3>
                    </>
                )
            })
        }
    </div>
  )
}

export default Users;