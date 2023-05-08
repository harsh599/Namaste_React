// const heading = React.createElement("h1", {
//     id:"heading", xyz:"abc"//adding attributes
// },"Hello World!");
// console.log(heading);//A JS object and not html elements

{/* <div id = "parent">
        <div id = "child">
            <h1></h1>
        </div>
    </div> */
}

const createComplexDiv = React.createElement("div", {
    id:"parent"},
    React.createElement("div",{id: "child"},
    [
        React.createElement("h1",{id:"heading"},"I am deepest children Heading"),
        React.createElement("h2",{id:"heading2"},"I am second deepest children Heading")
    ]
    ));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(createComplexDiv);
