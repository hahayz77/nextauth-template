import Image from 'next/image'
import { Inter } from 'next/font/google'
import { signIn, signOut, useSession } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const { data: session } = useSession()

    // console.log(session);

    return (
        <main>
            <h1>Simple NextAuth test</h1>
            <div className='text-white text-xl'>
                {session ?
                    <>
                        <Image className='rounded-full block mx-auto my-3' src={session.user?.image} width={160} height={160} alt='avatar' />
                        <h3 className='font-bold'>Signed in as {session.user?.name}</h3>
                        <button className='block mx-auto' onClick={() => signOut()}>LogOut</button>
                    </> :
                    <>
                        <button onClick={() => signIn("github")}> Sign In with GitHub </button>
                        <button onClick={() => signIn("google")}> Sign In with Google </button>
                    </>
                }
            </div>

        </main>
    )
}
