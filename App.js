// app.js

// Nested structure with createElement
const parent = React.createElement(
	"div",
	{ id: "parent" },
	React.createElement(
		"div",
		{ id: "child" },
		React.createElement("h1", {}, "I'm an h1 tag"),
		React.createElement("h2", {}, "I'm an h2 tag"),
	),
);

// Render it to the real DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
