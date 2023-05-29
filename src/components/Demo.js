import React, { useMemo, useState } from 'react'
import { findPrime } from '../utils/Helper';

const Demo = () => {
    const [text, setText] = useState(0);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    console.log("Rendering...");
    // suppose we have to do some heavy operation here

    //const prime = findPrime(text)
    //so we have to memoize the value returned by the below function
    const prime = useMemo(() => findPrime(text),[text]);

    return (
        // <div className={'m-4 p-2 w-96 border border-black' + (isDarkTheme && "bg-gray-900")} >
        //     <div>
        //         <input type="number" value={text} onChange={(e) => setText(e.target.value)} className='border border-black w-72 px-2' />
        //     </div>
        //     <div>
        //         <h1>nth prime: {prime}</h1>
        //     </div>
        // </div>
        <>
            {isDarkTheme ? (
                <div className='m-4 p-2 w-96 border border-black bg-gray-900'>
                    <div>
                        <input type="number" value={text} onChange={(e) => setText(e.target.value)} className='border border-black w-72 px-2' />
                        <button onClick={() => setIsDarkTheme(!isDarkTheme)} className='text-white ml-2 bg-red-600 px-2 rounded-sm'>toggle</button>
                    </div>
                    <div>
                        <h1 className='text-lg font-bold  text-white'>nth prime: {prime}</h1>
                    </div>
                </div>
            ) : (
                <div className='m-4 p-2 w-96 border border-black'>
                    <div>
                        <input type="number" value={text} onChange={(e) => setText(e.target.value)} className='border border-black w-72 px-2' />
                        <button onClick={() => setIsDarkTheme(!isDarkTheme)} className='text-white ml-2 bg-red-600 px-2 rounded-sm'>toggle</button>
                    </div>
                    <div>
                        <h1>nth prime: {prime}</h1>
                    </div>
                </div>
            )}
        </>
    )
}

export default Demo