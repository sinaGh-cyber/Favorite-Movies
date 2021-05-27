const addMovieModal = document.getElementById(`add-modal`);
const StartAddMovieButton = document.querySelector(`header button`);
const backgroundDarker = document.getElementById(`backdrop`);
const backdroptoggler = () => {backgroundDarker.classList.toggle(`visible`);};
const StartAddMovieButtonToggler = () => {addMovieModal.classList.toggle(`visible`);};
//Add Movie button functionality:
StartAddMovieButton.addEventListener("click" , StartAddMovieButtonToggler );
StartAddMovieButton.addEventListener(`click`, backdroptoggler);
//backDrope cancleing:
backgroundDarker.addEventListener(`click`, backdroptoggler);
backgroundDarker.addEventListener(`click`, StartAddMovieButtonToggler);


