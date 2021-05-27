const addMovieModal = document.getElementById(`add-modal`);
const addButton = document.querySelector(`header button`);
console.log(addButton);
addButton.addEventListener("click" , () => {addMovieModal.classList.toggle(`visible`);} );

