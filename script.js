
(function() {
    function Question(question, answer, correctAnswer){
        this.question = question;
        this.answer = answer;
        this.correctAnswer = correctAnswer;
    }

    var ques0 = new Question('what\'s the capital of Netherlands?', ['Amsterdam', 'Stockholm','Lisbon', 'Ottawa', 'Beirut'], 0);
    var ques1 = new Question('what\'s the capital of Sweden?', ['Ottawa', 'Stockholm','Amsterdam', 'Lisbon', 'Beirut'], 1);
    var ques2 = new Question('what\'s the capital of Portugal?', ['Beirut','Amsterdam', 'Stockholm', 'Ottawa', 'Lisbon',], 4);
    var ques3 = new Question('what\'s the capital of Canada?', [ 'Lisbon','Stockholm', 'Beirut', 'Ottawa','Amsterdam'], 3);
    var ques4 = new Question('what\'s the capital of Lebanom?', ['Amsterdam','Beirut', 'Ottawa', 'Lisbon',  'Stockholm' ], 1);


    // Stores all question objects into an array
    var questions = [ques0, ques1, ques2, ques3, ques4];


    /*
        Selects a random question from the 
        questions array and returns the object
        question to display after
    */
    function genQuestion(question){
        var questSelector = Math.floor(Math.random()* 5);
        return question[questSelector];
    }

    /*
        Connects a question object to display it's question
        and it's alternatives
    */
    Question.prototype.displayQuestion = function(){
        console.log(this.question);
        for(var i = 0; i < this.answer.length;i++){
            console.log(i  + ': ' + this.answer[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans){
        if(this.correctAnswer === ans){
            console.log('Correct Answer!!');

        } else {
            console.log('Wrong Answer, try again!');
        }
    }

    function game(){
        
        var q = genQuestion(questions);
        q.displayQuestion();
        var correctAns = parseInt(prompt('Please, select the correct answer.'));
       
        if(correctAns === 10){
            console.log('End');
        } else {
            q.checkAnswer(correctAns);
            game();
        }
        
    }
    game();
})();

