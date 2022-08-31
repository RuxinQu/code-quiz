$(document).ready(() => {
    let questions = [
        {
            question: 'Commonly used data types DO Not include:',
            choice1: "strings",
            choice2: 'boolean',
            choice3: 'alerts',
            choice4: 'numbers',
            answer: 3
        },
        {
            question: 'The condition in an if / else statement is enclosed with________',
            choice1: 'quotes',
            choice2: 'curly brackets',
            choice3: 'parenthesis',
            choice4: 'square brackets',
            answer: 3
        },
        {
            question: 'Array in JavaScript can be used to store________',
            choice1: 'numbers and strings',
            choice2: 'other arrays',
            choice3: 'booleans',
            choice4: 'all of the above',
            answer: 4
        },
        {
            question: 'String values must be enclosed within________when being assigned to variables.',
            choice1: 'commas',
            choice2: 'curly brackets',
            choice3: 'quotes',
            choice4: 'parenthesis',
            answer: 3
        },
        {
            question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
            choice1: 'JavaScript',
            choice2: 'terminal/bash',
            choice3: 'for loops',
            choice4: 'console.log',
            answer: 4
        }
    ];

    let questionCount = 0;
    let timeTotal = 76;
    let correctAnswer;

    loadQAndA(questionCount);

    $('.choice-container').on('click', (event) => {
        if (questionCount > 4) {
            stopTimer();
        } else {
            checkAnswer(event);
            questionCount++;
            loadQAndA(questionCount);
        }
    })

    $('.timer').text(timeTotal)
    let timer = setInterval(() => {
        if (timeTotal > 0) {
            timeTotal--;
            $('.timer').text(timeTotal);
        } else {
            stopTimer();
        }
    }, 1000)

    const stopTimer = () => {
        clearInterval(timer);
        $('.container').addClass('hide');
        $('.score-container').removeClass('hide').addClass('show');
        $('#score').text(timeTotal);
    }

    function loadQAndA(questionCount) {
        $('#question').text(questions[questionCount].question);
        $('#choice1').text(questions[questionCount].choice1);
        $('#choice2').text(questions[questionCount].choice2);
        $('#choice3').text(questions[questionCount].choice3);
        $('#choice4').text(questions[questionCount].choice4);
    }

    const checkAnswer = (event) => {
        console.log(questionCount)
        $('.result-container').addClass('show').removeClass('hide');
        $('.result-text').text(event.target.dataset.number == questions[questionCount].answer ? 'Correct!' : `Wrong! The correct answer is ${questions[questionCount].answer}`)
    }

})