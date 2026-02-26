import { useActionState, useOptimistic, useRef, useState, useTransition } from "react";
import { mockServerSuccess } from "./utils";
import { requestFormReset } from "react-dom";
import NameField from "./NameField";

const Form = () => {
    const formRef = useRef(null);
    const [name, setName] = useState('Denys');
    const [optimisticName, setOptimisticName] = useOptimistic(name);

    const [isSubmited, setSubmited] = useState(false);
    const [isSubmitedOptimistic, setIsSubmitedOptimistic] = useOptimistic(isSubmited);

    const [_, startTransition] = useTransition();

    const [data, action, isPending] = useActionState(async(prevState?: any, formData?: any) => {
        try {
          setOptimisticName('Optimistic Denys');
          setIsSubmitedOptimistic(true);
          const response: any = await mockServerSuccess('new Denys');
            // const response = await mockServerError()

          setName(response.data)

          return { data: response.data, error: null }
        } catch (error: any) {
          setIsSubmitedOptimistic(false)
          return { data: null, error: error.message }
        }
    }, null, '/feed/1');

    const handleReset = () => {
        startTransition(() => {
            if (formRef.current) {
                requestFormReset(formRef.current);
            }
        })
    }

    const handleClick = () => {
        startTransition(() => {
            action()
        })
    }

    let divInstance = null;

    console.log('div instance', divInstance)

  return (
    <div ref={(current) => {
        console.log('div!!', current)
    }}>
      <h1>Form</h1>
      <p>Your current name: {optimisticName}</p>
      <form action={action} ref={formRef}>
        <button type="button" onClick={handleClick}>Click</button>
        <NameField />
        <button type="button" onClick={handleReset}>Reset</button>
        <button type="submit">{isPending ? "Pending..." : "Submit"}</button>
        {isSubmitedOptimistic && (
            <p>Sended</p>
        )}
        {data && data.error as any && (
          <p>{data.error as any}</p>
        )}
      </form>
    </div>
  );
};

export default Form