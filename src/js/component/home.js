import React, { useState } from "react";

//create your first component
export function Home() {
	const [todoslist, setTodoslist] = useState([]);
	const [todos, setTodos] = useState("");
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
		<div className="text-center mt-5">
			<div>Todo List</div>
			<input onChange={e => setTodos(e.target.value)} />
			<button className="btn btn-warning" onClick={Handlead}>
				add to list
			</button>
			{todoslist.map((item, index) => (
				<p key={index}>{item}</p>
			))}
		</div>
	);
}
export default Home;
