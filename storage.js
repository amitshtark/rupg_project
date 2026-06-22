const STORAGE_KEY = "savedUsers";

function getSavedUsers() {
  const savedUsers = localStorage.getItem(STORAGE_KEY);

  if (!savedUsers) {
    return {};
  }

  return JSON.parse(savedUsers);
}

function saveToLocalStorage(userPage) {
  const savedUsers = getSavedUsers();

  const userName = userPage.user.name;

  savedUsers[userName] = userPage;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedUsers));
}

function loadFromLocalStorage(userName) {
  const savedUsers = getSavedUsers();

  if (!savedUsers[userName]) {
    return null;
  }

  return savedUsers[userName];
}

function getSavedUserNames() {
  const savedUsers = getSavedUsers();

  return Object.keys(savedUsers);
}