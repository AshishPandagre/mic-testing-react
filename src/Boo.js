import { useState } from "react";

function Boo() {
    const [val, setVal] = useState(0);
    const [val2, setVal2] = useState(1);

    console.log('BOO rendering..')

    function changeVal() {
        setVal(val+1);
        setVal2(val2+1);
    }

    return (
        <>
            <p>{val} || {val2}</p>
            <button onClick={changeVal}>change</button>
        </>
    )
}

export default Boo;