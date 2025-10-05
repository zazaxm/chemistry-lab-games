// Game Data and Configuration
const GAME_DATA = {
    'medical-phlebotomy': {
        title: 'Medical & Phlebotomy',
        questions: [
            // 🩸 Glucose Tests
            {
                question: "What is a blood glucose test used for?",
                options: ["To measure blood pressure", "To measure sugar levels in the blood", "To check cholesterol levels"],
                correct: 1,
                explanation: "A blood glucose test measures the amount of sugar (glucose) in your blood, which is essential for diagnosing diabetes and monitoring blood sugar levels."
            },
            {
                question: "What is the normal fasting blood glucose range?",
                options: ["70-100 mg/dL", "100-150 mg/dL", "150-200 mg/dL"],
                correct: 0,
                explanation: "Normal fasting blood glucose is 70-100 mg/dL. Values above 126 mg/dL may indicate diabetes."
            },
            {
                question: "When should a patient fast before a glucose test?",
                options: ["2 hours", "8-12 hours", "24 hours"],
                correct: 1,
                explanation: "Patients should fast for 8-12 hours before a fasting glucose test to get accurate results."
            },
            
            // 🧪 Cortisol Test
            {
                question: "What is a cortisol test used for?",
                options: ["To check blood sugar", "To measure stress hormone levels", "To test kidney function"],
                correct: 1,
                explanation: "A cortisol test measures the level of cortisol, a stress hormone, which can help diagnose adrenal gland disorders."
            },
            {
                question: "When is the best time to collect a cortisol blood sample?",
                options: ["Evening", "Morning (8 AM)", "Afternoon"],
                correct: 1,
                explanation: "Cortisol levels are highest in the morning (around 8 AM), so this is the best time to collect the sample."
            },
            
            // 🚽 24-Hour Urine Collection
            {
                question: "When should a 24-hour urine collection start?",
                options: ["First thing in the morning", "After lunch", "At any time"],
                correct: 0,
                explanation: "24-hour urine collection should start with the first morning void, then collect all urine for the next 24 hours."
            },
            {
                question: "What should be done with the first urine sample in 24-hour collection?",
                options: ["Discard it", "Keep it in the container", "Send it separately"],
                correct: 0,
                explanation: "The first morning void should be discarded, then start collecting all subsequent urine for 24 hours."
            },
            
            // 🌞 Vitamin D Test
            {
                question: "What is vitamin D deficiency associated with?",
                options: ["High blood pressure", "Bone problems and weak immune system", "Diabetes"],
                correct: 1,
                explanation: "Vitamin D deficiency can lead to bone problems, weak immune system, and increased risk of infections."
            },
            {
                question: "What is the normal vitamin D level?",
                options: ["Below 20 ng/mL", "20-50 ng/mL", "Above 100 ng/mL"],
                correct: 1,
                explanation: "Normal vitamin D levels are 20-50 ng/mL. Below 20 ng/mL indicates deficiency."
            },
            
            // 👨‍⚕️ Patient Preparation
            {
                question: "What is the most important step before drawing blood?",
                options: ["Check patient ID", "Wash hands", "Prepare tubes"],
                correct: 0,
                explanation: "Patient identification is the most critical step to ensure the right test is performed on the right patient."
            },
            {
                question: "What information should be verified before blood collection?",
                options: ["Patient's address", "Patient's name and date of birth", "Insurance information"],
                correct: 1,
                explanation: "Name and date of birth are the two most critical identifiers to ensure the correct patient receives the correct test."
            },
            
            // 🩸 Blood Collection Procedures
            {
                question: "What should you do if a patient faints during blood draw?",
                options: ["Continue drawing", "Remove needle immediately and lay patient flat", "Ask them to stand up"],
                correct: 1,
                explanation: "If a patient faints, immediately remove the needle, lay them flat, and ensure their safety."
            },
            {
                question: "What is the correct order of draw for blood collection?",
                options: ["Red, Blue, Green, Purple", "Blue, Red, Green, Purple", "Purple, Blue, Red, Green"],
                correct: 1,
                explanation: "The correct order is: Blue (coagulation), Red (serum), Green (heparin), Purple (EDTA) to prevent cross-contamination."
            },
            {
                question: "What should be done if blood flow stops during collection?",
                options: ["Wiggle needle aggressively", "Gently reposition the needle", "Push plunger harder"],
                correct: 1,
                explanation: "If blood flow stops, gently reposition the needle to restore flow without causing patient discomfort."
            },
            {
                question: "How should blood collection tubes be filled?",
                options: ["Only half-way", "As little as possible", "To the correct fill line"],
                correct: 2,
                explanation: "Tubes must be filled to the correct line to maintain the proper blood-to-additive ratio for accurate results."
            },
            
            // 🧴 Sample Handling
            {
                question: "What should be done if blood spills during collection?",
                options: ["Ignore it and finish", "Clean it up immediately with disinfectant", "Use bare hand to wipe"],
                correct: 1,
                explanation: "Blood spills must be cleaned immediately with appropriate disinfectant to prevent contamination and infection risk."
            },
            {
                question: "Where must the patient label be placed?",
                options: ["On the transport box", "Directly onto the sample tube", "On your clipboard"],
                correct: 1,
                explanation: "Patient labels must be placed directly on the sample tube to ensure proper identification throughout the testing process."
            },
            
            // 🚫 Fasting Requirements
            {
                question: "If a patient is told to fast for 12 hours, what can they only drink?",
                options: ["Orange juice", "Black coffee", "Plain water"],
                correct: 2,
                explanation: "During fasting, patients can only drink plain water as other beverages can affect test results."
            },
            {
                question: "What is fasting mainly required for?",
                options: ["To make veins easier to find", "To get accurate glucose and lipid results", "To save time"],
                correct: 1,
                explanation: "Fasting ensures accurate glucose and lipid measurements by eliminating the effects of recent food intake."
            }
        ]
    },
    'lab-processing': {
        title: 'Medical Lab Staff (Lab Processing)',
        questions: [
            {
                question: "What's the best way to gently mix a blood sample tube with an anticoagulant additive?",
                options: ["Shake it hard", "Gently mix", "Leave it still"],
                correct: 1,
                explanation: "Gently mixing the tube ensures proper mixing of the anticoagulant without causing hemolysis or damage to blood cells."
            },
            {
                question: "If a sample is accidentally collected in the wrong type of tube, what should the lab staff member do?",
                options: ["Run the test anyway", "Reject the sample and request a redraw", "Write a note on the label"],
                correct: 1,
                explanation: "Using the wrong tube type can affect test results, so the sample must be rejected and a new one collected."
            }
        ]
    },
    'physicians-nurses': {
        title: 'Physicians and Nurses (Collection & Patient Prep)',
        questions: [
            {
                question: "To confirm a patient's identity before blood draw, what is the most important information to check?",
                options: ["Their address", "Their name and date of birth", "Their insurance ID"],
                correct: 1,
                explanation: "Name and date of birth are the two most critical identifiers to ensure the correct patient receives the correct test."
            },
            {
                question: "What is 'Fasting' mainly required for?",
                options: ["To make veins easier to find", "To get accurate glucose (sugar) and lipid (fat) results", "To save time"],
                correct: 1,
                explanation: "Fasting ensures accurate glucose and lipid measurements by eliminating the effects of recent food intake."
            }
        ]
    },
    'transport-safety': {
        title: 'Non-Medical (Transport & General Safety)',
        questions: [
            {
                question: "Why must sample tubes be placed in a leak-proof bag before transport?",
                options: ["To keep them tidy", "To prevent leaks and spills from touching people", "To keep them warm"],
                correct: 1,
                explanation: "Leak-proof bags prevent blood exposure and contamination during transport, protecting both handlers and the public."
            },
            {
                question: "What is the most common and safest way to transport lab samples?",
                options: ["In your pants pocket", "In a sturdy container or cooler box", "Tied to the back of a bike"],
                correct: 1,
                explanation: "Sturdy containers or cooler boxes provide proper protection and temperature control for sample integrity."
            }
        ]
    }
};

