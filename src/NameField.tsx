import { useFormStatus } from "react-dom"

const NameField = () => {
    const { pending, data, method, action } = useFormStatus();

    console.log(pending, data, method, action)

    return (
        <input type="text" name="name" />
    )
}

export default NameField