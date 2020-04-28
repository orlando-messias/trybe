const divExercise4 = document.getElementById('exercise-4');

divExercise4.addEventListener('mouseover', () => {
    divExercise4.classList.add('animation');
});

divExercise4.addEventListener('mouseout', () => {
    divExercise4.classList.remove('animation');
});