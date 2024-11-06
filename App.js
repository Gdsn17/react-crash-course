const heading = React.createElement("div",{id:"parent"}, [
    React.createElement("div",{id:"child"}, [
        React.createElement("h1",{}, "hello world 1"),
        React.createElement("h2",{}, "hello world 2")
    ]),
    React.createElement("div",{id:"child"}, [
        React.createElement("h1",{}, "hello world 3"),
        React.createElement("h2",{}, "hello world 4")
    ])

])

console.log(heading)

const root =  ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)
