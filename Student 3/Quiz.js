//Initialize variables
let currentElement;
let correctQuestions = 0;
let lastQuestionAnswered;
let score = 0;
let timeLeft;
let i = 0;
let j = 0;
let k = 0;

//Empty arrays to store the feedback of the performance
let correctArray = [];
let incorrectArray = [];
let unansweredArray = [];

//Array to store the answer options
let answerArray = Array.from(document.getElementsByClassName('answer'));

//Initializing variablles to DOM elements
let quizId = document.getElementById("quiz-container");
let messageId = document.getElementById("message");
let mainBodyId = document.getElementById("quiz-body");
let feedbackId = document.getElementById("feedbackPage");
let timerId = document.getElementById("timer");
let mainPageId = document.getElementById("mainPage");

//Array to store the questions, options, correct answer and links to images
const quizData = [
    {
        question: "1. How many modern world wonders are there?",
        a: "6",
        b: "9",
        c: "5",
        d: "7",
        correct: "d",
        image: "url('Quiz-Images/Taj-Mahal.jpg')",
    },
    {
        question: "2. In which city is the Eiffel Tower situated?",
        a: "Rome",
        b: "Paris",
        c: "Venice",
        d: "Berlin",
        correct: "b",
        image: "url('Quiz-Images/Paris.jpg')",
    },
    {
        question: "3. What is the tallest man-made structure in the World?",
        a: "Burj Khalifa ",
        b: "The Empire State Building",
        c: "Shanghai Tower",
        d: "Lotus Tower Colombo",
        correct: "a",
        image: "url('Quiz-Images/Building.jpg')",
    },
    {
        question: "4. In which Museum is the Mona Lisa painting displayed?",
        a: "Orsay Museum",
        b: "Louvre Museum ",
        c: "Carnavalet Museum",
        d: "Mer Marine Museum",
        correct: "b",
        image: "url('Quiz-Images/Mona-Lisa.jpg')",
    },
    {
        question: "5. Which country has the most number of inhabited Islands?",
        a: "Indonesia",
        b: "New Zealand",
        c: "Japan",
        d: "Philippines",
        correct: "a",
        image: "url('Quiz-Images/Islands.jpg')",
    },
    {
        question: "6. In which country is Machu Picchu located?",
        a: "Cuba ",
        b: "Brazil",
        c: "Peru",
        d: "Chile",
        correct: "c",
        image: "url('Quiz-Images/Machu-Pichchu.jpg')",
    },
    {
        question: "7. From which country did Spaghetti originate?",
        a: "Mexico ",
        b: "Italy",
        c: "France",
        d: "Brazil",
        correct: "b",
        image: "url('Quiz-Images/Pasta.jpg')",
    },
    {
        question: "8. In which century was the Sigiriya Rock built?",
        a: "Fifth Century",
        b: "Tenth Century",
        c: "Second Century",
        d: "Seventh Century",
        correct: "a",
        image: "url('Quiz-Images/Sigiriya.jpg')",
    },
    {
        question: "9. Which country is famous for Sushi?",
        a: "China",
        b: "Thailand",
        c: "Japan",
        d: "South Korea",
        correct: "c",
        image: "url('Quiz-Images/Sushi.jpg')",
    },
    {
        question: "10. What is the capital of Brazil?",
        a: "Sao Paulo",
        b: "Rio de Janeiro",
        c: "Salvador",
        d: "Brazilia",
        correct: "d",
        image: "url('Quiz-Images/Brazil.jpg')",
    },
];

    //Clears the checked radio button
    function deselectAnswers(item) {
        item.checked = false;    
    }

    function startQuiz() {                    
        //Runs through each radio button and clears it 
        answerArray.forEach(deselectAnswers);
        
        let currentElementData = quizData[currentElement];

        //Assigns the data in the current element of the array to the label tags 
        document.getElementById('question').innerHTML = currentElementData.question;
        document.getElementById('optionA').innerHTML = currentElementData.a;
        document.getElementById('optionB').innerHTML = currentElementData.b;
        document.getElementById('optionC').innerHTML = currentElementData.c;
        document.getElementById('optionD').innerHTML = currentElementData.d;
        //Background image in quiz container
        quizId.style.backgroundImage = currentElementData.image;
        quizId.style.backgroundSize = "cover";
    }

    function startTimer(){
        //Time taken to complete the quiz
        timeLeft = 59; 
        //In-built setInterval() function is used
        //This function iterates every 1000 milliseconds
        timer = setInterval(function(){
                    timerId.innerHTML ="Time Remaining: 0." + timeLeft;
                    if(timeLeft > 0){
                        timeLeft --;
                    }                  
                    else{
                        clearInterval(timer);
                        lastQuestionAnswered = currentElement + 1;
                        endQuiz();
                    }
                }, 1000);
    }
    
    //This function will be called when Start button is clicked
    function showQuiz(){
        currentElement = 0;
        //The Main Page will be hidden
        mainPageId.style.display = "none";
        //The quiz will be shown
        quizId.style.display = "block";
        //The timer will start
        startTimer();
        //Calls the function to start the quiz
        startQuiz();
    }

    //Runs through the answers and returns the checked answer
    function getRadioValue(answerArray){
        for(let i = 0; i < answerArray.length; i++){
            if(answerArray[i].checked){
                return answerArray[i].value;                            
            }
        }
        return "";
    }

    //Checks if the users answer is correct
    function checkAnswer(){
       
        let userAnswer = getRadioValue(answerArray);
        
        //If the users answer is correct
        if(userAnswer === quizData[currentElement].correct){
            correctQuestions++;
            correctArray[i] = " Q" + (currentElement + 1);
            score+=2;
            i++;
        }
        //If the users answer is empty
        else if(userAnswer === ""){
            unansweredArray[j] = " Q" + (currentElement + 1);
            j++;
        }
        //If the user has entered the wrong answer
        else{
            score--;
            incorrectArray[k] = " Q" + (currentElement + 1);
            k++;                            
        }
        
        //Iterate the question no
        currentElement++;
        
        //If it is not the end of the array, move to the next question
        if(currentElement < quizData.length) {
            startQuiz();
        }
        //If it is the last elemnet of the array, run the endQuiz() function to end the quiz
        else{
            endQuiz();
        }
    }

    function endQuiz(){
        //Add questions which could not be answered within the time to the unanswered array
        while(lastQuestionAnswered <= 10){
            unansweredArray[j] = " Q" + (lastQuestionAnswered);
            j++;
            lastQuestionAnswered++
        }

        //Clears the timer function to strt from the begining
        clearInterval(timer);

        //The Quiz will be hidden
        quizId.style.display = "none";
        //The Feedback Page will be displayed
        feedbackId.style.display = "block";

        
        if(score > 5){
            //background of the page turns green if score is greater than 0
            mainBodyId.style.backgroundColor = "rgb(29, 80, 29)";
            //feedback from quiz
            messageId.innerHTML = "CONGRATULATION!";
        }
        else{
            //background of the page turns red if score is less than 0
            mainBodyId.style.backgroundColor = "rgb(165, 72, 72)";
            //feedback from quiz
            messageId.innerHTML = "HARD LUCK! TRY AGAIN";

        }
        
        //Assigns the data from the quiz to the list tags in the feedback form
        document.getElementById("correctAnswers").innerHTML = `You answered ${correctQuestions} out of ${quizData.length} questions correctly`;
        document.getElementById("timeTaken").innerHTML = `You completed the Quiz in ${60 - timeLeft} seconds`;
        document.getElementById("score").innerHTML =  `Your total score is ${score}`;
        document.getElementById("correct").innerHTML = `Correct Questions:${correctArray}`;
        document.getElementById("incorrect").innerHTML = `Incorrect Questions:${incorrectArray}`;
        document.getElementById("unanswered").innerHTML = `Unanswered Questions:${unansweredArray}`;
    }

    //This function reloads the page when the reload button is clicked
    function reload(){
        //Assign all the variables to 0
        correctQuestions = 0;
        score = 0;
        i = 0;
        j = 0;
        k = 0;
        //Empty all the arrays
        correctArray = [];
        incorrectArray = [];
        unansweredArray = [];

        //Reset the page layout
        mainBodyId.style.backgroundColor = "rgb(233, 221, 221)";
        feedbackId.style.display = "none";
        mainPageId.style.display = "block";
    }