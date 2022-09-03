$(document).ready(() => {
    let questions = [
        {
            question: 'Commonly used data types DO Not include:',
            choices: ['1. strings', '2. boolean', '3. alerts', '4. numbers'],
            answer: 2
        },
        {
            question: 'The condition in an if / else statement is enclosed with________',
            choices: ['1. quotes', '2. curly brackets', '3. parenthesis', '4. square brackets'],
            answer: 2
        },
        {
            question: 'Array in JavaScript can be used to store________',
            choices: ['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above'],
            answer: 3
        },
        {
            question: 'String values must be enclosed within________when being assigned to variables.',
            choices: ['1. commas', '2. curly brackets', '3. quotes', '4. parenthesis'],
            answer: 2
        },
        {
            question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
            choices: ['1. JavaScript', '2. terminal/bash', '3. for loops', '4. console.log'],
            answer: 3
        }
    ];


    let questionCount = 0;
    loadQAndA(questionCount);
    // if highScore has data from local storage then get the local storage, if no data, it's an empty array.
    let highScore = JSON.parse(localStorage.getItem('highScore')) || [];

    $('.choice-container p').on('click', (event) => {
        //when click on p elements with choices inside the div with class choice-container, first call a function to check if it matches the answer
        checkAnswer(event);
        // if there're still more questions to display, show next question after 1 seconds 
        if (questionCount < 4) {
            questionCount++;
            setTimeout(() => {
                hideResult();
                loadQAndA(questionCount);
            }, 1000)
        // if no more question to display, stop the timer and show the final result
        } else {
            stopTimer();
            setTimeout(() => {
                hideResult();
                showScore();
            }, 1000)
        }

    })

    $('#submit').on('click', (event) => {
        event.preventDefault();
        if (!$('#initial').val()) {
            alert('Please enter your initials')
        } else {
            // save the user initials to local storage and relocate the html to show the high score
            saveHighScore();
            window.location.assign('../html/score.html');
        }

    })

    // total time is 75 seconds, show the time only when it's more than 0. If the timeTotal is equal to 0, stop the timer and show final score 0
    let timeTotal = 75;
    let timer = setInterval(() => {
        if (timeTotal > 0) {
            $('.timer').text(timeTotal);
            timeTotal--;
        } else {
            stopTimer();
            hideResult();
            showScore();
        }
    }, 1000)

    const stopTimer = () => {
        clearInterval(timer);
        $('.timer').text(timeTotal);
    }

    // load the questions and choices from the questions array
    function loadQAndA(questionCount) {
        $('#question').text(questions[questionCount].question);
        let choicesElArr = [$('#choice1'), $('#choice2'), $('#choice3'), $('#choice4')];
        for (let x = 0; x < choicesElArr.length; x++) {
            choicesElArr[x].text(questions[questionCount].choices[x])
        }
    }

    /* check the clicked element's data-number. if the data-number matches the number saved in the questions array, 
    the result shows correct, otherwise take 10 seconds from total time*/
    const checkAnswer = (event) => {
        showResult()
        if (event.target.dataset.number == questions[questionCount].answer) {
            $('.result-text').text('Correct!')
        } else {
            $('.result-text').text('Wrong!')
            timeTotal = timeTotal - 10;
        }
    }

     
    const saveHighScore = () => {
        // save each score as an object.
        const score = {
            initial: $('#initial').val(),
            score: timeTotal
        };
        // push new score object to the highScore array
        highScore.push(score);
        // sort the score with a descending order 
        highScore.sort((a, b) => {
            return b.score - a.score;
        })
        
        // save the object as a string
        localStorage.setItem('highScore', JSON.stringify(highScore));
    }

    // show the result of 'right' or 'wrong' after user clicks one choice
    const showResult = () => {
        $('.result-container').addClass('show').removeClass('hide');
    }
    // hide the result 
    const hideResult = () => {
        $('.result-container').addClass('hide').removeClass('show');
    }

    // add/remove classes to the score and render to the page
    const showScore = () => {
        $('.container').addClass('hide');
        $('.score-container').removeClass('hide').addClass('show');
        $('#score').text(timeTotal);
    }
})