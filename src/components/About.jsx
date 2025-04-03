import React from "react";

const About = () => {
	return (
		<div className="outerContainer mx-[14%] my-[1%] bg-violet-100 rounded-2xl">
			<h1 className="text-3xl flex justify-center underline font-bold pt-4 ">About the project</h1>
			<div className="mx-5 py-10 text-xl">
				<p>This is a simple Frontend Project of a Todo Web Application.</p>
				<p>It uses tailwind CSS version 3.4 and React 19.0 .</p>
				<p>The Application uses localStorage of Browser to store todos locally on browser.</p>
				<p>The Design is Responsive.</p>
				<p>Funcationalites:-</p>
				<ul className="list-disc mx-3 "> 
					<li>Create , Edit and Delete Todos</li>
					<li>Option to mark Completed </li>
					<li>Option to see Completed Todos.</li>
				</ul>
			</div>
		</div>
	);
};

export default About;
