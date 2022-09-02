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

    let highScore = [];
    let questionCount = 0;
    let timeTotal = 5;
    loadQAndA(questionCount);


    $('.choice-container p').on('click', (event) => {
        if ((event.target).matches('p')) {
            checkAnswer(event);
            if (questionCount < 4) {
                questionCount++;
                setTimeout(() => {
                    hideResult();
                    loadQAndA(questionCount);
                }, 1000)
            } else {
                stopTimer();
                setTimeout(() => {
                    hideResult();
                    showScore();
                }, 1000)
            }
        }
    })

    $('#submit').on('click', (event) => {
        event.preventDefault();
        if (!$('#initial').val()) {
            alert('Please enter your initials')
        } else {
            saveHighScore();
            window.location.assign('../html/score.html');
        }

    })

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

    function loadQAndA(questionCount) {
        $('#question').text(questions[questionCount].question);
        let choicesElArr = [$('#choice1'), $('#choice2'), $('#choice3'), $('#choice4')];
        for (let x = 0; x < choicesElArr.length; x++) {
            choicesElArr[x].text(questions[questionCount].choices[x])
        }
    }

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
        const score = {
            initial: $('#initial').val(),
            score: timeTotal
        };
        highScore.push(score);

        highScore.sort((a, b) => {
            return b.score - a.score;
        })
        
        localStorage.setItem('highScore', JSON.stringify(highScore)); 
    }

    const showResult = () => {
        $('.result-container').addClass('show').removeClass('hide');
    }

    const hideResult = () => {
        $('.result-container').addClass('hide').removeClass('show');
    }

    const showScore = () => {
        $('.container').addClass('hide');
        $('.score-container').removeClass('hide').addClass('show');
        $('#score').text(timeTotal);
    }
})