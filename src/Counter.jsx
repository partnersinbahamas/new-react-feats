import { startTransition, useActionState, useOptimistic, useRef, useState, useTransition } from "react";
import { mockServerError, mockServerSuccess } from "./utils";
import { requestFormReset } from "react-dom";
import NameField from "./NameField";

const Counter = () => {
  const abortControllerRef = useRef(null)

  const [count, action] = useActionState(async(prevState) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();

    const response = await mockServerSuccess(prevState + 1, abortControllerRef.current.signal); 

    return response.data;
  }, 0);

  const handleIncrement = () => {
    console.log('Click');

    startTransition(() => {
      action();
    });
  };

  return (
    <button onClick={handleIncrement}>
      Count: {count}
    </button>
  )
}

export default Counter;