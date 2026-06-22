let currentUserPage = null;

async function generateRandomUserPage() {
  const userPage = await getRandomUserPage();

  if (!userPage) {
    renderError("Something went wrong");
    return;
  }

  currentUserPage = userPage;
  renderUserPage(userPage);
}

function saveRandomUserPage() {
  if (currentUserPage !== null) {
    saveToLocalStorage(currentUserPage);
    renderSavedUsersDropdown(getSavedUserNames());
  }
}

function loadRandomUserPage() {
  const selectedUserName = savedUsersSelect.value;

  if (!selectedUserName) {
    renderError("Please choose a saved user");
    return;
  }

  const userPage = loadFromLocalStorage(selectedUserName);

  if (userPage) {
    currentUserPage = userPage;
    renderUserPage(userPage);
  } else {
    renderError("Saved user not found");
  }
}

const generateBtn = document.getElementById("generate-btn");
const saveBtn = document.getElementById("save-btn");
const loadBtn = document.getElementById("load-btn");
const savedUsersSelect = document.getElementById("saved-users-select");

generateBtn.addEventListener("click", generateRandomUserPage);
saveBtn.addEventListener("click", saveRandomUserPage);
loadBtn.addEventListener("click", loadRandomUserPage);

renderSavedUsersDropdown(getSavedUserNames());