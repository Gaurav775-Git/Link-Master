import { useForm } from 'react-hook-form';

function LinkForm({onSubmit}) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='border-2 border-white'>
        <input type="url" id="url" {...register('url',{required:true})}/>
        <br />
        <input type="text" id="context" {...register('context' ,{required:true})}/>
        <br />
        <input type="submit" value="value"/>
      </form>
    </div>
  );
}

export default LinkForm;