"use client"
import { useRouter } from "next/navigation"
import { signIn, signOut, useSession } from "next-auth/react"

// export const Appbar = () => {
//     const router = useRouter();
//     return <div>
//         <button onClick={() => {
//             router.push('/api/auth/signin');
//         }}>Signin</button>
//     </div>
// }

export const Appbar = () => {

    const session = useSession();
    console.log(session);

    return <div>
        <button onClick={() => {
            signIn();
        }}>Signin</button>
        <br /><br />
        <button onClick={() => {
            signOut();
        }}>Signout</button>
        <br /><br />
        {JSON.stringify(session)}
    </div>
}