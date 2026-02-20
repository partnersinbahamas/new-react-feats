import { use } from "react"

const UseSuspense = ({promise}: {promise: any}) => {

    const response = use(promise)

    return (
        <div>
            {response.data}
        </div>
    )
}

export default UseSuspense