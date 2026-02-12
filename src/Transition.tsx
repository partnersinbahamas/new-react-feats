import { useState, useTransition } from "react";

const Transition = () => {
  const [three, setThree] = useState<any[]>(Array.from({length: 100000}, () => Math.round(Math.random() * 100)))
  const [value, setValue] = useState('');
  const [isPending, startTrasition] = useTransition();


  const handleChange = (event: any) => {
    setValue(event.target.value);

    startTrasition(() => {
      setThree(Array.from({length: 10000}, () => Math.round(Math.random() * 100)));
    })
  }

  const startThreeBuild = () => {
    startTrasition(() => {
      setThree((current) => current.sort())
    })
  }

    return (
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
    )
};

export default Transition