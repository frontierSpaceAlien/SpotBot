import { useForm } from '@tanstack/react-form'
import { v4 as uuidv4 } from 'uuid'

interface AddComboFormProps {
  returnData: (e: any) => void
  close: () => void
}

interface ComboFormData {
  id: string
  screenPosition: string
  ender: string
  frameKill: string
  meaty: string
  frameOnHit: string
  frameOnBlock: string
  notes: string
}

export default function AddOkiForm({ returnData, close }: AddComboFormProps) {
  const form = useForm({
    defaultValues: {
      id: '',
      screenPosition: '',
      ender: '',
      frameKill: '',
      meaty: '',
      frameOnHit: '',
      frameOnBlock: '',
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
        <label>Screen Pos.</label>
        <form.Field name="screenPosition">
          {(field) => (
            <div>
              <input
                className="mb-4 p-2 rounded w-full border border-gray-300 bg-[#161616] text-white"
                id="screenPos"
                type="text"
                required
                onBlur={field.handleBlur}
                value={field.state.value}
                placeholder="Screen Pos."
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        </form.Field>
        <label>Ender</label>
        <form.Field name="ender">
          {(field) => (
            <input
              className="mb-4 p-2 rounded w-full border border-gray-300 bg-[#161616] text-white"
              type="text"
              id="ender"
              name={field.name}
              placeholder="Ender"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          )}
        </form.Field>
        <label>Frame Kill</label>
        <form.Field name="frameKill">
          {(field) => (
            <input
              className="resize-none field-sizing-content w-83 mb-4 p-2 rounded border border-gray-300 bg-[#161616] text-white"
              type="text"
              id="frameKill"
              name={field.name}
              placeholder="Frame Kill"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          )}
        </form.Field>
        <label>Meaty</label>
        <form.Field name="meaty">
          {(field) => (
            <input
              className="resize-none field-sizing-content w-83 max-h-60 mb-4 p-2 rounded border border-gray-300 bg-[#161616] text-white"
              type="text"
              id="meaty"
              name={field.name}
              placeholder="Meaty"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          )}
        </form.Field>
        <label>Frame On Hit</label>
        <form.Field name="frameOnHit">
          {(field) => (
            <input
              className="resize-none field-sizing-content w-83 max-h-60 mb-4 p-2 rounded border border-gray-300 bg-[#161616] text-white"
              type="text"
              id="frameOnHit"
              name={field.name}
              placeholder="Frame On Hit"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          )}
        </form.Field>
        <label>Frame On Block</label>
        <form.Field name="frameOnBlock">
          {(field) => (
            <input
              className="resize-none field-sizing-content w-83 max-h-60 mb-4 p-2 rounded border border-gray-300 bg-[#161616] text-white"
              type="text"
              id="frameOnBlock"
              name={field.name}
              placeholder="Frame On Block"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          )}
        </form.Field>
        <label>Notes</label>
        <form.Field name="notes">
          {(field) => (
            <textarea
              className="resize-none field-sizing-content w-83 max-h-20 mb-4 p-2 rounded border border-gray-300 bg-[#161616] text-white scrollbar"
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
                {isSubmitting ? '...' : 'Save Oki/Setplay'}
              </button>
            )}
          />
        </div>
      </form>
    </div>
  )
}
