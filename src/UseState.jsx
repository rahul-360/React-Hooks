import React, { useState } from 'react'

const UseState = () => {

    // const [value, setValue] = useState("Value")

    const [student, setStudent] = useState({
        name: "Rahul",
        Course: "Diploma",
        Branch: "CSE",
        Roll_no: "22665035",
    });

    const changeDetails = () => {
        setStudent((prev) => {              // (previousState)
            return { ...prev, name: "Rahul Sharma", Course: "Diploma in CSE" }       //(...previousState)

        })
    }

    return (
        <div>
            <h1>I'm {student.name}, {student.Course}, {student.Branch}, {student.Roll_no}</h1>
            <button onClick={changeDetails}>Change Details</button>


            {/* <h1>useState in React Js {value}</h1> */}
            {/* <p onMouseOver={() => setValue("New_Value")}>Change value</p> */}
            {/* <p onMouseOver={() => setValue("Value")}>Old Value</p> */}
        </div>
    )
}

export default UseState