// Utility function to get random questions
function getRandomQuestions(questions, count) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Game State Management
class GameManager {
    constructor() {
        this.currentPlayer = null;
        this.currentGame = null;
        this.currentQuestion = 0;
        this.score = 0;
        this.startTime = null;
        this.selectedQuestions = null;
        this.leaderboards = {};
        this.init();
    }

    init() {
        this.loadLeaderboards();
        this.setupEventListeners();
        this.updateBestScores();
    }

    setupEventListeners() {
        // Player registration
        document.getElementById('registerBtn').addEventListener('click', () => this.registerPlayer());
        document.getElementById('playerName').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.registerPlayer();
        });

        // Game selection
        document.querySelectorAll('.game-card').forEach(card => {
            card.addEventListener('click', () => this.startGame(card.dataset.game));
        });

        // Game controls
        document.getElementById('backToMenu').addEventListener('click', () => this.backToMenu());
        document.getElementById('nextQuestion').addEventListener('click', () => this.nextQuestion());
        document.getElementById('finishGame').addEventListener('click', () => this.finishGame());

        // Admin panel
        document.getElementById('adminBtn').addEventListener('click', () => this.showAdminPanel());
        document.getElementById('closeAdmin').addEventListener('click', () => this.hideAdminPanel());
        document.getElementById('clearData').addEventListener('click', () => this.clearAllData());

        // Logout
        document.getElementById('logoutBtn').addEventListener('click', () => this.logout());
    }

    loadLeaderboards() {
        Object.keys(GAME_DATA).forEach(gameType => {
            const data = localStorage.getItem(`leaderboard_${gameType}`);
            this.leaderboards[gameType] = data ? JSON.parse(data) : [];
        });
    }

    registerPlayer() {
        const name = document.getElementById('playerName').value.trim();
        if (!name) {
            alert('Please enter your name');
            return;
        }

        this.currentPlayer = name;
        document.getElementById('playerModal').style.display = 'none';
        document.getElementById('playerInfo').style.display = 'flex';
        document.getElementById('playerName').textContent = name;
        
        this.updateBestScores();
    }

    startGame(gameType) {
        if (!this.currentPlayer) {
            document.getElementById('playerModal').style.display = 'flex';
            return;
        }

        this.currentGame = gameType;
        this.currentQuestion = 0;
        this.score = 0;
        this.startTime = Date.now();
        this.selectedQuestions = null;

        // For medical-phlebotomy, select 5 random questions
        if (gameType === 'medical-phlebotomy') {
            this.selectedQuestions = getRandomQuestions(GAME_DATA[gameType].questions, 5);
        }

        document.getElementById('mainMenu').style.display = 'none';
        document.getElementById('gameScreen').style.display = 'block';
        
        this.showQuestion();
    }

    showQuestion() {
        const gameData = GAME_DATA[this.currentGame];
        const questions = this.selectedQuestions || gameData.questions;
        const question = questions[this.currentQuestion];
        const totalQuestions = questions.length;

        document.getElementById('gameTitle').textContent = gameData.title;
        document.getElementById('questionNumber').textContent = `${this.currentQuestion + 1} / ${totalQuestions}`;
        document.getElementById('questionText').textContent = question.question;

        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option;
            button.onclick = () => this.selectAnswer(index);
            optionsContainer.appendChild(button);
        });

        // Update progress bar
        const progress = ((this.currentQuestion + 1) / totalQuestions) * 100;
        document.getElementById('progressBar').style.width = `${progress}%`;
    }

    selectAnswer(selectedIndex) {
        const gameData = GAME_DATA[this.currentGame];
        const questions = this.selectedQuestions || gameData.questions;
        const question = questions[this.currentQuestion];
        const totalQuestions = questions.length;

        if (selectedIndex === question.correct) {
            this.score++;
            this.showFeedback('Correct!', 'success');
        } else {
            this.showFeedback('Incorrect!', 'error');
        }

        // Show explanation
        setTimeout(() => {
            this.showExplanation(question.explanation);
        }, 1000);
    }

    showExplanation(explanation) {
        const explanationDiv = document.getElementById('explanation');
        explanationDiv.innerHTML = `
            <div class="explanation-content">
                <h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p>${explanation}</p>
            </div>
        `;
        explanationDiv.style.display = 'block';

        const nextBtn = document.getElementById('nextQuestion');
        nextBtn.textContent = this.currentQuestion + 1 < (this.selectedQuestions || GAME_DATA[this.currentGame].questions).length ? 'Next Question' : 'Finish Game';
        nextBtn.style.display = 'block';
    }

    nextQuestion() {
        const questions = this.selectedQuestions || GAME_DATA[this.currentGame].questions;
        
        if (this.currentQuestion + 1 < questions.length) {
            this.currentQuestion++;
            document.getElementById('explanation').style.display = 'none';
            document.getElementById('nextQuestion').style.display = 'none';
            this.showQuestion();
        } else {
            this.finishGame();
        }
    }

    finishGame() {
        const endTime = Date.now();
        const totalTime = endTime - this.startTime;
        const questions = this.selectedQuestions || GAME_DATA[this.currentGame].questions;
        const accuracy = Math.round((this.score / questions.length) * 100);

        // Save score to Firebase and localStorage
        this.saveScore(this.currentGame, this.score, totalTime, accuracy);

        // Show results
        document.getElementById('gameScreen').style.display = 'none';
        document.getElementById('resultsScreen').style.display = 'block';
        
        document.getElementById('finalScore').textContent = this.score;
        document.getElementById('totalQuestions').textContent = questions.length;
        document.getElementById('accuracy').textContent = `${accuracy}%`;
        document.getElementById('timeTaken').textContent = this.formatTime(totalTime);
        
        this.updateBestScores();
    }

    async saveScore(gameType, score, time, accuracy) {
        const scoreData = {
            player: this.currentPlayer,
            score: score,
            time: time,
            accuracy: accuracy,
            date: new Date().toISOString()
        };

        // Save to localStorage
        this.leaderboards[gameType].push(scoreData);
        this.leaderboards[gameType].sort((a, b) => b.score - a.score);
        this.leaderboards[gameType] = this.leaderboards[gameType].slice(0, 50);
        localStorage.setItem(`leaderboard_${gameType}`, JSON.stringify(this.leaderboards[gameType]));

        // Save to Firebase if available
        if (typeof db !== 'undefined') {
            try {
                await db.collection('scores').add({
                    gameType: gameType,
                    player: this.currentPlayer,
                    score: score,
                    time: time,
                    accuracy: accuracy,
                    date: new Date().toISOString()
                });
                console.log('Score saved to Firebase');
            } catch (error) {
                console.log('Firebase not available, using localStorage only');
            }
        }
    }

    updateBestScores() {
        Object.keys(GAME_DATA).forEach(gameType => {
            const leaderboard = this.leaderboards[gameType] || [];
            
            if (this.currentPlayer) {
                const playerScores = leaderboard.filter(entry => entry.player === this.currentPlayer);
                
                if (playerScores.length > 0) {
                    const bestScore = playerScores[0];
                    const minutes = Math.floor(bestScore.time / 60000);
                    const seconds = Math.floor((bestScore.time % 60000) / 1000);
                    const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                    
                    // Map game types to their element IDs
                    const elementIdMap = {
                        'medical-phlebotomy': 'medicalPhlebotomy',
                        'lab-processing': 'labProcessing',
                        'physicians-nurses': 'physiciansNurses',
                        'transport-safety': 'transportSafety'
                    };
                    
                    const elementId = elementIdMap[gameType] || gameType;
                    const bestElement = document.getElementById(`${elementId}Best`);
                    const timeElement = document.getElementById(`${elementId}Time`);
                    
                    if (bestElement) bestElement.textContent = bestScore.score;
                    if (timeElement) timeElement.textContent = timeString;
                }
            }
        });
    }

    showFeedback(message, type) {
        const feedback = document.getElementById('feedback');
        feedback.textContent = message;
        feedback.className = `feedback ${type}`;
        feedback.style.display = 'block';
        
        setTimeout(() => {
            feedback.style.display = 'none';
        }, 2000);
    }

    formatTime(time) {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    backToMenu() {
        document.getElementById('gameScreen').style.display = 'none';
        document.getElementById('resultsScreen').style.display = 'none';
        document.getElementById('mainMenu').style.display = 'block';
    }

    logout() {
        this.currentPlayer = null;
        document.getElementById('playerInfo').style.display = 'none';
        document.getElementById('mainMenu').style.display = 'block';
        document.getElementById('gameScreen').style.display = 'none';
        document.getElementById('resultsScreen').style.display = 'none';
    }

    showAdminPanel() {
        document.getElementById('adminModal').style.display = 'flex';
    }

    hideAdminPanel() {
        document.getElementById('adminModal').style.display = 'none';
    }

    clearAllData() {
        if (confirm('Are you sure you want to clear all data? This cannot be undone.')) {
            Object.keys(GAME_DATA).forEach(gameType => {
                localStorage.removeItem(`leaderboard_${gameType}`);
            });
            this.loadLeaderboards();
            this.updateBestScores();
            alert('All data has been cleared!');
        }
    }
}

// Initialize the game
const gameManager = new GameManager();
