import React from "react";
import ReactDOM  from "react-dom/client";

//React Element
const heading = (<h1 id="heading" className="head">Namste React using JSX</h1>);

//React Functional Component
const Title= () =>{
    return (<h1>Namaste Functional Component</h1>);
}

//Composition Component
const HeadingComponent = () =>{
    return(<>
        {Title()}
        <Title />
        <Title></Title>
        <h2>Namste Composition Component</h2>
    </>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent></HeadingComponent>);  