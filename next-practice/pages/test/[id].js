import {Nav} from "../../components/Nav";

function SingleUser({user}) {
    return (
        <div>
            <Nav></Nav>
            <h2>Single User</h2>
            <p>Name: <b>{user.id}</b></p>
        </div>
    );
}

export async function getServerSideProps(ctx){
    const {params} = ctx
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data =  await res.json();


    return {
        props:{
            user:data
        }
    }
}

export default SingleUser;