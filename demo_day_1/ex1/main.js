//Real DOM
//-Element node: document.createElement()
//Virtual DOM
//React element
//-React element : React.createElement()
const h1 = React.createElement("h1", {
        id: "heading",
        className: "small-heading",
        title: "Đây là Doanh",
    },
    [
        React.createElement("i", {
            key: 1
        }, null, React.createElement(
            "strong", {
                key: 2
            }, null, "bạn"
        ), "xin chào "),
        React.createElement("span", {
            key: 2
        }, null, "Lam Doanh")
    ]);
console.log(h1);
//React DOM : UI Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h1);