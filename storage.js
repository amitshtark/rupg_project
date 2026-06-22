function SaveToLocalStorage(userPage){
    localStorage.setItem(userPage.user.name, JSON.stringify(userPage));
}