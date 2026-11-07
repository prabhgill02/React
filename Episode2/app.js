import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id:"parent"},
    React.createElement("div", {id:"child1"}, [
        React.createElement("h1", {id:"heading1", key: "h1"}, "I am h1 tag"),
        React.createElement("h1", {id:"heading2", key: "h2"}, "I am new h1 tag")
    ]),
    React.createElement("div", {id:"child2"}, [
        React.createElement("h1", {id:"heading3", key: "h1"}, "I am h1 tag"),
        React.createElement("h1", {id:"heading4", key: "h2"}, "I am new h1 tag")
    ])
);
// const heading = React.createElement("h1", {id:"heading", xyz:"abx"}, 'Welcome to React 2');
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
root.render(parent); 