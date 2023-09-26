// for importing Hooks 
import { useState } from "react";
export const Chai = () => {
    // hooks are used to update data in the UI of web page 

    let [counter, setCounter] = useState(10); // here counter is the variable and setCounter is the function to update the value of counter

    // let counter = 10; 

    // function to add values
    const addValue = () => {
        console.log("value Added :", counter);
        counter = counter + 1;
        setCounter(counter); // setCounter is used to update the value of counter
    }


    const subValue = () => {
        if (counter > 0) {
            console.log("value reduced :", counter);
            counter = counter - 1;
            setCounter(counter);
        }
    }

    return (
        <>
            <h2>Hooks are used to update data in the UI of web page</h2>
            <h3>Counter : {counter}</h3>
            <h3>Updated Value is : {counter}</h3>
            <button onClick={addValue}>Add</button>
            <button onClick={subValue}>Reduce </button>
        </>
    )
}

export default Chai
