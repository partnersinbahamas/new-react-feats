import { useDeferredValue, useState } from "react";

const Deffered = () => {
    const list = Array.from({length: 100000}, (_, i) => `item-${i}`);
    const [value, setValue] = useState('');
    const defferedValue = useDeferredValue(value, 'ini');

    console.log('value', value)
    console.log('defferedValue', defferedValue)

    const handleChange = async (e: any) => {
        // await mockServerSuccess('res')
        setValue(e.target.value)
    }
    return (
        <div>
            <input type="text" value={value} onChange={handleChange}/>

            <ul>
                {list.filter((item) => item.includes(defferedValue)).map((el) => (
                    <li>
                        {el}
                    </li>
                ))}
            </ul>
        </div>
    )
};


export default Deffered;