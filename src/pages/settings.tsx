import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

import MenuBar from '@/components/MenuBar/MenuBar'
import dynamic from 'next/dynamic'
// import SettingsSection from '@/components/SettingsSection/SettingsSection'

const Settings: NextPage = () => {
  const SettingsSection = dynamic(() => import('@/components/SettingsSection/SettingsSection'), {
    ssr: false,
  })
  return (
    <div className='flex flex-col items-center'>
      <Head>
        <title>Settings</title>
        <meta name='description' content='Agile Retrospectives' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <MenuBar />

      <SettingsSection />
    </div>
  )
}

export default Settings