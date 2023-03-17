import { IconFaceIdError } from '@tabler/icons'
import { NextPage } from 'next'
import Head from 'next/head'
import { useSession } from 'next-auth/react'

import MenuBar from '@/components/MenuBar/MenuBar'
import ProfileSection from '@/components/ProfileSection/ProfileSection'
import SignUpForm from '@/components/SignUp/SignUpForm'

const Settings: NextPage = () => {
  const { data: session, status } = useSession()

  const isSignedUp = status === 'authenticated' && session?.user?.name !== null

  return (
    <div className='flex flex-col items-center'>
      <Head>
        <title>Settings</title>
        <meta name='description' content='Agile Retrospectives' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <MenuBar />

      {isSignedUp && session?.user ? <ProfileSection /> : <SignUpForm />}

      {!isSignedUp && !session?.user ? (
        <div className='flex flex-col items-center'>
          <IconFaceIdError size={122} className='m-5' />
          <p className='text-xl'>Not authenticated, please log in first</p>
        </div>
      ) : null}
    </div>
  )
}

export default Settings
