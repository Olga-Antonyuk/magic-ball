document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        * {
            font-family: Arial, sans-serif;
        }
        
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: #4a6baf;
            padding: 20px;
        }
        
        .container {
            text-align: center;
            background: white;
            border-radius: 15px;
            padding: 30px;
            width: 100%;
            max-width: 500px;
        }
        
        h1 {
            color: #2c3e6d;
            margin-bottom: 30px;
            font-size: 28px;
        }
        
        .magic-ball {
            margin: 0 auto 30px;
            display: flex;
            justify-content: center;
        }
        
        .ball-image {
            width: 300px;
            height: 300px;
          
        }
        
        .answer-container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 120px;
            height: 120px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            
        }
        
        .answer {
            font-size: 20px;
            font-weight: bold;
            color: black;
            text-align: center;
            padding: 10px;
        }
        
        .question-section {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        
        #questionInput {
            padding: 12px 15px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            text-align: center;
            background: #f5f5f5; 
        }
        
        #questionInput:focus {
            outline: none; 
        }
        
        #askBtn {
            padding: 12px 25px;
            background: #4a6baf;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        .shake {
            animation: shake 0.5s ease-in-out;
        }
        
        @media (max-width: 600px) {
            .ball-image {
                width: 200px;
                height: 200px;
            }
            
            .answer-container {
                width: 100px;
                height: 100px;
            }
            
            .answer {
                font-size: 16px;
            }
        }
    `;
    document.head.appendChild(style);
	
    const container = document.createElement('div');
    container.className = 'container';

    const title = document.createElement('h1');
    title.textContent = 'Магічна куля';

    const magicBall = document.createElement('div');
    magicBall.className = 'magic-ball';

    const ballContainer = document.createElement('div');
    ballContainer.style.position = 'relative';
    ballContainer.style.display = 'inline-block';

    const ballImage = document.createElement('img');
    ballImage.className = 'ball-image';
    ballImage.src = 'MagicBall.png';
    ballImage.alt = 'Магічна куля';

    const answerContainer = document.createElement('div');
    answerContainer.className = 'answer-container';

    const answer = document.createElement('div');
    answer.className = 'answer';
    answer.id = 'answer';

    const questionSection = document.createElement('div');
    questionSection.className = 'question-section';

    const questionInput = document.createElement('input');
    questionInput.type = 'text';
    questionInput.id = 'questionInput';
    questionInput.placeholder = 'Чи буде завтра сонячно?';

    const askBtn = document.createElement('button');
    askBtn.id = 'askBtn';
    askBtn.textContent = 'Задати питання';

    answerContainer.appendChild(answer);
    ballContainer.appendChild(ballImage);
    ballContainer.appendChild(answerContainer);
    magicBall.appendChild(ballContainer);
    
    questionSection.appendChild(questionInput);
    questionSection.appendChild(askBtn);
    
    container.appendChild(title);
    container.appendChild(magicBall);
    container.appendChild(questionSection);
    
    document.body.appendChild(container);

    const answers = [
        "Так",
        "Ні",
        "Можливо",
        "Безсумнівно",
        "Запитай пізніше",
        "Не можу відповісти",
        "Дуже сумнівно",
        "Так, безумовно",
    ];

    function getRandomAnswer() {
        return answers[Math.floor(Math.random() * answers.length)];
    }

    function validateQuestion(question) {
        if (!question.trim()) {
            alert("Будь ласка, введіть питання");
            return false;
        }
        if (!question.endsWith('?')) {
            alert("Питання має закінчуватися знаком '?'");
            return false;
        }
        return true;
    }


    function askQuestion() {
        const question = questionInput.value.trim();
        
        if (!validateQuestion(question)) return;
        

        ballContainer.classList.add('shake');
        askBtn.disabled = true;
    
        setTimeout(() => {
            const result = getRandomAnswer();
            answer.textContent = result;
            ballContainer.classList.remove('shake');
            askBtn.disabled = false;
        }, 500);
    }


    askBtn.addEventListener('click', askQuestion);
    
});
