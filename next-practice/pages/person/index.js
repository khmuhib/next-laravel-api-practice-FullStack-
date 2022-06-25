import {Nav} from "../../components/Nav";
import Link from "next/dist/client/link";

function User ({users}) {
    return (
        <div>
            <Nav/>
            <h2>All User</h2>
            {
                users.map(user =>{
                    return (
                        <div  key={user.id}>
                            <Link href={`person/${user.id}`} passHref>
                            <h3><span>{user.id}: </span>{user.name}</h3>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}


export async function getServerSideProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data =  await res.json();


    return {
      props: {
        users: data,
      },
    }
  }

export default User;

