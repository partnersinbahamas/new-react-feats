import { startTransition, useActionState, useRef, useState } from "react";
import { mockServerError, mockServerSuccess } from "./utils";
import { requestFormReset, useFormStatus } from "react-dom";
import SubmitButton from "./SubmitButton";

const Form = () => {
  const formRef = useRef(null);
  const [state, dispatchAction, isPending] = useActionState(async(prevState, formData) => {
    try {
      const name = formData.get('name');

      const response = await mockServerSuccess(name);
    //   const response = await mockServerError('Something went wrong')
      return { ...response };
    } catch (error) {
      return { error: error.message }
    }
  }, {});

  const {pending, data, method, action} = useFormStatus();



  return (
    <form action={dispatchAction}>
      <input
        type="text"
        placeholder="Enter your name"
        name="name"
      />

      <SubmitButton />

      {/* <button type="button" onClick={handleClick}>
        {isPending ? 'Pending...' :'Submit'}
      </button> */}

      {state.data && (
        <p>Changed name to: {state.data}</p>
      )}
      
      {state.error && (
        <p>{state.error.message}</p>
      )}
    </form>
  );
};

export default Form;