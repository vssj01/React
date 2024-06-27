
// const heading = React.createElement("h1", {id: "heading", xyz: 'abc'}, "Hello World from React");

// console.log(heading); // React Object, not html element

// const root = ReactDOM.createRoot(document.getElementById("root"));

// ---------- Let us render nested html elements -----------------
/**
<div id="parent">
      <div id="child">
            <h1></h1>
      </div>
</div> 
ReactElement(Object) => HTML(Browser understands)
 **/

const parent = React.createElement(
      "div", 
      {id: "parent"},
      React.createElement(
            "div" , 
            {id: "child"},
            [
                  React.createElement("h1", {}, "I'm h1 tag"),
                  React.createElement("h2", {}, "I'm h2 tag")
            ]
            
      )
)

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);