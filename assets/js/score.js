$('document').ready(() => {
    const highScore = JSON.parse(localStorage.getItem('highScore'));
    if (highScore) {
        $('#high-score').append(highScore.map((score) => {
            return `<li> ${score.initial} - ${score.score} </li>`
        }).join(''))
    } else {
        return '';
    }

    $('#clear').on('click', (event) => {
        event.preventDefault(); 
        localStorage.clear();
        $('#high-score').text('');
    })

    $('.start-page-btn').on('click',(event)=>{
        event.preventDefault();
        window.location.assign('../../index.html')
       
    })
})

