
const parent= React.createElement(
     "div",
    {id:"first"},
    [React.createElement("h1",
        {id:"a"},
        "i am parent"),
        
    React.createElement("div",
        {id:"child"},
        [React.createElement("h1",
        {id:"ab"},
        "i am child "),
        React.createElement("h2",
        {id:"ab"},
        "i am child 2")
        ]
    
    )]
    
)
console.log(parent)

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)