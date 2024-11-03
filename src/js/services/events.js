import axios from "axios";

export async function getEvents(username) {
	try {
		const response = await axios.get(`https://api.github.com/users/${username}/events?per_page=10`);
		return response.data;
	} catch (error) {
		console.log(`Erro na requisição: ${error}`);
	}
}
