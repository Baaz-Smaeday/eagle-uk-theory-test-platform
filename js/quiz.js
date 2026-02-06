// Shared quiz functionality for all topics
let TOPIC_ID = '';
let questions = [];
let currentIndex = 0;
let userAnswers = {};
let flaggedQuestions = new Set();
let notes = {};

function initQuiz(topicId) {
    TOPIC_ID = topicId;
    loadProgress();
    loadQuestions();
}

function loadProgress() {
    const saved = localStorage.getItem(TOPIC_ID + '_progress');
    if (saved) {
        const data = JSON.parse(saved);
        userAnswers = data.userAnswers || {};
        flaggedQuestions = new Set(data.flaggedQuestions || []);
        notes = data.notes || {};
    }
}

function saveProgress() {
    const data = {
        userAnswers,
        flaggedQuestions: Array.from(flaggedQuestions),
        notes
    };
    localStorage.setItem(TOPIC_ID + '_progress', JSON.stringify(data));
}

function loadQuestions() {
    fetch('../data/' + TOPIC_ID + '.json')
        .then(response => response.json())
        .then(data => {
            questions = data;
            document.getElementById('total').textContent = questions.length;
            showQuestion();
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('question').textContent = 'Error loading questions.';
        });
}

function showQuestion() {
    if (questions.length === 0) return;

    const q = questions[currentIndex];
    const qNum = q.number || currentIndex + 1;

    // Update progress
    document.getElementById('current').textContent = currentIndex + 1;
    const percent = ((currentIndex + 1) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = percent + '%';

    // Show question
    document.getElementById('question').textContent = q.text;

    // Show options
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    for (let [letter, text] of Object.entries(q.options)) {
        const option = document.createElement('div');
        option.className = 'option';
        option.innerHTML = `<span class="option-letter">${letter}</span>${text}`;
        option.onclick = () => selectOption(letter);

        if (userAnswers[qNum] === letter) {
            option.classList.add('selected');
        }

        option.dataset.option = letter;
        optionsDiv.appendChild(option);
    }

    // Update flag button
    const flagBtn = document.getElementById('flag-btn');
    if (flaggedQuestions.has(qNum)) {
        flagBtn.classList.add('flagged');
        flagBtn.textContent = '🚩 Flagged';
    } else {
        flagBtn.classList.remove('flagged');
        flagBtn.textContent = '🚩 Flag';
    }

    // Load note
    document.getElementById('notes').value = notes[qNum] || '';

    // Hide explanation
    document.getElementById('explanation').style.display = 'none';

    // Update stats
    updateStats();

    // Navigation buttons
    document.getElementById('prev-btn').disabled = currentIndex === 0;
    document.getElementById('next-btn').textContent = 
        currentIndex === questions.length - 1 ? 'Finish' : 'Next →';
}

function selectOption(letter) {
    const q = questions[currentIndex];
    const qNum = q.number || currentIndex + 1;

    // Clear selection
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });

    // Select option
    const selected = document.querySelector(`[data-option="${letter}"]`);
    if (selected) {
        selected.classList.add('selected');
        userAnswers[qNum] = letter;
        saveProgress();
    }
}

function checkAnswer() {
    const q = questions[currentIndex];
    const qNum = q.number || currentIndex + 1;
    const userAnswer = userAnswers[qNum];

    if (!userAnswer) {
        alert('Please select an answer first.');
        return;
    }

    const isCorrect = userAnswer === q.correct;

    // Show correct/incorrect
    document.querySelectorAll('.option').forEach((opt, i) => {
        const letter = Object.keys(q.options)[i];
        if (letter === q.correct) {
            opt.classList.add('correct');
        } else if (letter === userAnswer && !isCorrect) {
            opt.classList.add('incorrect');
        }
        opt.onclick = null;
    });

    // Show explanation
    const expDiv = document.getElementById('explanation');
    expDiv.innerHTML = `
        <div class="result ${isCorrect ? 'correct' : 'incorrect'}">
            ${isCorrect ? '✓ Correct!' : '✗ Incorrect'}
        </div>
        ${!isCorrect ? `<p><strong>Correct answer:</strong> ${q.correct} - ${q.options[q.correct]}</p>` : ''}
        <p>${q.explanation}</p>
    `;
    expDiv.style.display = 'block';
}

function toggleFlag() {
    const q = questions[currentIndex];
    const qNum = q.number || currentIndex + 1;

    if (flaggedQuestions.has(qNum)) {
        flaggedQuestions.delete(qNum);
    } else {
        flaggedQuestions.add(qNum);
    }

    saveProgress();
    showQuestion();
}

function saveNote() {
    const q = questions[currentIndex];
    const qNum = q.number || currentIndex + 1;
    const noteText = document.getElementById('notes').value;

    if (noteText.trim()) {
        notes[qNum] = noteText;
    } else {
        delete notes[qNum];
    }

    saveProgress();
    alert('Note saved!');
}

function previousQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        showQuestion();
    }
}

function nextQuestion() {
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        showQuestion();
    } else {
        if (confirm('You have reached the end. Review from the beginning?')) {
            currentIndex = 0;
            showQuestion();
        }
    }
}

function updateStats() {
    document.getElementById('answered-count').textContent = Object.keys(userAnswers).length;
    document.getElementById('flagged-count').textContent = flaggedQuestions.size;
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') previousQuestion();
    if (e.key === 'ArrowRight') nextQuestion();
    if (e.key >= '1' && e.key <= '4' && questions.length > 0) {
        const options = Object.keys(questions[currentIndex].options);
        const index = parseInt(e.key) - 1;
        if (index < options.length) {
            selectOption(options[index]);
        }
    }
});
