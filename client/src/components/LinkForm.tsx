import { useForm } from 'react-hook-form';

function LinkForm({onSubmit}) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md p-8 bg-white border-4 border-black">
        <h2 className="text-2xl font-bold mb-6 uppercase">Add Link</h2>
        
        <input 
          type="url" 
          id="url" 
          placeholder="Enter URL"
          className="w-full px-4 py-3 mb-4 border-2 border-black focus:outline-none focus:border-4"
          {...register('url',{required:true})}
        />
        {errors.url && <p className="text-sm mb-4">URL is required</p>}
        
        <input 
          type="text" 
          id="context" 
          placeholder="Enter context"
          className="w-full px-4 py-3 mb-6 border-2 border-black focus:outline-none focus:border-4"
          {...register('context',{required:true})}
        />
        {errors.context && <p className="text-sm mb-4">Context is required</p>}
        
        <input 
          type="submit" 
          value="Submit"
          className="w-full py-3 bg-black text-white font-bold uppercase cursor-pointer hover:bg-gray-800"
        />
      </form>
    </div>
  );
}

export default LinkForm;