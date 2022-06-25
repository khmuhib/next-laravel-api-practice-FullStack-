import {Nav} from "../../components/Nav";
import Link from "next/dist/client/link";

function User ({users}) {
    return (
        <div>
            <Nav/>
            <h2>All User</h2>
            {
                users.posts.map(user =>{
                    return (
                        <div  key={user.id}>
                            <Link href={`person/${user.id}`} passHref>
                            <h3><span>{user.id}: </span>{user.title}</h3>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}


export async function getServerSideProps(context) {
    const res = await fetch('http://127.0.0.1:8000/api/posts')
    const data =  await res.json();


    return {
      props: {
        users: data,
      },
    }
  }

export default User;

