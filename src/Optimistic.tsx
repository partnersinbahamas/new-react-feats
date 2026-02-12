import { useOptimistic, useState, useTransition } from "react";

const Optimistic = () => {
  const [breeds, setBreeds] = useState<any>([]);
  const [optimisticBreeds, setOptimisticBreeds] = useOptimistic(breeds);
  const [isPending, startTrasition] = useTransition();

  const fetchBreeds = async () => {
    const response_1 = await fetch('https://dogapi.dog/api/v2/breeds').then((response: any) => response.json())
    setBreeds(response_1.data)
  }

  const handleFetchBreeds = () => {
    startTrasition(() => {
        setOptimisticBreeds([{type: 't-1'}, {type: 't-2'}])
        fetchBreeds()
    });
  }

    return (
        <div>
        <h2>useOptimistic</h2>
        <button onClick={handleFetchBreeds}>{isPending ? 'Pending...' : 'Fetch breeds'}</button>

        <div className='list transition'>
          {optimisticBreeds.map((breed: any) => (
            <p>{breed.type}</p>
          ))}
        </div>
      </div>
    )
}

export default Optimistic