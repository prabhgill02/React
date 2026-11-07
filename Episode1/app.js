
const parent = React.createElement("div", {id:"parent"},
    React.createElement("div", {id:"child1"}, [
        React.createElement("h1", {id:"heading"}, "I am h1 tag"),
        React.createElement("h1", {id:"heading"}, "I am new h1 tag")
    ]),
    React.createElement("div", {id:"child2"}, [
        React.createElement("h1", {id:"heading"}, "I am h1 tag"),
        React.createElement("h1", {id:"heading"}, "I am new h1 tag")
    ])
);
// const heading = React.createElement("h1", {id:"heading", xyz:"abx"}, 'Welcome to React 2');
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
root.render(parent); 