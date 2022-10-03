import React from "react";

function Child(props) {

    console.log('rendering CHILD');

    return (
        <>
            <div>{props.data}</div>
            <button onClick={props.click}>increment</button>
        </>
    )
}

export default React.memo(Child);