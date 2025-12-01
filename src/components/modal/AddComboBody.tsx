import React from 'react'
import { useForm } from '@tanstack/react-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from '@tanstack/react-router'
import FormButtons from '../FormButtons'

interface AddComboFormProps {
  returnData: (e: any) => void
  close: () => void
}

interface ComboFormData {
  combo?: string
  damage: number
  advantage?: string
  notes?: string
}

export default function AddComboForm({ returnData, close }: AddComboFormProps) {
  const [isEmpty, setIsEmpty] = React.useState<boolean>(true)
  const queryClient = useQueryClient()
  const router = useRouter()

  const form = useForm({
    defaultValues: {
      combo: '',
      damage: 0,
      advantage: '',
      notes: '',
    } as ComboFormData,
    onSubmit: ({ value }) => {
      console.log('submmited data')
      setIsEmpty(true)
      form.reset()
      // close()
    },
  })

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
      >
        <label>Combo</label>
        <form.Field name="combo">
          {(field) => (
            <div>
              <input
                className="mb-4 p-2 rounded w-full border border-gray-300 bg-[#161616] text-white"
                id="combo"
                required
                onBlur={field.handleBlur}
                value={field.state.value}
                placeholder="Combo"
                onChange={(e) => {
                  field.handleChange(e.target.value)
                  if (e.target.value === '') {
                    setIsEmpty(true)
                  }
                }}
              />
            </div>
          )}
        </form.Field>
        {isEmpty ? (
          ''
        ) : (
          <div>
            the rest of the form goes here{' '}
            <div className="flex gap-3 justify-end">
              <button
                id="submit"
                type="submit"
                className="cursor-pointer p-5 border rounded w-full"
              >
                Save Tech
              </button>
              <button
                id="closeAddTech"
                className="bg-red-500/70 cursor-pointer p-5 border rounded w-full"
                // onClick={() => close()}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
