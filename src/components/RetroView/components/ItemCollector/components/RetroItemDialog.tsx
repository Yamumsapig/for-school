import { Transition } from '@headlessui/react'
import { RetroItem, Retrospective } from '@prisma/client'
import * as Dialog from '@radix-ui/react-dialog'
import { IconMinimize, IconPlus } from '@tabler/icons'
import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'

type RetroItemDialogProps = {
  itemType: string
  userId: string
  retrospective: Retrospective
  addHandler: (input: any) => void
}

export default function RetroItemDialog(props: RetroItemDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger className='justify-self-end ' asChild>
        <div className='transition ease-in-out border-2 border-black rounded-md w-fit dark:border-neutral-200 hover:scale-105 hover:cursor-pointer'>
          <IconPlus size={40} className='p-1 rounded-md justify-self-center' />
        </div>
      </Dialog.Trigger>
      <Transition.Root show={isOpen}>
        <Transition.Child
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        ></Transition.Child>
        <Transition.Child
          enter='ease-out duration-300'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        ></Transition.Child>
      </Transition.Root>
      <Dialog.Overlay className='fixed inset-0 z-20 bg-black/50' />

      <Dialog.Content className='fixed z-50 w-screen max-w-md p-5 bg-white border-2 border-black rounded-lg dark:border-neutral-200 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 md:w-full focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 dark:bg-black dark:text-neutral-200 '>
        <div className='flex flex-row items-start justify-between'>
          <Dialog.Title className='py-5 text-3xl italic font-bold '>Add item</Dialog.Title>

          <Dialog.Close asChild className='inline-flex'>
            <button aria-label='Close'>
              <IconMinimize />
            </button>
          </Dialog.Close>
        </div>
        <Dialog.Description className='pb-2'>
          {props.itemType === 'success' ? 'What went well?' : null}
          {props.itemType === 'improvement' ? 'What could we improve?' : null}
          {props.itemType === 'action' ? 'What should we start doing?' : null}
        </Dialog.Description>
        <Formik
          initialValues={{
            id: '',
            createdAt: new Date(),
            content: '',
            type: props.itemType ? props.itemType : '',
            retrospectiveId: props.retrospective.id,
            itemCollectionId: null,
            userId: props.userId,
          }}
          onSubmit={(values: RetroItem) => {
            props.addHandler(values)
            setIsOpen(false)
          }}
        >
          <Form>
            <fieldset>
              <label htmlFor='name' className='font-bold'></label>

              <Field
                id='content'
                name='content'
                component='textarea'
                rows={10}
                className='w-full h-full p-2 border-2 border-black rounded-md min-h-min dark:border-neutral-200'
              />
            </fieldset>

            <div className='flex flex-row justify-end w-full'>
              <button
                type='submit'
                aria-label='Save'
                className='p-1 m-2 mt-10 italic font-bold border-2 border-black rounded-md dark:border-neutral-200'
              >
                Save
              </button>
            </div>
          </Form>
        </Formik>
      </Dialog.Content>
    </Dialog.Root>
  )
}