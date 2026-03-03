import { useActionState, useOptimistic, useRef, useState, useTransition } from "react";
import { mockServerError, mockServerSuccess } from "./utils";
import { requestFormReset } from "react-dom";
import NameField from "./NameField";

const Action = () => {
    const formRef = useRef(null);
    const [name, setName] = useState('Denys');
    // const [optimisticName, setOptimisticName] = useOptimistic(name);

    const [isSubmited, setSubmited] = useState(false);
    const [isSubmitedOptimistic, setIsSubmitedOptimistic] = useOptimistic(isSubmited);

    const [_, startTransition] = useTransition();

    const [data, action, isPending] = useActionState(async(prevState?: any, formData?: any) => {
      setOptimisticName('Optimistic Denys');
      // setIsSubmitedOptimistic(true);
      const response: any = await mockServerSuccess('new Denys');
        // const response = await mockServerError()

      // setName(response.data)

      return response.data
    }, null, '/feed/1');

    const [optimisticName, setOptimisticName] = useOptimistic(data);

    console.log('data', data)

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

export default Action