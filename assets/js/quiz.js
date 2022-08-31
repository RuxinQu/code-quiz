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
    let timeTotal = 76;
    loadQAndA(questionCount);



    $('.choice-container p').on('click', (event) => {
        checkAnswer(event);      
        if (questionCount < 4) {
            questionCount++;
            loadQAndA(questionCount);
        } else {
            stopTimer();      
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
        $('.container').addClass('hide');
        $('.score-container').removeClass('hide').addClass('show');
        $('#score').text(timeTotal);
        clearInterval(timer);
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
        console.log(questions[questionCount].answer)
        if (event.target.dataset.number == questions[questionCount].answer) {
            $('.result-text').text('Correct!')
        } else {
            $('.result-text').text('Wrong!')
            timeTotal = timeTotal - 10;
        }
    }

    const showResult = () => {
        $('.result-container').addClass('show').removeClass('hide');
    }
    const hideResult = () => {
        $('.result-container').addClass('hide').removeClass('show');
    }
})