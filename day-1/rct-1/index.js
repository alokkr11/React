// ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root1"))

// ReactDOM.render(<ul>
//     <li>Cat</li>
//     <li>Dog</li>
//     </ul>,document.getElementById("root"))
/*
function Navbar(){
    return (<ul>
            <li>Cat</li>
             <li>Dog</li>
             </ul>)
}

ReactDom.render(<div>
    <Navbar />
</div>,
document.getElementById("root"))
*/
/*
let r = document.getElementById("root");
let h = document.createElement("h1");
h.textContent = "I am learning react"
h.className = "header"
r.append(h);
*/
/*
const page = (<nav>
    <h1>My Website</h1>
    <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
</nav>)

ReactDOM.render(page, document.getElementById("root"))
*/

const page = (
    <nav>
    <h1>Hello World!</h1>
    <p>This is aparagraph.</p>
    <ul>
        <li>abc</li>
        <li>def</li>
    </ul>
    </nav>
)

//document.getElementById("root").append(page);
ReactDOM.render(page, document.getElementById("root"))

