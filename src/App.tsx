import { useOptimistic, useState, useTransition } from 'react'
import './App.css'

function App() {
  const [three, setThree] = useState<any[]>(Array.from({length: 100000}, () => Math.round(Math.random() * 100)))
  const [value, setValue] = useState('');
  const [isPending, startTrasition] = useTransition();
  const [breeds, setBreeds] = useState<any>([]);

  const [optimisticBreeds, setOptimisticBreeds] = useOptimistic(breeds)

  const fetchBreeds = async () => {
    const response_1 = await fetch('https://dogapi.dog/api/v2/breeds').then((response: any) => response.json())
    setBreeds(response_1.data)
  }

  const startThreeBuild = () => {
    startTrasition(() => {
      setThree((current) => current.sort())
    })
  }

  const handleChange = (event: any) => {
    setValue(event.target.value);

    startTrasition(() => {
      setThree(Array.from({length: 10000}, () => Math.round(Math.random() * 100)));
    })
  }

  const handleFetchBreeds = () => {
    setOptimisticBreeds([{type: 't-1'}, {type: 't-2'}])
    fetchBreeds()
  }

  return (
    <main>
      <h1>React v19</h1>

      <div>
        <h2>useTransition</h2>
        <input type="text" onChange={handleChange} value={value}/>
        <button onClick={startThreeBuild}>{isPending ? 'Pending...' : 'Sort me'}</button>
        <div className='list transition'>
          {three.map((el) => (
            <p>{el}</p>
          ))}
        </div>
      </div>

      <div>
        <h2>useOptimistic</h2>
        <input type="text" onChange={handleChange} value={value}/>
        <button onClick={handleFetchBreeds}>{isPending ? 'Pending...' : 'Fetch breeds'}</button>

        <div className='list transition'>
          {optimisticBreeds.map((breed: any) => (
            <p>{breed.type}</p>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
