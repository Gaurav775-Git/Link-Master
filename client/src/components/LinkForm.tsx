import { useForm } from 'react-hook-form'
import { useState } from 'react'
import PropagateLoader from "react-spinners/PropagateLoader"

function LinkForm({ onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [loader, setLoader] = useState(false)

  // wrapper function to handle loader
  const handleFormSubmit = async (data) => {
    setLoader(true)
    try {
      await onSubmit(data)   // assuming onSubmit is async
    } finally {
      setLoader(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="w-full max-w-md p-8 border-4 border-white rounded-2xl"
      >
        <h2 className="text-2xl font-bold mb-6 uppercase text-white flex justify-center">
          Add Link
        </h2>

        <input
          type="url"
          placeholder="Enter URL"
          className="w-full px-4 py-3 mb-2 text-white border-2 border-white focus:outline-none focus:border-4 rounded-2xl"
          {...register('url', { required: true })}
        />
        {errors.url && <p className="text-sm mb-4 text-red-500">URL is required</p>}

        <input
          type="text"
          placeholder="Enter context"
          className="w-full px-4 py-3 mb-2 text-white border-2 border-white focus:outline-none focus:border-4 rounded-2xl"
          {...register('context', { required: true })}
        />
        {errors.context && <p className="text-sm mb-4 text-red-500">Context is required</p>}

        <button
          type="submit"
          disabled={loader}
          className="w-full py-3 border-2 bg-gray-700 text-white font-bold uppercase cursor-pointer hover:bg-gray-800 rounded-2xl flex justify-center"
        >
          {loader ? <PropagateLoader size={10} color="#ffffff" /> : "Submit"}
        </button>
      </form>
    </div>
  )
}

export default LinkForm
