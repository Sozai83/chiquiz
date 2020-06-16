
//Make an array of question
//Qestion constructor 
(function(){
var Question = 
	function(question,answers, answer){
		this.question = question;
		this.answers = answers;
		this.answer = answer;
	}


var question1 = new Question('Who is the prime minister in Australia in 2020?', ['1 : Scott Morrison', '2 : Donald Trump', '3 : Shinzo Abe'],1);
var question2 = new Question('How many people live in Japan? ', ['1 : 125 million','2 : 200 million', '3 : 150 million', '4 : 100 million'],1);
var question3 = new Question('How many times is Australia bigger than Japan? ', ['1 : 15 times', '2 : 20 times', '3 : 5 times', '4 : 30 times'],2);
var question4 = new Question('Where is the capital in Australia ', ['1 : Canberra', '2 : Sydney', '3 : Melbourne', '4 : Tasmania'],1);
var question5 = new Question('Is learning code fun? ', ['1 : Not at all', '2 : Absolutely'],2);

var questions = [question1, question2, question3, question4, question5];

Question.prototype.displayQuestion = 
function(){
	console.log(this.question);
	for (var i = 0; i < this.answers.length; i++){
	console.log(this.answers[i]);
	}
}
//compare the answer and value which was put in popup input area
Question.prototype.checkAnswer =
function(ans){
if(ans){
	if(ans == this.answer){
		console.log('Correct!');
		var n = questions.indexOf(this);
		questions.splice(n,1);
		nextQuestion();
	}else if(ans === 'exit'){
		console.log('Stop the quiz.')
	}else{
		console.log('The answer is NOT correct. Try again.')
		response = prompt('Try again. Type your answer here.');
		this.checkAnswer(response);
	}
}else{
	console.log('The answer is \"' + this.answers[this.answer-1] + '\".');
	nextQuestion();
}}

//pick random number from ０-４; Math.floor(Math.random() * 5 )
function nextQuestion ()
{	
	if(questions.length > 0){
		var n = Math.floor(Math.random() * questions.length);
		questions[n].displayQuestion();
		var response = prompt('Type your answer here!');
		questions[n].checkAnswer(response);
	}else{
		console.log('You have answered all the questions!')
	}
}

document.getElementById('start').addEventListener('click', function(){
        		nextQuestion();
        	});


})();
