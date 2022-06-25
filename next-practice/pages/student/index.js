import {Nav} from "../../components/Nav";
import Link from "next/dist/client/link";
import {useEffect, useState} from "react";

function User () {
    const [users, setUsers] = useState(null)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=> setUsers(data));
    }, [])


    return (
        <div>
            <Nav/>
            <h2>All User</h2>
            {
                users?.map((user)=>{
                    return (
                        <div  key={user.id}>
                            <Link href={`student/${user.id}`} passHref>
                            <h3><span>{user.id}: </span>{user.name}</h3>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}


// export async function getServerSideProps(context) {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data =  await res.json();


//     return {
//       props: {
//         users: data,
//       },
//     }
//   }

export default User;

