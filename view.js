function renderUserPage(userPage){
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