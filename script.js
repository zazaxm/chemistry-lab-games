// Game Data and Configuration
const GAME_DATA = {
    'medical-phlebotomy': {
        title: 'Medical & Phlebotomy',
        questions: [
            {
                question: "Why should patients fast before certain blood tests (e.g., glucose, lipid profile)?",
                options: ["To make veins easier to find", "To get accurate baseline results without food interference", "To save time in the lab"],
                correct: 1,
                explanation: "Fasting ensures accurate baseline measurements by eliminating the effects of recent food intake, which can significantly alter glucose and lipid levels."
            },
            {
                question: "What is the purpose of a Quality Control (QC) sample in the lab?",
                options: ["To test new equipment", "To verify that test results are accurate and reliable", "To save money on reagents"],
                correct: 1,
                explanation: "QC samples are used to verify that laboratory equipment and procedures are working correctly, ensuring accurate and reliable test results."
            },
            {
                question: "What does a hemolyzed sample mean, and why is it a problem?",
                options: ["Red blood cells are intact - no problem", "Red blood cells are broken, releasing contents that can affect test results", "The sample is too old"],
                correct: 1,
                explanation: "Hemolysis occurs when red blood cells break down, releasing their contents into the serum/plasma, which can falsely elevate certain test results like potassium and LDH."
            },
            {
                question: "What is the importance of crossmatching before blood transfusion?",
                options: ["To save time", "To ensure blood compatibility and prevent transfusion reactions", "To reduce costs"],
                correct: 1,
                explanation: "Crossmatching tests donor blood against recipient blood to ensure compatibility, preventing potentially fatal transfusion reactions."
            },
            {
                question: "Why should some blood samples be kept cold or protected from light?",
                options: ["To prevent bacterial growth", "To preserve labile substances that degrade with heat or light", "To make them last longer"],
                correct: 1,
                explanation: "Certain substances like bilirubin, vitamins, and some hormones are labile and can degrade when exposed to heat or light, affecting test accuracy."
            },
            {
                question: "What is the difference between serum and plasma?",
                options: ["No difference", "Serum is blood without clotting factors, plasma contains clotting factors", "Plasma is thicker than serum"],
                correct: 1,
                explanation: "Serum is the liquid portion of blood after clotting (no fibrinogen), while plasma is the liquid portion of blood with anticoagulant (contains fibrinogen and clotting factors)."
            },
            {
                question: "Why is it important to label blood samples immediately after collection?",
                options: ["To save time", "To prevent sample mix-up and ensure patient safety", "To make them look professional"],
                correct: 1,
                explanation: "Immediate labeling prevents sample mix-up, ensures correct patient identification, and maintains the integrity of the testing process for patient safety."
            },
            {
                question: "What are the risks of using the wrong tube for blood collection?",
                options: ["No risks", "Inaccurate test results due to wrong additives or anticoagulants", "Just takes longer to process"],
                correct: 1,
                explanation: "Using wrong tubes can cause inaccurate results due to inappropriate additives, anticoagulants, or tube materials that interfere with specific tests."
            },
            {
                question: "Why does the laboratory need to collect blood in different tubes?",
                options: ["For organization", "Different tests require different additives, anticoagulants, or tube materials", "To use more tubes"],
                correct: 1,
                explanation: "Different tests require specific tube types with appropriate additives (EDTA, heparin, citrate) or no additives (serum tubes) to ensure accurate results."
            },
            {
                question: "True or False: Healthy people do not need to do blood tests unless they feel sick.",
                options: ["True", "False"],
                correct: 1,
                explanation: "False. Regular blood tests are important for preventive care, early disease detection, and monitoring health status even in apparently healthy individuals."
            },
            {
                question: "True or False: Blood donation decreases your hemoglobin.",
                options: ["True", "False"],
                correct: 0,
                explanation: "True. Blood donation temporarily decreases hemoglobin levels as you lose red blood cells, but levels typically return to normal within 4-8 weeks."
            },
            {
                question: "When was King Faisal Specialist Hospital established?",
                options: ["1975", "1980", "1985"],
                correct: 0,
                explanation: "King Faisal Specialist Hospital and Research Centre was established in 1975 in Riyadh, Saudi Arabia, as a leading medical institution."
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

        // For medical-phlebotomy, select 6 random questions
        if (gameType === 'medical-phlebotomy') {
            this.selectedQuestions = getRandomQuestions(GAME_DATA[gameType].questions, 6);
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
