const rootNode = document.getElementById("root")

const root = ReactDOM.createRoot(rootNode)

// const virtualDOM = React.createElement("h1", null, "Hello React")

// const VD = {
//     type: "h1",
//     children: "Hello React"
// }


function App() {
    return (
        React.createElement("div", null, 
            React.createElement("h1", null, "Hello React"),
            React.createElement("ul", null, 
                React.createElement("ul", null, "Subtitle 1"),
                React.createElement("ul", null, "Subtitle 2"),
                React.createElement("ul", null, "Subtitle 3"),
            )
        )
    )
}

// const VD = {
//     type: "h1",
//     children: [
//         {
//             type: "ul",
//             children: [
//                 {
//                     type: "li",
//                     children: "Subtitle 1"
//                 },
//                 {
//                     type: "li",
//                     children: "Subtitle 2"
//                 },
//                 {
//                     type: "li",
//                     children: "Subtitle 3"
//                 },
//             ]
//         }
//     ]
// }

// root.render(virtualDOM)
root.render(React.createElement(App))

console.log(App())
setTimeout(() => {
    for (const field in document.querySelector("h1")) console.log(field)
}, 1000)