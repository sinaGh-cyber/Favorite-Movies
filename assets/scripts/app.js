const addMovieModal = document.getElementById(`add-modal`);
const StartAddMovieButton = document.querySelector(`header button`);
const backgroundDarker = document.getElementById(`backdrop`);
StartAddMovieButton.addEventListener("click" , () => {addMovieModal.classList.toggle(`visible`);} );
StartAddMovieButton.addEventListener(`click`, () => {backgroundDarker.classList.toggle(`visible`);});

