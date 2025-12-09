import { useForm } from '@tanstack/react-form'
import { v4 as uuidv4 } from 'uuid'

interface AddComboFormProps {
  returnData: (e: any) => void
  close: () => void
}

interface ComboFormData {
  id: string
  combo?: string
  damage: number
  advantage: number
  notes?: string
}

export default function AddComboForm({ returnData, close }: AddComboFormProps) {
  const form = useForm({
    defaultValues: {
      id: '',
      combo: '',
      damage: 0,
      advantage: 0,
      notes: '',
    } as ComboFormData,
    onSubmit: ({ value }) => {
      let myuuid = uuidv4()
      value.id += myuuid
      returnData(value)
      form.reset()
      close()
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
                type="text"
                required
                onBlur={field.handleBlur}
                value={field.state.value}
                placeholder="Combo"
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        </form.Field>
        <label>Damage</label>
        <form.Field name="damage">
          {(field) => (
            <input
              className="mb-4 p-2 rounded w-full border border-gray-300 bg-[#161616] text-white"
              type="number"
              id="damage"
              name={field.name}
              required
              placeholder="Damage"
              value={field.state.value}
              onChange={(e) => field.handleChange(parseInt(e.target.value))}
            />
          )}
        </form.Field>
        <label>Advantage</label>
        <form.Field name="advantage">
          {(field) => (
            <input
              className="resize-none field-sizing-content w-83 mb-4 p-2 rounded border border-gray-300 bg-[#161616] text-white"
              type="text"
              id="advantage"
              name={field.name}
              required
              placeholder="Advantage"
              value={field.state.value}
              onChange={(e) => field.handleChange(parseInt(e.target.value))}
            />
          )}
        </form.Field>
        <label>Notes</label>
        <form.Field name="notes">
          {(field) => (
            <textarea
              className="resize-none field-sizing-content w-83 max-h-60 mb-4 p-2 rounded border border-gray-300 bg-[#161616] text-white scrollbar"
              id="notes"
              name={field.name}
              placeholder="Notes"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          )}
        </form.Field>
        <div className="flex gap-3 pt-5 justify-end">
          <button
            id="closeAddTech"
            type="button"
            className="bg-red-500/70 cursor-pointer p-5 border rounded w-full"
            onClick={() => {
              close()
              form.reset()
            }}
          >
            Cancel
          </button>
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <button
                id="submit"
                type="submit"
                disabled={!canSubmit}
                className="cursor-pointer p-5 border rounded w-full"
              >
                {isSubmitting ? '...' : 'Save Combo'}
              </button>
            )}
          />
        </div>
      </form>
    </div>
  )
}
