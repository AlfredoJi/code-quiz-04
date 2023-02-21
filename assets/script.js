//Use querySelector to grab the button with the ID btn
var startQuiz = document.querySelector("#btn");
//Use querySelector to grab the element with the ID time
var timerEl = document.querySelector("#time");
//Setting the default time
var time = 30;
//Setting the score to 0
var score = 0;
//Use querySelector to grab the button with the ID h-Btn
var highscoreClick = document.querySelector("#h-Btn");

//Eventlistener to start quiz when the start button is pressed
startQuiz.addEventListener("click", function () {
    codeGame();
});

//Function for the code quiz to hold everything inside
function codeGame() {


    //Function for the first question
    function questionOne() {
        //Creating a new h1 element to hold the question
        var questionHead = document.createElement("h1");
        //Typing the question as a text into the element
        var questionText = document.createTextNode("___ is the process of finding errors and fixing them within a program.");
        //Appending the text onto the question element
        questionHead.appendChild(questionText);
        //Appending the question element onto the body
        document.body.appendChild(questionHead);

        //Creating a new button element to hold the choices
        var buttonOne = document.createElement("button");
        //Typing the choice as a text into the button
        var choiceOne = document.createTextNode("1.Compiling");
        //Setting the style attribute
        buttonOne.setAttribute("class", "choiceBtn");
        //Appending the choice text onto the button
        buttonOne.appendChild(choiceOne);
        //Appending the button onto the body
        document.body.appendChild(buttonOne);

        //Eventlistener to start once they click the first choice
        buttonOne.addEventListener("click", function () {
            //Remove the question element
            questionHead.remove();
            //Remove the first choice element
            buttonOne.remove();
            //Remove the second choice element
            buttonTwo.remove();
            //Remove the third choice element
            buttonThree.remove();
            //Remove the fourth choice element
            buttonFour.remove();
            //Call the questionTwo function
            questionTwo();
            //Call the wrongMessage function to show the user they picked the wrong choice
            wrongMessage();
        });

        //Creating a new button element to hold the choices
        var buttonTwo = document.createElement("button");
        //Typing the choice as a text into the button
        var choiceTwo = document.createTextNode("2.Executing");
        //Setting the style attribute
        buttonTwo.setAttribute("class", "choiceBtn");
        //Appending the choice text onto the button
        buttonTwo.appendChild(choiceTwo);
        //Appending the button onto the body
        document.body.appendChild(buttonTwo);

        //Eventlistener to start once they click the second choice
        buttonTwo.addEventListener("click", function () {
            //Remove the question element
            questionHead.remove();
            //Remove the first choice element
            buttonOne.remove();
            //Remove the second choice element
            buttonTwo.remove();
            //Remove the third choice element
            buttonThree.remove();
            //Remove the fourth choice element
            buttonFour.remove();
            //Call the questionTwo function
            questionTwo();
            //Call the wrongMessage function to show the user they picked the wrong choice
            wrongMessage();
        });

        //Creating a new button element to hold the choices
        var buttonThree = document.createElement("button");
        //Typing the choice as a text into the button
        var choiceThree = document.createTextNode("3.Debugging");
        //Setting the style attribute
        buttonThree.setAttribute("class", "choiceBtn");
        //Appending the choice text onto the button
        buttonThree.appendChild(choiceThree);
        //Appending the button onto the body
        document.body.appendChild(buttonThree);

        //Eventlistener to start once they click the third choice
        buttonThree.addEventListener("click", function () {
            //Remove the question element
            questionHead.remove();
            //Remove the first choice element
            buttonOne.remove();
            //Remove the second choice element
            buttonTwo.remove();
            //Remove the third choice element
            buttonThree.remove();
            //Remove the fourth choice element
            buttonFour.remove();
            //Call the questionTwo function
            questionTwo();
            //Call the correctMessage function to show the user they picked the correct choice
            correctMessage();
        });

        //Creating a new button element to hold the choices
        var buttonFour = document.createElement("button");
        //Typing the choice as a text into the button
        var choiceFour = document.createTextNode("4.Scanning");
        //Setting the style attribute
        buttonFour.setAttribute("class", "choiceBtn");
        //Appending the choice text onto the button
        buttonFour.appendChild(choiceFour);
        //Appending the button onto the body
        document.body.appendChild(buttonFour);

        //Eventlistener to start once they click the fourth choice
        buttonFour.addEventListener("click", function () {
            //Remove the question element
            questionHead.remove();
            //Remove the first choice element
            buttonOne.remove();
            //Remove the second choice element
            buttonTwo.remove();
            //Remove the third choice element
            buttonThree.remove();
            //Remove the fourth choice element
            buttonFour.remove();
            //Call the questionTwo function
            questionTwo();
            //Call the wrongMessage function to show the user they picked the wrong choice
            wrongMessage();
        });

    }

    //Function for the second question
    function questionTwo() {
        //Creating a new h1 element to hold the question
        var questionHead = document.createElement("h1");
        //Typing the question as a text into the element
        var questionText = document.createTextNode("A loop that never ends is referred to as a(n)____");
        //Appending the text onto the question element
        questionHead.appendChild(questionText);
        //Appending the question element onto the body
        document.body.appendChild(questionHead);

        //Creating a new button element to hold the choices
        var buttonOne = document.createElement("button");
        //Typing the choice as a text into the button
        var choiceOne = document.createTextNode("1.While loop");
        //Setting the style attribute
        buttonOne.setAttribute("class", "choiceBtn");
        //Appending the choice text onto the button
        buttonOne.appendChild(choiceOne);
        //Appending the button onto the body
        document.body.appendChild(buttonOne);

        //Eventlistener to start once they click the first choice
        buttonOne.addEventListener("click", function () {
            //Remove the question element
            questionHead.remove();
            //Remove the first choice element
            buttonOne.remove();
            //Remove the second choice element
            buttonTwo.remove();
            //Remove the third choice element
            buttonThree.remove();
            //Remove the fourth choice element
            buttonFour.remove();
            //Call the questionThree function
            questionThree();
            //Call the wrongMessage function to show the user they picked the wrong choice
            wrongMessage();
        });

        //Creating a new button element to hold the choices
        var buttonTwo = document.createElement("button");
        //Typing the choice as a text into the button
        var choiceTwo = document.createTextNode("2.Infinite loop");
        //Setting the style attribute
        buttonTwo.setAttribute("class", "choiceBtn");
        //Appending the choice text onto the button
        buttonTwo.appendChild(choiceTwo);
        //Appending the button onto the body
        document.body.appendChild(buttonTwo);

        //Eventlistener to start once they click the second choice
        buttonTwo.addEventListener("click", function () {
            //Remove the question element
            questionHead.remove();
            //Remove the first choice element
            buttonOne.remove();
            //Remove the second choice element
            buttonTwo.remove();
            //Remove the third choice element
            buttonThree.remove();
            //Remove the fourth choice element
            buttonFour.remove();
            //Call the questionThree function
            questionThree();
            //Call the correctMessage function to show the user they picked the correct choice
            correctMessage();
        });

        //Creating a new button element to hold the choices
        var buttonThree = document.createElement("button");
        //Typing the choice as a text into the button
        var choiceThree = document.createTextNode("3.Recursive loop");
        //Setting the style attribute
        buttonThree.setAttribute("class", "choiceBtn");
        //Appending the choice text onto the button
        buttonThree.appendChild(choiceThree);
        //Appending the button onto the body
        document.body.appendChild(buttonThree);

        //Eventlistener to start once they click the third choice
        buttonThree.addEventListener("click", function () {
            //Remove the question element
            questionHead.remove();
            //Remove the first choice element
            buttonOne.remove();
            //Remove the second choice element
            buttonTwo.remove();
            //Remove the third choice element
            buttonThree.remove();
            //Remove the fourth choice element
            buttonFour.remove();
            //Call the questionThree function
            questionThree();
            //Call the wrongMessage function to show the user they picked the wrong choice
            wrongMessage();
        });

        //Creating a new button element to hold the choices
        var buttonFour = document.createElement("button");
        //Typing the choice as a text into the button
        var choiceFour = document.createTextNode("4.) for loop");
        //Setting the style attribute
        buttonFour.setAttribute("class", "choiceBtn");
        //Appending the choice text onto the button
        buttonFour.appendChild(choiceFour);
        //Appending the button onto the body
        document.body.appendChild(buttonFour);

        //Eventlistener to start once they click the fourth choice
        buttonFour.addEventListener("click", function () {
            //Remove the question element
            questionHead.remove();
            //Remove the first choice element
            buttonOne.remove();
            //Remove the second choice element
            buttonTwo.remove();
            //Remove the third choice element
            buttonThree.remove();
            //Remove the fourth choice element
            buttonFour.remove();
            //Call the questionThree function
            questionThree();
            //Call the wrongMessage function to show the user they picked the wrong choice
            wrongMessage();
        });




    }

    //Function for the third question
    function questionThree() {
        //Creating a new h1 element to hold the question
        var questionHead = document.createElement("h1");
        //Typing the question as a text into the element
        var questionText = document.createTextNode("Which command will stop an infinite loop?");
        //Appending the text onto the question element
        questionHead.appendChild(questionText);
        //Appending the question element onto the body
        document.body.appendChild(questionHead);

        //Creating a new button element to hold the choices
        var buttonOne = document.createElement("button");
        //Typing the choice as a text into the button
        var choiceOne = document.createTextNode("1.Alt-C");
        //Setting the style attribute
        buttonOne.setAttribute("class", "choiceBtn");
        //Appending the choice text onto the button
        buttonOne.appendChild(choiceOne);
        //Appending the button onto the body
        document.body.appendChild(buttonOne);

        //Eventlistener to start once they click the first choice
        buttonOne.addEventListener("click", function () {
            //Remove the question element
            questionHead.remove();
            //Remove the first choice element
            buttonOne.remove();
            //Remove the second choice element
            buttonTwo.remove();
            //Remove the third choice element
            buttonThree.remove();
            //Remove the fourth choice element
            buttonFour.remove();
            //Call the questionFour function
            questionFour();
            //Call the wrongMessage function to show the user they picked the wrong choice
            wrongMessage();
        });

        //Creating a new button element to hold the choices
        var buttonTwo = document.createElement("button");
        //Typing the choice as a text into the button
        var choiceTwo = document.createTextNode("2.Shift-C");
        //Setting the style attribute
        buttonTwo.setAttribute("class", "choiceBtn");
        //Appending the choice text onto the button
        buttonTwo.appendChild(choiceTwo);
        //Appending the button onto the body
        document.body.appendChild(buttonTwo);

        //Eventlistener to start once they click the second choice
        buttonTwo.addEventListener("click", function () {
            //Remove the question element
            questionHead.remove();
            //Remove the first choice element
            buttonOne.remove();
            //Remove the second choice element
            buttonTwo.remove();
            //Remove the third choice element
            buttonThree.remove();
            //Remove the fourth choice element
            buttonFour.remove();
            //Call the questionFour function
            questionFour();
            //Call the wrongMessage function to show the user they picked the wrong choice
            wrongMessage();
        });

        //Creating a new button element to hold the choices
        var buttonThree = document.createElement("button");
        //Typing the choice as a text into the button
        var choiceThree = document.createTextNode("3.Esc");
        //Setting the style attribute
        buttonThree.setAttribute("class", "choiceBtn");
        //Appending the choice text onto the button
        buttonThree.appendChild(choiceThree);
        //Appending the button onto the body
        document.body.appendChild(buttonThree);

        //Eventlistener to start once they click the third choice
        buttonThree.addEventListener("click", function () {
            //Remove the question element
            questionHead.remove();
            //Remove the first choice element
            buttonOne.remove();
            //Remove the second choice element
            buttonTwo.remove();
            //Remove the third choice element
            buttonThree.remove();
            //Remove the fourth choice element
            buttonFour.remove();
            //Call the questionFour function
            questionFour();
            //Call the wrongMessage function to show the user they picked the wrong choice
            wrongMessage();
        });

        //Creating a new button element to hold the choices
        var buttonFour = document.createElement("button");
        //Typing the choice as a text into the button
        var choiceFour = document.createTextNode("4.Ctrl-C");
        //Setting the style attribute
        buttonFour.setAttribute("class", "choiceBtn");
        //Appending the choice text onto the button
        buttonFour.appendChild(choiceFour);
        //Appending the button onto the body
        document.body.appendChild(buttonFour);

        //Eventlistener to start once they click the fourth choice
        buttonFour.addEventListener("click", function () {
            //Remove the question element
            questionHead.remove();
            //Remove the first choice element
            buttonOne.remove();
            //Remove the second choice element
            buttonTwo.remove();
            //Remove the third choice element
            buttonThree.remove();
            //Remove the fourth choice element
            buttonFour.remove();
            //Call the questionFour function
            questionFour();
            //Call the correctMessage function to show the user they picked the correct choice
            correctMessage();
        });




    }

    //Function for the fourth question
    function questionFour() {
        //Creating a new h1 element to hold the question
        var questionHead = document.createElement("h1");
        //Typing the question as a text into the element
        var questionText = document.createTextNode("What does HTML stand for");
        //Appending the text onto the question element
        questionHead.appendChild(questionText);
        //Appending the question element onto the body
        document.body.appendChild(questionHead);

        //Creating a new button element to hold the choices
        var buttonOne = document.createElement("button");
        //Typing the choice as a text into the button
        var choiceOne = document.createTextNode("1.Hyper Text Markup Language");
        //Setting the style attribute
        buttonOne.setAttribute("class", "choiceBtn");
        //Appending the choice text onto the button
        buttonOne.appendChild(choiceOne);
        //Appending the button onto the body
        document.body.appendChild(buttonOne);

        //Eventlistener to start once they click the first choice
        buttonOne.addEventListener("click", function () {
            //Remove the question element
            questionHead.remove();
            //Remove the first choice element
            buttonOne.remove();
            //Remove the second choice element
            buttonTwo.remove();
            //Remove the third choice element
            buttonThree.remove();
            //Remove the fourth choice element
            buttonFour.remove();
            //Call the questionFive function
            questionFive();
            //Call the correctMessage function to show the user they picked the correct choice
            correctMessage();
        });

        //Creating a new button element to hold the choices
        var buttonTwo = document.createElement("button");
        //Typing the choice as a text into the button
        var choiceTwo = document.createTextNode("2.Hyper Trainer Marking Language");
        //Setting the style attribute
        buttonTwo.setAttribute("class", "choiceBtn");
        //Appending the choice text onto the button
        buttonTwo.appendChild(choiceTwo);
        //Appending the button onto the body
        document.body.appendChild(buttonTwo);

        //Eventlistener to start once they click the second choice
        buttonTwo.addEventListener("click", function () {
            //Remove the question element
            questionHead.remove();
            //Remove the first choice element
            buttonOne.remove();
            //Remove the second choice element
            buttonTwo.remove();
            //Remove the third choice element
            buttonThree.remove();
            //Remove the fourth choice element
            buttonFour.remove();
            //Call the questionFive function
            questionFive();
            //Call the wrongMessage function to show the user they picked the wrong choice
            wrongMessage();
        });

        //Creating a new button element to hold the choices
        var buttonThree = document.createElement("button");
        //Typing the choice as a text into the button
        var choiceThree = document.createTextNode("3.Hyper Text Marketing Language");
        //Setting the style attribute
        buttonThree.setAttribute("class", "choiceBtn");
        //Appending the choice text onto the button
        buttonThree.appendChild(choiceThree);
        //Appending the button onto the body
        document.body.appendChild(buttonThree);

        //Eventlistener to start once they click the third choice
        buttonThree.addEventListener("click", function () {
            //Remove the question element
            questionHead.remove();
            //Remove the first choice element
            buttonOne.remove();
            //Remove the second choice element
            buttonTwo.remove();
            //Remove the third choice element
            buttonThree.remove();
            //Remove the fourth choice element
            buttonFour.remove();
            //Call the questionFive function
            questionFive();
            //Call the wrongMessage function to show the user they picked the wrong choice
            wrongMessage();
        });

        //Creating a new button element to hold the choices
        var buttonFour = document.createElement("button");
        //Typing the choice as a text into the button
        var choiceFour = document.createTextNode("4.Hyper Text Markup Leveler");
        //Setting the style attribute
        buttonFour.setAttribute("class", "choiceBtn");
        //Appending the choice text onto the button
        buttonFour.appendChild(choiceFour);
        //Appending the button onto the body
        document.body.appendChild(buttonFour);

        //Eventlistener to start once they click the fourth choice
        buttonFour.addEventListener("click", function () {
            //Remove the question element
            questionHead.remove();
            //Remove the first choice element
            buttonOne.remove();
            //Remove the second choice element
            buttonTwo.remove();
            //Remove the third choice element
            buttonThree.remove();
            //Remove the fourth choice element
            buttonFour.remove();
            //Call the questionFive function
            questionFive();
            //Call the wrongMessage function to show the user they picked the wrong choice
            wrongMessage();
        });




    }

    //Function for the fifth question
    function questionFive() {
        //Creating a new h1 element to hold the question
        var questionHead = document.createElement("h1");
        //Typing the question as a text into the element
        var questionText = document.createTextNode("A short sections of code written to complete a task.");
        //Appending the text onto the question element
        questionHead.appendChild(questionText);
        //Appending the question element onto the body
        document.body.appendChild(questionHead);

        //Creating a new button element to hold the choices
        var buttonOne = document.createElement("button");
        //Typing the choice as a text into the button
        var choiceOne = document.createTextNode("1.Buffer");
        //Setting the style attribute
        buttonOne.setAttribute("class", "choiceBtn");
        //Appending the choice text onto the button
        buttonOne.appendChild(choiceOne);
        //Appending the button onto the body
        document.body.appendChild(buttonOne);

        //Eventlistener to start once they click the first choice
        buttonOne.addEventListener("click", function () {
            //Remove the question element
            questionHead.remove();
            //Remove the first choice element
            buttonOne.remove();
            //Remove the second choice element
            buttonTwo.remove();
            //Remove the third choice element
            buttonThree.remove();
            //Remove the fourth choice element
            buttonFour.remove();
            //Call the highscoreForm function since this is the last question
            highscoreForm();
            //Call the wrongMessage function to show the user they picked the wrong choice
            wrongMessage();
        });

        //Creating a new button element to hold the choices
        var buttonTwo = document.createElement("button");
        //Typing the choice as a text into the button
        var choiceTwo = document.createTextNode("2.Array");
        //Setting the style attribute
        buttonTwo.setAttribute("class", "choiceBtn");
        //Appending the choice text onto the button
        buttonTwo.appendChild(choiceTwo);
        //Appending the button onto the body
        document.body.appendChild(buttonTwo);

        //Eventlistener to start once they click the second choice
        buttonTwo.addEventListener("click", function () {
            //Remove the question element
            questionHead.remove();
            //Remove the first choice element
            buttonOne.remove();
            //Remove the second choice element
            buttonTwo.remove();
            //Remove the third choice element
            buttonThree.remove();
            //Remove the fourth choice element
            buttonFour.remove();
            //Call the highscoreForm function since this is the last question
            highscoreForm();
            //Call the wrongMessage function to show the user they picked the wrong choice
            wrongMessage();
        });

        //Creating a new button element to hold the choices
        var buttonThree = document.createElement("button");
        //Typing the choice as a text into the button
        var choiceThree = document.createTextNode("3.Loop");
        //Setting the style attribute
        buttonThree.setAttribute("class", "choiceBtn");
        //Appending the choice text onto the button
        buttonThree.appendChild(choiceThree);
        //Appending the button onto the body
        document.body.appendChild(buttonThree);

        //Eventlistener to start once they click the third choice
        buttonThree.addEventListener("click", function () {
            //Remove the question element
            questionHead.remove();
            //Remove the first choice element
            buttonOne.remove();
            //Remove the second choice element
            buttonTwo.remove();
            //Remove the third choice element
            buttonThree.remove();
            //Remove the fourth choice element
            buttonFour.remove();
            //Call the highscoreForm function since this is the last question
            highscoreForm();
            //Call the wrongMessage function to show the user they picked the wrong choice
            wrongMessage();
        });

        //Creating a new button element to hold the choices
        var buttonFour = document.createElement("button");
        //Typing the choice as a text into the button
        var choiceFour = document.createTextNode("4.Function");
        //Setting the style attribute
        buttonFour.setAttribute("class", "choiceBtn");
        //Appending the choice text onto the button
        buttonFour.appendChild(choiceFour);
        //Appending the button onto the body
        document.body.appendChild(buttonFour);

        //Eventlistener to start once they click the fourth choice
        buttonFour.addEventListener("click", function () {
            //Remove the question element
            questionHead.remove();
            //Remove the first choice element
            buttonOne.remove();
            //Remove the second choice element
            buttonTwo.remove();
            //Remove the third choice element
            buttonThree.remove();
            //Remove the fourth choice element
            buttonFour.remove();
            //Call the highscoreForm function since this is the last question
            highscoreForm();
            //Call the correctMessage function to show the user they picked the correct choice
            correctMessage();
        });




    }

    //Function to clear display once user press start
    function removeStart() {
        //Use querySelector to grab the element with the class rules
        var pEl = document.querySelector(".rules");
        //Remove this element
        pEl.remove();
        //Use querySelector to grab the element with the class questionHead
        var hEl = document.querySelector(".questionHead");
        //Remove this element
        hEl.remove();
        //Use querySelector to grab the element with the ID btn
        var bEl = document.querySelector("#btn");
        //Remove this button
        bEl.remove();
    }

    //Function to display the wrong message
    function wrongMessage() {
        //Set timer for the message to last only 1 second
        var messageTime = 1;
        //Creating a new element to hold the message
        var wrongMess = document.createElement("div");
        //Inputting message text
        var wrongText = document.createTextNode("Wrong!");
        //Setting the style attribute
        wrongMess.setAttribute("class", "wrong");
        //Apending the message text to the wrong element
        wrongMess.appendChild(wrongText);
        //Apending the wrong element to the body
        document.body.appendChild(wrongMess);
        //Takes away 3 seconds if this function is called
        time -= 3;

        //Timer for how long the message is display
        setInterval(function () {
            messageTime--

            if (messageTime === 0) {
                wrongMess.remove();
            }

        }, 1000);
    }

    //Function to display the correct message
    function correctMessage() {
        //Set timer for the message to last only 1 second
        var messageTime = 1;
        //Creating a new element to hold the message
        var correctMess = document.createElement("div");
        //Inputting message text
        var correctText = document.createTextNode("Correct!");
        //Setting the style attribute
        correctMess.setAttribute("class", "wrong");
        //Apending the message text to the correct element
        correctMess.appendChild(correctText);
        //Apending the correct element to the body
        document.body.appendChild(correctMess);
        //Adding 20 points to the score if this function is called
        score += 20;

        //Timer for how long the message is display
        setInterval(function () {
            messageTime--

            if (messageTime === 0) {
                correctMess.remove();
            }

        }, 1000);
    }

    //Function for the countdown timer for the quiz
    function countDown() {
        var timeInterval = setInterval(function () {
            time--
            timerEl.textContent = time;

            if (time === 0) {
                clearInterval(timeInterval);
                timerEl.textContent = 0;
            }
        }, 1000);
    }

    //Function for the highscore page
    function highscoreForm() {
        //Creating a new div element to hold the done message
        var doneMess = document.createElement("div");
        //Inputting message text
        var doneText = document.createTextNode("All Done!");
        //Setting the style attribute
        doneMess.setAttribute("class", "highScore");
        //Appending doneText to the doneMess element
        doneMess.appendChild(doneText);
        //Appending the doneMess element to the body
        document.body.appendChild(doneMess);
        //Creating a new div element to hold the score message
        var scoreMess = document.createElement("div");
        //Inputting message text
        var scoreText = document.createTextNode("Your final score is " + score + "!");
        //Setting the style attribute
        scoreMess.setAttribute("class", "score");
        //Appending scoreText to the scoreMess element
        scoreMess.appendChild(scoreText);
        //Appending the scoreMess element to the body
        document.body.appendChild(scoreMess);
        //Creating a new div element to hold the initials message
        var initMess = document.createElement("div");
        //Inputting message text
        var initText = document.createTextNode("Please enter your initials: ");
        //Setting the style attribute
        initMess.setAttribute("class", "score");
        //Appending initText to the initMess element
        initMess.appendChild(initText);
        //Appending the initMess element to the body
        document.body.appendChild(initMess);
        //Creating a new form element to hold the initials input
        var scoreForm = document.createElement("form");
        //Creating a new input element to hold the initials input
        var initials = document.createElement("input");
        //Setting the style attribute
        initials.setAttribute("type", "text");
        //Setting the style attribute
        initials.setAttribute("name", "FullName");
        //Setting the style attribute
        initials.setAttribute("placeholder", "Initials");
        //Appending the initials elment into the scoreForm
        scoreForm.appendChild(initials);
        //Creating a new button element to hold the submit
        var submitButton = document.createElement("button");
        //Inputting message text
        var submitMess = document.createTextNode("Submit");
        //Setting the style attribute
        submitButton.setAttribute("class", "submitBtn");
        //Appending the submitMess to the button
        submitButton.appendChild(submitMess);
        //Appending the buttion to the scoreForm
        scoreForm.appendChild(submitButton);
        //Appending the scoreForm to the body
        document.body.appendChild(scoreForm);
    }

    //Calling the countDown function
    countDown();
    //Calling the removeStart function
    removeStart();
    //Calling the questionOne function
    questionOne();
}
