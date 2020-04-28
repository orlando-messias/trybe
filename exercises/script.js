const divExercise4 = document.getElementById('exercise-4');
const section5 = document.getElementById('section-5');

divExercise4.addEventListener('mouseover', () => {
    divExercise4.classList.add('animation');
});

divExercise4.addEventListener('mouseout', () => {
    divExercise4.classList.remove('animation');
});

section5.addEventListener('mouseover', () => {
    section5.children[0].classList.add('animation');
});

section5.addEventListener('mouseout', () => {
    section5.children[0].classList.remove('animation');
});