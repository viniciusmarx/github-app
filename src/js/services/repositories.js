import axios from "axios";

export async function getRepositories(username) {
	try {
		const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=10`);
		return response.data;
	} catch (error) {
		console.error(`erro na requisição:${error}`);
	}
}
