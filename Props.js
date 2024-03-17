
import React from "react";

const App = () => {
    let name = "Kumar";
    return (
        <div>
            <p>Props pass to other component </p>
      //--- added Component and pass the state
            <Name name={name} />
        </div>
    );
};

export default App;

//  Name Component


const Name = (props) => {
    // get the props and destructing
    let { name } = props
    return (
        <div>
            <p> User name is {name}</p>
        </div>
    );
};

