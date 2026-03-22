import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const {pending, data, method, action} = useFormStatus();

  return (
    <button type="submit">
      {pending ? 'Pending...' :'Submit'}
    </button>
  );
};

export default SubmitButton;