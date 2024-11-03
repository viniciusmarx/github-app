export const screen = {
	userProfileElement: document.querySelector(".profile-data"),
	renderUser(user, repositories) {
		this.userProfileElement.innerHTML = `<div class="info">
                                                <img src="${user.avatar_url}" alt="Foto de perfil do usuário"/>
                                                <div class="data">
                                                    <h1>${user.name ?? "Não possui nome cadastrado 😢"}</h1>
                                                    <p>${user.bio ?? "Não possui bio cadastrada 😢"}</p>
                                                    <p><strong>${user.followers} </strong>Followers · <strong>${user.following}</strong> Following</p>
                                                </div>
                                             </div>`;
		let repositoriesItems = "";
		repositories.forEach((repo) => {
			repositoriesItems += `<li>
                                    <a target="_blank" href="${repo.clone_url}">${repo.name}</a> 
                                    <div class="repositories-info"> 
                                        <p>🍴 ${repo.forks}</p>
                                        <p>⭐ ${repo.stargazers_count}</p>
                                        <p>👀 ${repo.watchers}</p>
                                        <p>👨‍💻 ${repo.language}</p>
                                    </div>
                                  </li>`;
		});

		if (repositories.length > 0) {
			this.userProfileElement.innerHTML += `<div class="repositories section">
                                                    <h2>Repositórios</h2>
                                                    <ul>${repositoriesItems}</ul>
                                                  </div>`;
		}
	},
};
