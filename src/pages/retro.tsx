import { IconFaceIdError } from '@tabler/icons-react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useSession } from 'next-auth/react'

import { MenuBar } from '@/components/menu-bar/menu-bar'
import { RetroView } from '@/components/retro-view/retro-view'
import { SignUpForm } from '@/components/sign-up/sign-up-form'

const Retro: NextPage = () => {
  const { data: session, status } = useSession()

  const isSignedUp = status === 'authenticated' && session?.user?.name !== null

  return (
    <div className='flex flex-col items-center'>
      <Head>
        <link rel='icon' href='/favicon.ico' />

        <title>Retroloop - Retrospective</title>

        <meta name='title' content='Retroloop - Agile retrospectives made easy' />
        <meta
          name='description'
          content='Retroloop is a simple, open-source tool for creating a feedback loop that drives continuous team improvement'
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://retroloop.io/' />
        <meta property='og:title' content='Retroloop - Agile retrospectives made easy' />
        <meta
          property='og:description'
          content='Retroloop is a simple, open-source tool for creating a feedback loop that drives continuous team improvement'
        />
        <meta property='og:image' content='https://retroloop.io/preview.webp' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:title' content='Retroloop - Agile retrospectives made easy' />
        <meta
          property='twitter:description'
          content='Retroloop is a simple, open-source tool for creating a feedback loop that drives continuous team improvement'
        />
        <meta property='twitter:image' content='https://retroloop.io/preview.webp' />
      </Head>

      <MenuBar />

      {isSignedUp && session?.user ? <RetroView /> : <SignUpForm />}

      {!isSignedUp && !session?.user ? (
        <div className='flex flex-col items-center'>
          <IconFaceIdError size={122} className='m-5' />
          <p className='text-xl'>Not authenticated, please log in first</p>
        </div>
      ) : null}
    </div>
  )
}
export default Retro
