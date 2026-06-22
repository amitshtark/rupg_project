
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

function saveRandomUserPage(){
  if(currentUserPage !== null)
  {
    saveToLocalStorage(currentUserPage);
  }

}

const generateBtn = document.getElementById("generate-btn");
const saveBtn = document.getElementById("save-btn")

generateBtn.addEventListener("click", generateRandomUserPage);

saveBtn.addEventListener("click", saveRandomUserPage);