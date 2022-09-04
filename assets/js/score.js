$('document').ready(() => {
    const renderHighScore = () => {
        // get the data from local storage and convert it to an array with objects inside
        const highScore = JSON.parse(localStorage.getItem('highScore'));
        /* if highScore variable has local data, go through the array and return each value to the key initial and score
        otherwise return an empty string */
        if (highScore) {
            $('#high-score').append(highScore.map((score) => {
                return `<li> ${score.initial} - ${score.score} </li>`
            }).join(''))
        } else {
            return '';
        }
    }

    // when click on the clear button, clear the local storage
    $('#clear').on('click', (event) => {
        event.preventDefault();
        localStorage.clear();
        window.location.reload();
    })

    // when click on the go back button the page will relocate to the start page
    $('#start').on('click', (event) => {
        event.preventDefault();
        window.location.assign('../../index.html');
    })

    renderHighScore();
})

