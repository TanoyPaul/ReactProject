function customReader(reactElement,container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    // domElement.setAttribute("href", reactElement.props.href);
    // // domElement.setAttribute("target", reactElement.props.target);

    // container.appendChild(domElement); // first type 

    for (const property in reactElement.props) {
        if (property === 'children'){
            continue;
        } // property = every single key in reactElement.props
        domElement.setAttribute (property, reactElement.props[property]);
    }
    container.appendChild(domElement);


}

const reactElement = {

    type: 'a',
    props: {
        href: "https://google.com",
        // target: "_blank"
    },
    children: "Google"

}

const mainContainer = document.getElementById("root");

customReader(reactElement,mainContainer);