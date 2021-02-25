import React, { useState } from "react";

//create your first component
export function Home() {
	const [todolist, setTodolist] = useState([]);
	const [todos, setTodos] = useState("");

	const updateTodos = e => {
		setTodos(e.target.values);
	};

	const Handlead = () => {
		setTodolist(todolist.concat([todos]));
	};

	return (
		<div className="text-center mt-5">
			<div>Todo List</div>
			<input placeholders="todos" onChange={updateTodos} />
			<button onClick={Handlead}>add to list</button>
		</div>
	);
}
