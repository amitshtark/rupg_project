async function loadRandomUserPage() {
  const userPage = await getRandomUserPage();

  if (!userPage) {
    renderError("Something went wrong");
    return;
  }

  renderUserPage(userPage);
}

const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", loadRandomUserPage);