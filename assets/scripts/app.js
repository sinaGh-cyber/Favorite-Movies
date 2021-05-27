const addMovieModal = document.getElementById(`add-modal`);
const StartAddMovieButton = document.querySelector(`header button`);
const backgroundDarker = document.getElementById(`backdrop`);
const cancelButton = document.querySelector(`.modal__actions button`);
const backdroptoggler = () => {backgroundDarker.classList.toggle(`visible`);};
const StartAddMovieButtonToggler = () => {
    addMovieModal.classList.toggle(`visible`);
    backdroptoggler();
};
const backdropClickHandeler = () => {
    StartAddMovieButtonToggler();
}; 
//Add Movie button functionality:
StartAddMovieButton.addEventListener("click" , StartAddMovieButtonToggler );
//backDrope cancleing:
backgroundDarker.addEventListener(`click`, backdropClickHandeler);
cancelButton.addEventListener(`click`, backdropClickHandeler);