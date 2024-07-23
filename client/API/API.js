import axios from "axios";

export const signUp = async (data) => {
	try {
		const response = await axios.post(
			"http://localhost:5000/api/auth/signup",
			data,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		return response;
	} catch (err) {
		console.log("Error: ", err.message);
	}
};

export const signIn = async (data) => {
	try {
		const response = await axios.post(
			"http://localhost:5000/api/auth/sign-in",
			data,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		return response;
	} catch (err) {
		console.log("Error: ", err);
	}
};
