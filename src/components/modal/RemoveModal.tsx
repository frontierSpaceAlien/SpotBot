import CloseIcon from '@mui/icons-material/Close'

interface RemoveModalProps {
  isOpen: boolean
  onClose: () => void
  boxTitle?: string
  triggerDelete: () => void
}

export function RemoveModal({
  isOpen,
  onClose,
  boxTitle,
  triggerDelete,
}: RemoveModalProps) {
  return (
    <div
      className={
        'fixed inset-0 flex flex-col justify-center items-center transition-colors bg-black/70 ' +
        `${isOpen ? 'block' : 'hidden'}`
      }
      onClick={onClose}
    >
      <div
        className={
          'bg-[#161616] border border-gray-400 rounded rounded-b-none p-6 max-w-7xl w-96 ' +
          `${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`
        }
      >
        <div
          className="flex flex-row justify-between"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="text-2xl uppercase font-semibold">
            remove from {boxTitle} ?
          </h1>
          <button
            className="cursor-pointer hover:scale-110 transition-transform"
            onClick={onClose}
          >
            <CloseIcon className="text-white" />
          </button>
        </div>
      </div>
      <div
        className="bg-[#161616] border border-gray-400 rounded p-6 max-w-7xl w-96  border-t-0 rounded-t-none"
        onClick={(e) => e.stopPropagation()}
      >
        <p>Are you sure you want to remove this?</p>
        <div className="flex justify-end gap-5 pt-2">
          <button
            type="button"
            className="bg-red-500/70 cursor-pointer p-5 border rounded w-full"
            onClick={onClose}
          >
            No
          </button>
          <button
            type="button"
            className="cursor-pointer p-5 border rounded w-full"
            onClick={() => {
              triggerDelete()
              onClose()
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  )
}
