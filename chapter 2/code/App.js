<<<<<<< HEAD

// create nested elements

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div",
    {id:"child"},[
    React.createElement("h1",
    {},
    "hello inside child"),
    React.createElement("h2",
    {},
    "2nd sibling child")]
     )
)
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)
=======

// create nested elements

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div",
    {id:"child"},[
    React.createElement("h1",
    {},
    "hello inside child"),
    React.createElement("h2",
    {},
    "2nd sibling child")]
     )
)
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)
>>>>>>> 2a154504faf6c65ad14f9e8569c60b8803533953
