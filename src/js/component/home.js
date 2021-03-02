import React, { useState } from "react";

//create your first component
export function Home() {
	const [todoslist, setTodoslist] = useState([]);
	const [todos, setTodos] = useState("");
	const [trash, setTrash] = useState(false);
	let showArray = [];

	const updateTodos = e => {
		setTodos(e.target.value);
	};

	const Handlead = () => {
		setTodoslist([...todoslist, todos]);
		console.log("todos before", todos);
		setTodos("");
		console.log("todos after", todos);
	};

	const showTodoslist = () => {
		for (let i = 0; todoslist.length; i++)
			return showArray.push(todoslist[i]);
	};

	return (
		<div
			className="text-center mt-5"
			style={{ width: "35%", margin: "auto" }}>
			<div>Todo List</div>
			<input onChange={e => setTodos(e.target.value)} />
			<button className="btn btn-warning" onClick={Handlead}>
				add to list
			</button>
			{todoslist.map((item, index) => (
				<div
					key={index}
					className="border row"
					onMouseEnter={() => setTrash(!trash)}
					onMouseLeave={() => setTrash(!trash)}>
					<div className="d-flex justify-content-start col">
						<p>{item}</p>
					</div>
					<div className="d-flex justify-content-end col">
						{!trash === false ? (
							<button>
								<i className="fas fa-window-close"></i>
							</button>
						) : (
							""
						)}
					</div>
				</div>
			))}
		</div>
	);
}
export default Home;
