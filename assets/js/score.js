$('document').ready(() => {
    const highScore = JSON.parse(localStorage.getItem('highScore'));
    console.log(highScore)
    $('#high-score').append(highScore.map((score) => {
        return `<li> ${score.initial} - ${score.score} </li>`
    }).join(''))

    $('#clear').on('click',(event)=>{
        event.preventDefault();
        localStorage.clear();
    })


})

