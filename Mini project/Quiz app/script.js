async function startQuiz() {

    const response = await fetch("https://opentdb.com/api.php?amount=10");
    const data = await response.json();

    const ques = document.getElementById("question");
    const buttons = document.querySelectorAll(".option-btn");
    const nextBtn = document.getElementById("nextBtn");
    const Marks=document.getElementById('score');

    let currentQuestionIndex = 0;
    let selectedAnswer = "";
    let score = 0;

    function showQuestion() {

        const currentQuestion = data.results[currentQuestionIndex];

        ques.innerText = currentQuestion.question;

        const options = [
            currentQuestion.correct_answer,
            ...currentQuestion.incorrect_answers
        ];

        options.sort(() => Math.random() - 0.5);

        buttons.forEach((btn, index) => {
            btn.innerText = options[index];
        });

        selectedAnswer = "";
    }

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            selectedAnswer = btn.innerText;
        });
    });

    nextBtn.addEventListener("click", () => {

        const currentQuestion = data.results[currentQuestionIndex];

        if (selectedAnswer === currentQuestion.correct_answer) {
            score++;
            Marks.innerText=`Score: ${score}`;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < data.results.length) {
            showQuestion();
        } else {
            Marks.innerText = `Quiz Finished! Score: ${score}`;
        }
    });

    showQuestion(); // initial render
}

startQuiz();