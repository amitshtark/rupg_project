function renderUserPage(userPage){
    document.querySelector(".profile-card").style.display = "grid";
    renderUser(userPage.user);
    renderFriends(userPage.friends);
    renderQuote(userPage.quote);
    renderPokemon(userPage.pokemon);
    renderAbout(userPage.about);
}

function renderUser(user) {
  const userContainer = document.getElementById("user-container");

  userContainer.innerHTML = `
    <img src="${user.picture}" alt="${user.name}" class="user-img">

    <div class="user-info">
      <h1>${user.name}</h1>
      <p>${user.city}, ${user.state}</p>
    </div>
  `;
}

function renderFriends(friends)
{
    const friendsContainer = document.getElementById("friends-container");
    friendsContainer.innerHTML = "";
    friends.forEach(friendName => {
        const friendDiv = document.createElement("div");
        friendDiv.textContent = friendName;
        friendsContainer.appendChild(friendDiv);
    });

}

function renderQuote(quote){
  const quoteContainer = document.getElementById("quote-container");

  quoteContainer.innerHTML = `
    <p class="quote-text">"${quote}"</p>
    <p class="quote-author"> Kanye West</p>
  `;
}

function renderPokemon(pokemon){
  const pokemonContainer = document.getElementById("pokemon-container");

  pokemonContainer.innerHTML = `
    <div class="pokemon-info">
      <h3>${pokemon.name}</h3>
    </div>
    <img src="${pokemon.picture}" alt="${pokemon.name}" class="pokemon-img">

  `;
}


function renderAbout(about){
    const aboutContainer = document.getElementById("about-container");
    aboutContainer.textContent = about;
}

function renderSavedUsersDropdown(userNames) {
  const select = document.getElementById("saved-users-select");

  select.innerHTML = `<option value="">Choose saved user</option>`;

  userNames.forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    select.appendChild(option);
  });
}

function renderError(message) {
  const errorContainer = document.getElementById("error-container");
  errorContainer.textContent = message;
}