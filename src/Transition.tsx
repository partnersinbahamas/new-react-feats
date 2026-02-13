import { useState, useTransition } from "react";

const Transition = () => {
  const [three, setThree] = useState<any[]>([])
  const [value, setValue] = useState('');
  const [isPending, startTrasition] = useTransition();


  const handleChange = (event: any) => {
    const value = event.target.value;
    setValue(value);

    const numValue = Number(value)

    if (Number.isNaN(numValue)) return;

    startTrasition(() => {
      setThree(Array.from({length: numValue}, () => Math.round(Math.random() * 100)));
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
        <div className="square"/>
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