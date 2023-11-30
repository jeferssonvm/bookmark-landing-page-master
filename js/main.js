const questions = document.querySelectorAll('.content-Questions__list--question');
questions.forEach((selecQuestion) => {
    selecQuestion.addEventListener('click', (itemsSelectQuestion) =>{
        itemsSelectQuestion.currentTarget.classList.toggle('active');
        const answer = selecQuestion.querySelector('.answer');
})})

