import React, { useEffect, useState } from "react";
import axios from "axios";

const Fib = () => {
	const [seenIndexes, setSeenIndexes] = useState([]);
	const [values, setValues] = useState({});
	const [index, setIndex] = useState("");

	useEffect(() => {
		fetchValues();
		fetchIndexes();
	}, []);

	const fetchValues = async () => {
		const _values = await axios.get("/api/values/current");
		setValues(_values.data);
	};

	const fetchIndexes = async () => {
		const _seenIndexes = await axios.get("/api/values/all");
		setSeenIndexes(_seenIndexes.data);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		await axios.post("/api/values", {
			index: index,
		});
		setIndex("");
	};

	const renderSeenIndexes = () => {
		return seenIndexes.map((n: number): number => n).join(", ");
	};

	const renderValues = () => {
		return Object.entries(values).map((key, value) => {
			return (
				<div>
					For index {key} i calculated {value}
				</div>
			);
		});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>Enter your index:</label>
				<input
					value={index}
					onChange={(e) => {
						setIndex(e.target.value);
					}}
				/>
				<button>Submit</button>
			</form>
			<h3>Indexes i have seen:</h3>
			{renderSeenIndexes()}

			<h3>Calculated values:</h3>
			{renderValues()}
		</div>
	);
};

export default Fib;
