import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    //1. useEffect(<callback_function> )
    //2. useEffect(<callback_function>, [] )
    //3. useEffect(<callback_function>, [<dependency>] )

    const [count, setCount] = useState(0)


    //1. Run on every Render
    // Jab bhi count ki value update hoga tab useEffect function call hoga or setTimeout function re-render hoga

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount(count => count + 1)
    //     }, 1000)
    // })



    //2. run only on the first render
    // Empty array use karne pr only only one time function call hoga jab function render hoga

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount(count => count + 1)
    //     }, 1000)
    // }, [])



    // 3. Run at frist render
    // and any time whene any dependency value changres

    useEffect(() => {
        setTimeout(() => {
            setCount(count => count + 1)
        }, 2000)
    }, [count])     //also use maltiple dependency, when that deps are chenge then it re-render


    return (
        <div>
            <h1>useEffect in React Hooks</h1>
            <h1>I've rendered {count} times !</h1>
        </div>
    )
}

export default UseEffect