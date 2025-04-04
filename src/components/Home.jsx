import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const Home = () => {
	const [text, setText] = useState("");
	const [todoArr, setTodoArr] = useState([]);
	//const [isCompleted, setCompleted] = useState(false);
	const [showFinished, setShowFinished] = useState(false);
	useEffect(() => {
		let todoString = localStorage.getItem("todos")
		if(todoString){
		  let newTodoArr = JSON.parse(localStorage.getItem("todos")) 
		  setTodoArr(newTodoArr)
		}
	  }, [])
	  
	
	  const saveToLS = (arr) => {
		localStorage.setItem("todos", JSON.stringify(arr))
	  }
	const handleChange = (e) => {
		setText(e.target.value);
	};
	const handleAdd = (e) => {
		if (text.length <5) {
			alert(
				"Length of you new todo must be greater than or equal to 5 characters"
			);
			return;
		}
		let newTodoArr = [...todoArr];
		newTodoArr.push({ id: uuidv4(), text, isCompleted: false });
		setTodoArr(newTodoArr);
		saveToLS(newTodoArr)
	};
	const handleShowFinished = (e) => {
		setShowFinished(e.target.checked);
	};
	const handleCompleted = (e) => {
		let uid = e.target.id;
		let index = todoArr.findIndex((item) => {
			return item.id === uid;
		});
		let newTodoArr = [...todoArr];
		newTodoArr[index].isCompleted = true;
		setTodoArr(newTodoArr);
		saveToLS(newTodoArr)
	};
	const handleEdit = (e) => {
		let uid = e.target.id;
		let index = todoArr.findIndex((item) => {
			return item.id === uid;
		});
		setText(todoArr[index].text);
		handleDelete(e);

	};
	const handleDelete= (e) => {
		let uid = e.target.id;
		let newTodoArr = todoArr.filter((item) => {
			return !(item.id === uid);
		});
		 newTodoArr=[...newTodoArr];
		setTodoArr(newTodoArr);
		saveToLS(newTodoArr)
	};

	return (
		<>
			<div className="outerContainer mx-[14%] my-[1%] bg-violet-100 rounded-2xl">
				<div className="pt-12 px-5">
					<div className="font-bold text-2xl">Add your todos:-</div>
					<div className="flex flex-col md:sm:flex-row md:sm:justify-start justify-center items-center">
					<input
						type="text"
						value={text}
						className="my-2  py-1  w-[80%]"
						onChange={handleChange}
					/>
					
					<button
						onClick={handleAdd}
						className="mx-10 bg-violet-950 text-white  px-3 py-1 rounded-xl hover:bg-cyan-500"
					>
						Add
					</button>
					</div>
					
					
					
				</div>
				<div className="pt-2 px-5">
					<div className="flex justify-center font-bold text-2xl py-4">
						All your todos:-
					</div>
					<label className="finishedContainer flex align-middle gap-4 ">
						Show Finished Todos
						<input
							type="checkbox"
							value={showFinished}
							onChange={handleShowFinished}
							className="w-5 "
						/>
					</label>
					<div className="todos py-4">
						{todoArr.map((item) => {
							if (showFinished || !item.isCompleted)
								return (
									<div
										key={item.id}
										className="flex align-middle my-3"
										
									>
										<div className="flex-1 flex items-center" >
											<span
												className={
													item.isCompleted
														? "line-through"
														: ""
												}
											>
												{item.text}
											</span>
											{item.isCompleted ? (
												""
											) : (
												<input
													type="checkbox"
													id={item.id}
													onChange={handleCompleted}
													className="mx-3 "
												/>
											)}
										</div>
										<div className="flex-1  flex items-center gap-3">
											
											{item.isCompleted?"":<button
												onClick={handleEdit}
												id={item.id}
												className=" bg-violet-950 text-white  px-3 py-1 rounded-xl hover:bg-cyan-500  "
											>
												Edit
											</button>}
											<button
												onClick={handleDelete}
												id={item.id}
												className=" bg-violet-950 text-white   px-3 py-1 rounded-xl hover:bg-cyan-500 "
											>
												Delete
											</button> 
											
											
										</div>
									</div>
								);
						})}
					</div>
				</div>
			</div>
			
		</>
	);
};

export default Home;
