import { getUser } from "./services/user";
import { getRepositories } from "./services/repositories";
import { user } from "./objects/user";
import { screen } from "./objects/screen";

export async function getUserData(username) {
	try {
		const userData = await getUser(username);
		const repositories = await getRepositories(username);

		user.setInfo(userData);
		user.setRepositories(repositories);
		console.log(user);

		screen.renderUser(user);
	} catch (error) {
		const userInfo = "<h3>Usuário não encontrado</h3>";
		console.log(error);
		document.querySelector(".profile-data").innerHTML = userInfo;
	}
}

document.getElementById("btn-search").addEventListener("click", () => {
	const username = document.getElementById("input-search").value;
	if (!emptyInput(username)) getUserData(username);
});

document.getElementById("input-search").addEventListener("keyup", (event) => {
	const username = event.target.value;
	const key = event.key;
	if (key === "Enter") {
		if (!emptyInput(username)) getUserData(username);
	}
});

function emptyInput(username) {
	if (username === "") {
		alert("Preencha o campo com o nome do usuário no GitHub");
		return true;
	}
}