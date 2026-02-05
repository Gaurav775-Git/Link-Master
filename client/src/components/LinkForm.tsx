import { useForm } from 'react-hook-form';

type LinkFormData = {
  title: string
  url: string
  context: string
}

type LinkFormProps = {
  onSubmit: (data: LinkFormData) => void
}

function LinkForm ({ onSubmit }: LinkFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<LinkFormData>();

  return (
    <div className="w-full bg-white border-4 border-white p-6 sm:p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-black uppercase text-black mb-6">
          Add New Link
        </h2>
        
        <div>
          <label htmlFor="url" className="block text-sm font-bold uppercase tracking-wide text-black mb-2">
            URL
          </label>
          <input 
            type="url" 
            id="url" 
            placeholder="https://example.com"
            className="w-full px-4 py-3 border-4 border-black bg-white text-black placeholder-gray-400 focus:outline-none focus:border-gray-600 text-base"
            {...register('url',{required:'URL is required'})}
          />
          {errors.url && <p className="text-sm mt-2 font-bold text-black">⚠ {String(errors.url.message)}</p>}
        </div>
        
        <div>
          <label htmlFor="context" className="block text-sm font-bold uppercase tracking-wide text-black mb-2">
            Context
          </label>
          <textarea 
            id="context" 
            rows={4}
            placeholder="What is this link about?"
            className="w-full px-4 py-3 border-4 border-black bg-white text-black placeholder-gray-400 focus:outline-none focus:border-gray-600 resize-none text-base"
            {...register('context',{required:'Context is required'})}
          />
          {errors.context && <p className="text-sm mt-2 font-bold text-black">⚠ {String(errors.context.message)}</p>}

        </div>
        
        <button
          type="submit"
          className="w-full py-4 bg-black text-white border-4 border-black font-bold uppercase tracking-wider hover:bg-gray-800 transition-all text-base sm:text-lg"
        >
          Save Link
        </button>
      </form>
    </div>
  )
}

export default LinkForm