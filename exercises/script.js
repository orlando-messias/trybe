const divExercise4 = document.getElementById('exercise-4');
const section5 = document.getElementById('section-5');
const divExercise6Square = document.getElementById('exercise-6-square');
const divExercise6 = document.getElementById('exercise-6');

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

divExercise6Square.addEventListener('mouseover', () => {
    divExercise6.classList.add('animation2');
});

divExercise6Square.addEventListener('mouseout', () => {
    divExercise6.classList.remove('animation2');
});