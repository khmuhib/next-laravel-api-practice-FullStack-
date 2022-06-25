import {Nav} from "../../components/Nav";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

function SingleUser() {
    const [user, setUser] = useState(null)
    const {id} = useRouter().query

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>res.json())
        .then((data)=> setUser(data));
    }, [id])

    return (
        <div>
            <Nav></Nav>
            <h2>Single User</h2>
            <p>User id: <b>{user?.id}</b></p>
            <p>Name: <b>{user?.name}</b></p>
            <p>User Name: <b>{user?.username}</b></p>
        </div>
    );
}

// export async function getServerSideProps(ctx){
//     const {params} = ctx
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
//     const data =  await res.json();


//     return {
//         props:{
//             user:data
//         }
//     }
// }

export default SingleUser;