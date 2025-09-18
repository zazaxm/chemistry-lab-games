// Game Data and Configuration
const GAME_DATA = {
    'sample-matching': {
        title: 'Sample & Test Matching',
        questions: [
            {
                type: 'drag-drop',
                question: 'Drag the test tubes to their corresponding organs',
                dragItems: [
                    { id: 'alt', name: 'ALT Test' },
                    { id: 'ast', name: 'AST Test' },
                    { id: 'bilirubin', name: 'Bilirubin Test' }
                ],
                dropZones: [
                    { id: 'liver', name: 'Liver', icon: 'fas fa-heart' },
                    { id: 'heart', name: 'Heart', icon: 'fas fa-heart' },
                    { id: 'pancreas', name: 'Pancreas', icon: 'fas fa-heart' }
                ],
                correctMatches: {
                    'liver': ['alt', 'ast', 'bilirubin']
                }
            },
            {
                question: "Which sample is usually used for Glucose test?",
                options: ["Serum", "Whole blood", "Urine", "Plasma"],
                correct: 0,
                explanation: "Because glucose is measured in the liquid part of the blood after clotting."
            },
            {
                question: "Which sample is required for HbA1c test?",
                options: ["Serum", "Whole blood", "Urine", "Plasma"],
                correct: 1,
                explanation: "Because HbA1c measures glucose bound to red blood cells."
            },
            {
                question: "Which sample is used for Creatinine?",
                options: ["Serum only", "Urine only", "Serum or Urine", "Plasma only"],
                correct: 2,
                explanation: "Because creatinine reflects kidney filtration measured in blood or urine."
            },
            {
                question: "Which sample is used for Liver enzymes (ALT/AST)?",
                options: ["Serum", "Whole blood", "Urine", "Plasma"],
                correct: 0,
                explanation: "Because liver enzymes are released into the bloodstream."
            },
            {
                question: "Which sample is used for Cholesterol test?",
                options: ["Serum", "Whole blood", "Urine", "Plasma"],
                correct: 0,
                explanation: "Because cholesterol is measured in the lipid fraction of serum."
            },
            {
                question: "Which sample is used for Bilirubin?",
                options: ["Serum", "Whole blood", "Urine", "Plasma"],
                correct: 0,
                explanation: "Because bilirubin is transported in blood bound to albumin."
            },
            {
                question: "Which sample is used for Total Protein?",
                options: ["Serum only", "Plasma only", "Serum or Plasma", "Whole blood"],
                correct: 2,
                explanation: "Because proteins are present in blood fluid."
            },
            {
                question: "Which sample is used for Urea test?",
                options: ["Serum", "Whole blood", "Urine", "Plasma"],
                correct: 0,
                explanation: "Because urea is a waste product filtered by kidneys into blood."
            },
            {
                question: "Which sample is used for Calcium test?",
                options: ["Serum", "Whole blood", "Urine", "Plasma"],
                correct: 0,
                explanation: "Because calcium circulates in blood bound to proteins or free."
            },
            {
                question: "Which sample is used for Thyroid hormone (TSH)?",
                options: ["Serum", "Whole blood", "Urine", "Plasma"],
                correct: 0,
                explanation: "Because TSH is a hormone secreted into the bloodstream."
            }
        ]
    },
    'correct-range': {
        title: 'Correct Range',
        questions: [
            {
                question: "Glucose = 250 mg/dl. Normal / High / Low?",
                options: ["Normal", "High", "Low"],
                correct: 1,
                explanation: "Normal is ~70-110 mg/dl; 250 indicates hyperglycemia."
            },
            {
                question: "Creatinine = 0.8 mg/dl. Normal / High / Low?",
                options: ["Normal", "High", "Low"],
                correct: 0,
                explanation: "Normal range ~0.6-1.2 mg/dl."
            },
            {
                question: "Cholesterol = 300 mg/dl. Normal / High / Low?",
                options: ["Normal", "High", "Low"],
                correct: 1,
                explanation: "Normal is <200 mg/dl; 300 indicates hypercholesterolemia."
            },
            {
                question: "ALT = 60 U/L. Normal / High / Low?",
                options: ["Normal", "High", "Low"],
                correct: 1,
                explanation: "Normal is <40 U/L; elevated indicates liver injury."
            },
            {
                question: "Calcium = 6 mg/dl. Normal / High / Low?",
                options: ["Normal", "High", "Low"],
                correct: 2,
                explanation: "Normal is ~8.5-10.5 mg/dl; low indicates hypocalcemia."
            },
            {
                question: "HbA1c = 4.5%. Normal / High / Low?",
                options: ["Normal", "High", "Low"],
                correct: 0,
                explanation: "Normal is 4–5.6%; diabetic is >6.5%."
            },
            {
                question: "Urea = 55 mg/dl. Normal / High / Low?",
                options: ["Normal", "High", "Low"],
                correct: 1,
                explanation: "Normal is ~15-45 mg/dl; 55 suggests kidney dysfunction."
            },
            {
                question: "Glucose = 50 mg/dl. Normal / High / Low?",
                options: ["Normal", "High", "Low"],
                correct: 2,
                explanation: "Normal is ~70-110 mg/dl; 50 indicates hypoglycemia."
            },
            {
                question: "Triglycerides = 120 mg/dl. Normal / High / Low?",
                options: ["Normal", "High", "Low"],
                correct: 0,
                explanation: "Normal is <150 mg/dl."
            },
            {
                question: "Potassium = 6.5 mmol/L. Normal / High / Low?",
                options: ["Normal", "High", "Low"],
                correct: 1,
                explanation: "Normal is 3.5–5.0 mmol/L; 6.5 indicates hyperkalemia."
            }
        ]
    },
    'quick-quiz': {
        title: 'Quick Quiz',
        questions: [
            {
                question: "Which organ is measured by ALT enzyme?",
                options: ["Liver", "Kidney", "Heart", "Pancreas"],
                correct: 0,
                explanation: "Because ALT is specific to liver cell damage."
            },
            {
                question: "Which test is used for diabetic patient follow-up?",
                options: ["Glucose", "HbA1c", "Insulin", "C-peptide"],
                correct: 1,
                explanation: "Because it reflects average glucose over 3 months."
            },
            {
                question: "Which test evaluates kidney function?",
                options: ["ALT", "Creatinine, Urea", "Glucose", "Cholesterol"],
                correct: 1,
                explanation: "Because kidneys filter both from blood."
            },
            {
                question: "Which test monitors blood lipids?",
                options: ["Glucose", "Lipid profile", "Creatinine", "ALT"],
                correct: 1,
                explanation: "Because it includes cholesterol and triglycerides."
            },
            {
                question: "Which mineral is measured for osteoporosis?",
                options: ["Iron", "Calcium", "Sodium", "Potassium"],
                correct: 1,
                explanation: "Because calcium is essential for bone strength."
            },
            {
                question: "Which hormone is measured for hypothyroidism?",
                options: ["Insulin", "TSH", "Cortisol", "Testosterone"],
                correct: 1,
                explanation: "Because high TSH indicates low thyroid activity."
            },
            {
                question: "Which enzyme increases in pancreatitis?",
                options: ["ALT", "Amylase, Lipase", "AST", "ALP"],
                correct: 1,
                explanation: "Because pancreas releases these enzymes when inflamed."
            },
            {
                question: "Which test evaluates liver function?",
                options: ["Creatinine", "LFT (Liver Function Tests)", "Glucose", "Cholesterol"],
                correct: 1,
                explanation: "Because it measures enzymes, proteins, and bilirubin."
            },
            {
                question: "Which test diagnoses anemia?",
                options: ["Glucose", "Hemoglobin", "Creatinine", "ALT"],
                correct: 1,
                explanation: "Because hemoglobin measures oxygen-carrying capacity of blood."
            },
            {
                question: "Which test checks body response to glucose over 2 hours?",
                options: ["Glucose", "HbA1c", "OGTT", "Insulin"],
                correct: 2,
                explanation: "Because it monitors how body metabolizes glucose."
            }
        ]
    },
    'guess-test': {
        title: 'Guess the Test',
        questions: [
            {
                question: "A patient with excessive thirst and weight loss. Which test?",
                options: ["Glucose", "Cholesterol", "Creatinine", "ALT"],
                correct: 0,
                explanation: "Because high glucose causes diabetes symptoms."
            },
            {
                question: "A patient with yellow eyes. Which test?",
                options: ["Glucose", "Bilirubin", "Creatinine", "ALT"],
                correct: 1,
                explanation: "Because jaundice is caused by bilirubin buildup."
            },
            {
                question: "A patient with leg swelling. Which test?",
                options: ["Glucose", "Albumin", "Creatinine", "ALT"],
                correct: 1,
                explanation: "Because low albumin causes fluid retention."
            },
            {
                question: "A patient with fatigue and hair loss. Which test?",
                options: ["Glucose", "TSH", "Creatinine", "ALT"],
                correct: 1,
                explanation: "Because thyroid imbalance affects energy and hair."
            },
            {
                question: "A patient with chest pain and family history of heart disease. Which test?",
                options: ["Glucose", "Cholesterol, Lipid profile", "Creatinine", "ALT"],
                correct: 1,
                explanation: "Because high lipids increase heart risk."
            },
            {
                question: "A patient with nausea after fatty meals. Which test?",
                options: ["Glucose", "Amylase, Lipase", "Creatinine", "ALT"],
                correct: 1,
                explanation: "Because pancreas enzymes are elevated in pancreatitis."
            },
            {
                question: "A patient with chronic kidney disease. Which tests?",
                options: ["Glucose", "Creatinine, Urea, Electrolytes", "ALT", "Cholesterol"],
                correct: 1,
                explanation: "Because they show kidney filtering capacity."
            },
            {
                question: "A child with poor growth. Which test?",
                options: ["Glucose", "Growth hormone or Vitamin D", "Creatinine", "ALT"],
                correct: 1,
                explanation: "Because both affect bone and body development."
            },
            {
                question: "A patient with loss of appetite and jaundice. Which test?",
                options: ["Glucose", "LFTs", "Creatinine", "Cholesterol"],
                correct: 1,
                explanation: "Because they show liver damage."
            },
            {
                question: "A patient with muscle cramps. Which tests?",
                options: ["Glucose", "Calcium, Magnesium, Potassium", "Creatinine", "ALT"],
                correct: 1,
                explanation: "Because electrolytes control muscle contraction."
            }
        ]
    },
    'medical-puzzle': {
        title: 'Medical Puzzle',
        questions: [
            {
                type: 'organ-test-matching',
                question: 'Match the organ with its primary laboratory test',
                organ: {
                    name: 'Liver',
                    image: '🫀',
                    description: 'This organ processes nutrients and filters toxins'
                },
                testOptions: [
                    { id: 'alt', name: 'ALT (Alanine Aminotransferase)', correct: true },
                    { id: 'glucose', name: 'Glucose', correct: false },
                    { id: 'creatinine', name: 'Creatinine', correct: false },
                    { id: 'tsh', name: 'TSH (Thyroid Stimulating Hormone)', correct: false }
                ],
                correctAnswer: 'alt',
                explanation: 'ALT is the primary test for liver function as it indicates liver cell damage.'
            },
            {
                type: 'organ-test-matching',
                question: 'Match the organ with its primary laboratory test',
                organ: {
                    name: 'Kidney',
                    image: '🫘',
                    description: 'This organ filters waste from blood and produces urine'
                },
                testOptions: [
                    { id: 'alt', name: 'ALT', correct: false },
                    { id: 'creatinine', name: 'Creatinine', correct: true },
                    { id: 'glucose', name: 'Glucose', correct: false },
                    { id: 'cholesterol', name: 'Cholesterol', correct: false }
                ],
                correctAnswer: 'creatinine',
                explanation: 'Creatinine is the primary test for kidney function as it measures filtration rate.'
            },
            {
                type: 'organ-test-matching',
                question: 'Match the organ with its primary laboratory test',
                organ: {
                    name: 'Pancreas',
                    image: '🫁',
                    description: 'This organ produces insulin and digestive enzymes'
                },
                testOptions: [
                    { id: 'glucose', name: 'Glucose', correct: true },
                    { id: 'alt', name: 'ALT', correct: false },
                    { id: 'creatinine', name: 'Creatinine', correct: false },
                    { id: 'tsh', name: 'TSH', correct: false }
                ],
                correctAnswer: 'glucose',
                explanation: 'Glucose levels indicate pancreatic function, especially insulin production.'
            },
            {
                type: 'organ-test-matching',
                question: 'Match the organ with its primary laboratory test',
                organ: {
                    name: 'Thyroid',
                    image: '🧠',
                    description: 'This organ controls metabolism and energy levels'
                },
                testOptions: [
                    { id: 'tsh', name: 'TSH (Thyroid Stimulating Hormone)', correct: true },
                    { id: 'glucose', name: 'Glucose', correct: false },
                    { id: 'alt', name: 'ALT', correct: false },
                    { id: 'creatinine', name: 'Creatinine', correct: false }
                ],
                correctAnswer: 'tsh',
                explanation: 'TSH is the primary test for thyroid function and hormone regulation.'
            },
            {
                type: 'organ-test-matching',
                question: 'Match the organ with its primary laboratory test',
                organ: {
                    name: 'Heart',
                    image: '❤️',
                    description: 'This organ pumps blood throughout the body'
                },
                testOptions: [
                    { id: 'cholesterol', name: 'Cholesterol', correct: true },
                    { id: 'glucose', name: 'Glucose', correct: false },
                    { id: 'alt', name: 'ALT', correct: false },
                    { id: 'creatinine', name: 'Creatinine', correct: false }
                ],
                correctAnswer: 'cholesterol',
                explanation: 'Cholesterol levels are crucial for heart health and cardiovascular risk assessment.'
            },
            {
                question: "Which organ is tested using ALT and AST?",
                options: ["Liver", "Kidney", "Heart", "Pancreas"],
                correct: 0,
                explanation: "Because both enzymes rise in liver damage."
            },
            {
                question: "Which organ is tested using Creatinine?",
                options: ["Liver", "Kidney", "Heart", "Pancreas"],
                correct: 1,
                explanation: "Because creatinine clearance reflects kidney function."
            },
            {
                question: "Which organ is evaluated using Amylase?",
                options: ["Liver", "Kidney", "Heart", "Pancreas"],
                correct: 3,
                explanation: "Because amylase rises in pancreatic disease."
            },
            {
                question: "Which organ is related to Bilirubin?",
                options: ["Liver", "Kidney", "Heart", "Pancreas"],
                correct: 0,
                explanation: "Because liver processes and excretes bilirubin."
            },
            {
                question: "Which organ is linked with TSH?",
                options: ["Liver", "Thyroid gland", "Heart", "Pancreas"],
                correct: 1,
                explanation: "Because TSH controls thyroid hormone secretion."
            },
            {
                question: "Which organ is assessed with Hemoglobin?",
                options: ["Liver", "Blood", "Heart", "Pancreas"],
                correct: 1,
                explanation: "Because hemoglobin is part of red blood cells."
            },
            {
                question: "Which organ is tested by Cholesterol levels?",
                options: ["Liver", "Heart / Cardiovascular system", "Kidney", "Pancreas"],
                correct: 1,
                explanation: "Because high cholesterol causes heart disease."
            },
            {
                question: "Which organ is tested by Albumin?",
                options: ["Liver", "Liver and Kidney", "Heart", "Pancreas"],
                correct: 1,
                explanation: "Because both regulate protein balance."
            },
            {
                question: "Which organ is related to Calcium?",
                options: ["Liver", "Bones", "Heart", "Pancreas"],
                correct: 1,
                explanation: "Because calcium deficiency weakens bones."
            },
            {
                question: "Which organ is tested by Lipase?",
                options: ["Liver", "Kidney", "Heart", "Pancreas"],
                correct: 3,
                explanation: "Because lipase rises in pancreatitis."
            }
        ]
    },
    'lab-journey': {
        title: 'Lab Journey',
        questions: [
            {
                question: "What is the first step after sample collection?",
                options: ["Analysis", "Labeling and registration", "Centrifugation", "Storage"],
                correct: 1,
                explanation: "Because correct ID prevents mix-ups."
            },
            {
                question: "Which instrument is used to separate plasma or serum?",
                options: ["Microscope", "Centrifuge", "Analyzer", "Incubator"],
                correct: 1,
                explanation: "Because it spins and separates blood components."
            },
            {
                question: "What is used to measure Glucose levels?",
                options: ["Microscope", "Biochemistry Analyzer", "Centrifuge", "Incubator"],
                correct: 1,
                explanation: "Because it uses reagents to detect glucose concentration."
            },
            {
                question: "Which device checks electrolytes?",
                options: ["Microscope", "Electrolyte Analyzer", "Centrifuge", "Incubator"],
                correct: 1,
                explanation: "Because it measures sodium, potassium, and chloride."
            },
            {
                question: "Which step comes after analysis?",
                options: ["Collection", "Result validation", "Storage", "Reporting"],
                correct: 1,
                explanation: "Because results must be checked for accuracy."
            },
            {
                question: "Who reviews the final results before release?",
                options: ["Technician", "Pathologist / Specialist", "Nurse", "Doctor"],
                correct: 1,
                explanation: "Because only experts can confirm medical results."
            },
            {
                question: "What is important to avoid errors in samples?",
                options: ["Speed", "Proper labeling and handling", "Temperature", "Volume"],
                correct: 1,
                explanation: "Because mistakes cause wrong diagnosis."
            },
            {
                question: "What is used to check Hemoglobin?",
                options: ["Microscope", "Hematology Analyzer", "Centrifuge", "Incubator"],
                correct: 1,
                explanation: "Because it counts blood cells and hemoglobin."
            },
            {
                question: "Which department works closely with Biochemistry?",
                options: ["Radiology", "Microbiology, Hematology, Immunology", "Surgery", "Cardiology"],
                correct: 1,
                explanation: "Because lab departments collaborate for diagnosis."
            },
            {
                question: "What is the final step in lab workflow?",
                options: ["Analysis", "Report delivery to doctor/patient", "Storage", "Validation"],
                correct: 1,
                explanation: "Because results must reach healthcare providers."
            }
        ]
    }
};

// Game State Management
class GameManager {
    constructor() {
        this.currentPlayer = null;
        this.currentGame = null;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.startTime = null;
        this.gameStartTime = null;
        this.timeLimit = 180; // 3 minutes in seconds
        this.timeLeft = 180;
        this.timerInterval = null;
        this.countdownInterval = null;
        this.leaderboards = this.loadLeaderboards();
        
        this.initializeEventListeners();
        this.showPlayerModal();
        // Load and display leaderboards immediately
        this.updateLeaderboards();
        this.updateBestScores();
    }

    initializeEventListeners() {
        // Player registration
        document.getElementById('playerForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.registerPlayer();
        });

        // Logout
        document.getElementById('logoutBtn').addEventListener('click', () => {
            this.logout();
        });

        // Game selection - improved for mobile devices
        document.querySelectorAll('.game-card').forEach(card => {
            // Add both click and touch events for better mobile support
            const handleGameSelection = (e) => {
                e.preventDefault();
                e.stopPropagation();
                const gameType = card.dataset.game;
                this.startGame(gameType);
            };
            
            card.addEventListener('click', handleGameSelection);
            card.addEventListener('touchend', handleGameSelection);
        });

        // Back to menu buttons
        document.getElementById('backToMenu').addEventListener('click', () => {
            this.showMainMenu();
        });

        document.getElementById('backToMenuFromGame').addEventListener('click', () => {
            this.showMainMenu();
        });

        // Play again
        document.getElementById('playAgain').addEventListener('click', () => {
            this.startGame(this.currentGame);
        });

        // Leaderboard tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.switchLeaderboardTab(btn.dataset.tab);
            });
        });
    }

    showPlayerModal() {
        document.getElementById('playerModal').style.display = 'flex';
        document.getElementById('mainMenu').style.display = 'none';
        document.getElementById('gameScreen').style.display = 'none';
        document.getElementById('playerInfo').style.display = 'none';
        // Update leaderboards to show data even when not logged in
        this.updateLeaderboards();
        this.updateBestScores();
    }

    registerPlayer() {
        const playerName = document.getElementById('playerNameInput').value.trim();
        if (!playerName) {
            alert('Please enter your name');
            return;
        }

        // Show loading spinner
        const submitBtn = document.getElementById('submitBtn');
        const submitText = document.getElementById('submitText');
        const loadingSpinner = document.getElementById('loadingSpinner');
        
        submitBtn.disabled = true;
        submitText.style.display = 'none';
        loadingSpinner.style.display = 'inline-block';

        // Simulate loading delay
        setTimeout(() => {
            this.currentPlayer = playerName;
            document.getElementById('playerName').textContent = playerName;
            
            document.getElementById('playerModal').style.display = 'none';
            document.getElementById('mainMenu').style.display = 'block';
            document.getElementById('playerInfo').style.display = 'flex';
            
            this.updateLeaderboards();
            this.updateBestScores();
            
            // Reset button state
            submitBtn.disabled = false;
            submitText.style.display = 'inline';
            loadingSpinner.style.display = 'none';
        }, 1500);
    }

    logout() {
        this.currentPlayer = null;
        this.showPlayerModal();
        document.getElementById('playerNameInput').value = '';
        // Update leaderboards to show data even after logout
        this.updateLeaderboards();
        this.updateBestScores();
    }

    showMainMenu() {
        document.getElementById('mainMenu').style.display = 'block';
        document.getElementById('gameScreen').style.display = 'none';
        this.updateLeaderboards();
        this.updateBestScores();
    }

    startGame(gameType) {
        if (!this.currentPlayer) {
            this.showPlayerModal();
            return;
        }

        this.currentGame = gameType;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.gameStartTime = Date.now();
        this.timeLeft = this.timeLimit;

        document.getElementById('mainMenu').style.display = 'none';
        document.getElementById('gameScreen').style.display = 'block';
        document.getElementById('currentGameTitle').textContent = GAME_DATA[gameType].title;
        document.getElementById('currentScore').textContent = '0';
        document.getElementById('currentTime').textContent = '00:00';
        document.getElementById('timeLeft').textContent = '03:00';
        document.getElementById('timeLeft').className = '';
        document.getElementById('resultContainer').style.display = 'none';
        document.getElementById('questionContainer').style.display = 'block';

        this.startTimer();
        this.startCountdown();
        this.showQuestion();
    }

    startTimer() {
        this.startTime = Date.now();
        this.timerInterval = setInterval(() => {
            const elapsed = Date.now() - this.startTime;
            const minutes = Math.floor(elapsed / 60000);
            const seconds = Math.floor((elapsed % 60000) / 1000);
            document.getElementById('currentTime').textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    startCountdown() {
        this.countdownInterval = setInterval(() => {
            this.timeLeft--;
            const minutes = Math.floor(this.timeLeft / 60);
            const seconds = this.timeLeft % 60;
            document.getElementById('timeLeft').textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            // Change color based on time left
            if (this.timeLeft <= 30) {
                document.getElementById('timeLeft').className = 'danger';
            } else if (this.timeLeft <= 60) {
                document.getElementById('timeLeft').className = 'warning';
            }
            
            // End game if time runs out
            if (this.timeLeft <= 0) {
                this.timeUp();
            }
        }, 1000);
    }

    timeUp() {
        clearInterval(this.timerInterval);
        clearInterval(this.countdownInterval);
        this.finishGame();
    }

    getOrganImage(question) {
        // No images for child-friendly version
        return null;
    }

    // Drag and Drop functionality
    initializeDragAndDrop() {
        const dragItems = document.querySelectorAll('.drag-item');
        const dropZones = document.querySelectorAll('.drop-zone');

        dragItems.forEach(item => {
            item.addEventListener('dragstart', this.handleDragStart.bind(this));
            item.addEventListener('dragend', this.handleDragEnd.bind(this));
            
            // Add touch support for mobile devices
            item.addEventListener('touchstart', this.handleTouchStart.bind(this));
            item.addEventListener('touchmove', this.handleTouchMove.bind(this));
            item.addEventListener('touchend', this.handleTouchEnd.bind(this));
        });

        dropZones.forEach(zone => {
            zone.addEventListener('dragover', this.handleDragOver.bind(this));
            zone.addEventListener('drop', this.handleDrop.bind(this));
            zone.addEventListener('dragenter', this.handleDragEnter.bind(this));
            zone.addEventListener('dragleave', this.handleDragLeave.bind(this));
            
            // Add touch support for drop zones
            zone.addEventListener('touchstart', this.handleDropZoneTouchStart.bind(this));
            zone.addEventListener('touchend', this.handleDropZoneTouchEnd.bind(this));
        });
    }

    handleDragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.dataset.test);
        e.target.classList.add('dragging');
    }

    handleDragEnd(e) {
        e.target.classList.remove('dragging');
    }

    handleDragOver(e) {
        e.preventDefault();
    }

    handleDragEnter(e) {
        e.preventDefault();
        e.target.classList.add('drag-over');
    }

    handleDragLeave(e) {
        e.target.classList.remove('drag-over');
    }

    handleDrop(e) {
        e.preventDefault();
        const testType = e.dataTransfer.getData('text/plain');
        const organType = e.target.closest('.drop-zone').dataset.organ;
        
        e.target.classList.remove('drag-over');
        
        // Check if the match is correct
        const isCorrect = this.checkOrganTestMatch(organType, testType);
        
        if (isCorrect) {
            e.target.classList.add('correct');
            this.score++;
            this.showFeedback('Correct!', 'success');
        } else {
            e.target.classList.add('incorrect');
            this.showFeedback('Incorrect!', 'error');
        }
        
        // Move to next question after a delay
        setTimeout(() => {
            this.nextQuestion();
        }, 1500);
    }

    checkOrganTestMatch(organ, test) {
        const correctMatches = {
            'liver': ['alt', 'ast', 'bilirubin'],
            'heart': ['cholesterol', 'lipids'],
            'pancreas': ['amylase', 'lipase'],
            'thyroid': ['tsh'],
            'kidney': ['creatinine', 'urea']
        };
        
        return correctMatches[organ] && correctMatches[organ].includes(test);
    }

    // Touch event handlers for mobile drag and drop
    handleTouchStart(e) {
        e.preventDefault();
        this.touchStartX = e.touches[0].clientX;
        this.touchStartY = e.touches[0].clientY;
        this.touchElement = e.target;
        this.touchElement.classList.add('dragging');
    }

    handleTouchMove(e) {
        e.preventDefault();
        if (!this.touchElement) return;
        
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;
        
        // Move the element with touch
        this.touchElement.style.position = 'fixed';
        this.touchElement.style.left = (touchX - 50) + 'px';
        this.touchElement.style.top = (touchY - 50) + 'px';
        this.touchElement.style.zIndex = '1000';
        this.touchElement.style.pointerEvents = 'none';
    }

    handleTouchEnd(e) {
        e.preventDefault();
        if (!this.touchElement) return;
        
        const touchX = e.changedTouches[0].clientX;
        const touchY = e.changedTouches[0].clientY;
        
        // Find the drop zone under the touch point
        const elementBelow = document.elementFromPoint(touchX, touchY);
        const dropZone = elementBelow ? elementBelow.closest('.drop-zone') : null;
        
        if (dropZone) {
            const testType = this.touchElement.dataset.test;
            const organType = dropZone.dataset.organ;
            
            const isCorrect = this.checkOrganTestMatch(organType, testType);
            
            if (isCorrect) {
                dropZone.classList.add('correct');
                this.score++;
                this.showFeedback('Correct!', 'success');
            } else {
                dropZone.classList.add('incorrect');
                this.showFeedback('Incorrect!', 'error');
            }
            
            // Move to next question after a delay
            setTimeout(() => {
                this.nextQuestion();
            }, 1500);
        }
        
        // Reset element position
        this.touchElement.style.position = '';
        this.touchElement.style.left = '';
        this.touchElement.style.top = '';
        this.touchElement.style.zIndex = '';
        this.touchElement.style.pointerEvents = '';
        this.touchElement.classList.remove('dragging');
        
        this.touchElement = null;
    }

    handleDropZoneTouchStart(e) {
        e.preventDefault();
    }

    handleDropZoneTouchEnd(e) {
        e.preventDefault();
    }

    // Puzzle functionality
    initializePuzzle() {
        this.createPuzzlePieces();
        this.createPuzzleBoard();
    }

    createPuzzlePieces() {
        const puzzlePieces = document.querySelector('.puzzle-pieces');
        const gameData = GAME_DATA[this.currentGame];
        const question = gameData.questions[this.currentQuestionIndex];
        
        // Create puzzle pieces with proper styling
        const pieces = question.puzzlePieces || ['🧩', '🧩', '🧩', '🧩', '🧩', '🧩', '🧩', '🧩', '🧩'];
        
        puzzlePieces.innerHTML = pieces.map((piece, index) => `
            <div class="puzzle-piece" draggable="true" data-piece="${index}">
                <span class="puzzle-emoji">${piece}</span>
            </div>
        `).join('');
        
        // Add event listeners to puzzle pieces
        const puzzlePiecesElements = document.querySelectorAll('.puzzle-piece');
        puzzlePiecesElements.forEach(piece => {
            piece.addEventListener('dragstart', this.handlePuzzleDragStart.bind(this));
            piece.addEventListener('dragend', this.handlePuzzleDragEnd.bind(this));
            
            // Add touch support for puzzle pieces
            piece.addEventListener('touchstart', this.handlePuzzleTouchStart.bind(this));
            piece.addEventListener('touchmove', this.handlePuzzleTouchMove.bind(this));
            piece.addEventListener('touchend', this.handlePuzzleTouchEnd.bind(this));
        });
    }

    createPuzzleBoard() {
        const puzzleBoard = document.querySelector('.puzzle-board');
        const slots = Array(9).fill().map((_, index) => `
            <div class="puzzle-slot" data-slot="${index}"></div>
        `).join('');
        
        puzzleBoard.innerHTML = slots;
        
        // Add event listeners to puzzle slots
        const puzzleSlots = document.querySelectorAll('.puzzle-slot');
        puzzleSlots.forEach(slot => {
            slot.addEventListener('dragover', this.handlePuzzleDragOver.bind(this));
            slot.addEventListener('drop', this.handlePuzzleDrop.bind(this));
            slot.addEventListener('dragenter', this.handlePuzzleDragEnter.bind(this));
            slot.addEventListener('dragleave', this.handlePuzzleDragLeave.bind(this));
        });
    }

    initializePuzzleDragAndDrop() {
        const puzzlePieces = document.querySelectorAll('.puzzle-piece');

        puzzlePieces.forEach(piece => {
            piece.addEventListener('dragstart', this.handlePuzzleDragStart.bind(this));
            piece.addEventListener('dragend', this.handlePuzzleDragEnd.bind(this));
        });
    }

    handlePuzzleDragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.dataset.piece);
        e.target.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
    }

    handlePuzzleDragEnd(e) {
        e.target.classList.remove('dragging');
    }

    handlePuzzleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }

    handlePuzzleDragEnter(e) {
        e.preventDefault();
        // Only add drag-over if the slot is not already filled
        if (!e.target.classList.contains('filled')) {
            e.target.classList.add('drag-over');
        }
    }

    handlePuzzleDragLeave(e) {
        e.target.classList.remove('drag-over');
    }

    handlePuzzleDrop(e) {
        e.preventDefault();
        const pieceIndex = e.dataTransfer.getData('text/plain');
        const slotIndex = e.target.dataset.slot;
        
        e.target.classList.remove('drag-over');
        
        // Don't allow dropping on already filled slots
        if (e.target.classList.contains('filled')) {
            return;
        }
        
        // Get current question data
        const gameData = GAME_DATA[this.currentGame];
        const question = gameData.questions[this.currentQuestionIndex];
        
        // Check if the piece is in the correct position
        const isCorrect = pieceIndex === slotIndex;
        
        if (isCorrect) {
            e.target.classList.add('correct');
            e.target.innerHTML = '🧩';
            e.target.classList.add('filled');
            this.score++;
            this.showFeedback('Correct!', 'success');
            
            // Remove the dragged piece from the pieces area
            const draggedPiece = document.querySelector(`[data-piece="${pieceIndex}"]`);
            if (draggedPiece) {
                draggedPiece.style.display = 'none';
            }
        } else {
            e.target.classList.add('incorrect');
            this.showFeedback('Incorrect!', 'error');
            
            // Reset the slot after a delay
            setTimeout(() => {
                e.target.classList.remove('incorrect');
            }, 1000);
        }
        
        // Check if puzzle is complete
        if (this.isPuzzleComplete()) {
            setTimeout(() => {
                this.showFeedback(`🎉 Puzzle Complete! ${question.organ}: ${question.relatedTest}`, 'success');
                setTimeout(() => {
                    this.nextQuestion();
                }, 3000);
            }, 1500);
        }
    }

    isPuzzleComplete() {
        const filledSlots = document.querySelectorAll('.puzzle-slot.filled');
        const totalSlots = document.querySelectorAll('.puzzle-slot').length;
        return filledSlots.length === totalSlots;
    }

    // Touch event handlers for puzzle
    handlePuzzleTouchStart(e) {
        e.preventDefault();
        this.puzzleTouchStartX = e.touches[0].clientX;
        this.puzzleTouchStartY = e.touches[0].clientY;
        this.puzzleTouchElement = e.target;
        this.puzzleTouchElement.classList.add('dragging');
    }

    handlePuzzleTouchMove(e) {
        e.preventDefault();
        if (!this.puzzleTouchElement) return;
        
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;
        
        // Move the puzzle piece with touch
        this.puzzleTouchElement.style.position = 'fixed';
        this.puzzleTouchElement.style.left = (touchX - 25) + 'px';
        this.puzzleTouchElement.style.top = (touchY - 25) + 'px';
        this.puzzleTouchElement.style.zIndex = '1000';
        this.puzzleTouchElement.style.pointerEvents = 'none';
    }

    handlePuzzleTouchEnd(e) {
        e.preventDefault();
        if (!this.puzzleTouchElement) return;
        
        const touchX = e.changedTouches[0].clientX;
        const touchY = e.changedTouches[0].clientY;
        
        // Find the puzzle slot under the touch point
        const elementBelow = document.elementFromPoint(touchX, touchY);
        const puzzleSlot = elementBelow ? elementBelow.closest('.puzzle-slot') : null;
        
        if (puzzleSlot && !puzzleSlot.classList.contains('filled')) {
            const pieceIndex = this.puzzleTouchElement.dataset.piece;
            const slotIndex = puzzleSlot.dataset.slot;
            
            // Check if the piece is in the correct position
            const isCorrect = pieceIndex === slotIndex;
            
            if (isCorrect) {
                puzzleSlot.classList.add('correct');
                puzzleSlot.innerHTML = '🧩';
                puzzleSlot.classList.add('filled');
                this.score++;
                this.showFeedback('Correct!', 'success');
                
                // Hide the dragged piece
                this.puzzleTouchElement.style.display = 'none';
            } else {
                puzzleSlot.classList.add('incorrect');
                this.showFeedback('Incorrect!', 'error');
                
                // Reset the slot after a delay
                setTimeout(() => {
                    puzzleSlot.classList.remove('incorrect');
                }, 1000);
            }
            
            // Check if puzzle is complete
            if (this.isPuzzleComplete()) {
                const gameData = GAME_DATA[this.currentGame];
                const question = gameData.questions[this.currentQuestionIndex];
                setTimeout(() => {
                    this.showFeedback(`🎉 Puzzle Complete! ${question.organ}: ${question.relatedTest}`, 'success');
                    setTimeout(() => {
                        this.nextQuestion();
                    }, 3000);
                }, 1500);
            }
        }
        
        // Reset puzzle piece position
        this.puzzleTouchElement.style.position = '';
        this.puzzleTouchElement.style.left = '';
        this.puzzleTouchElement.style.top = '';
        this.puzzleTouchElement.style.zIndex = '';
        this.puzzleTouchElement.style.pointerEvents = '';
        this.puzzleTouchElement.classList.remove('dragging');
        
        this.puzzleTouchElement = null;
    }

    showFeedback(message, type) {
        // Remove any existing feedback
        const existingFeedback = document.querySelectorAll('.feedback');
        existingFeedback.forEach(feedback => feedback.remove());
        
        const feedback = document.createElement('div');
        feedback.className = `feedback feedback-${type}`;
        feedback.textContent = message;
        
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.remove();
        }, 2000);
    }

    showQuestion() {
        const gameData = GAME_DATA[this.currentGame];
        const question = gameData.questions[this.currentQuestionIndex];
        
        const progress = ((this.currentQuestionIndex + 1) / gameData.questions.length) * 100;
        
        // Hide all game areas first
        document.getElementById('questionContainer').style.display = 'none';
        document.getElementById('dragDropArea').style.display = 'none';
        document.getElementById('puzzleArea').style.display = 'none';
        
        // Check question type and show appropriate interface
        if (question.type === 'drag-drop') {
            this.showDragDropQuestion(question, progress);
        } else if (question.type === 'puzzle') {
            this.showPuzzleQuestion(question, progress);
        } else if (question.type === 'organ-test-matching') {
            this.showOrganTestMatchingQuestion(question, progress);
        } else {
            this.showMultipleChoiceQuestion(question, progress);
        }
    }

    showMultipleChoiceQuestion(question, progress) {
        document.getElementById('questionContainer').style.display = 'block';
        
        const questionHTML = `
            <div class="question bounce-in">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
                <h3>Question ${this.currentQuestionIndex + 1} of ${GAME_DATA[this.currentGame].questions.length}</h3>
                <div class="question-content">
                    <div class="question-text slide-in-right">${question.question}</div>
                </div>
                <div class="options">
                    ${question.options.map((option, index) => `
                        <div class="option slide-in-right" data-index="${index}" style="animation-delay: ${index * 0.1}s">
                            ${option}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        document.getElementById('questionContainer').innerHTML = questionHTML;

        // Add click listeners to options
        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', () => {
                this.selectAnswer(parseInt(option.dataset.index));
            });
        });
    }

    showDragDropQuestion(question, progress) {
        document.getElementById('dragDropArea').style.display = 'block';
        
        // Update drag items based on question
        const dragItems = document.querySelector('.drag-items');
        const dropZones = document.querySelector('.drop-zones');
        
        dragItems.innerHTML = question.dragItems.map(item => `
            <div class="drag-item" draggable="true" data-test="${item.id}">
                <i class="fas fa-vial"></i>
                <span>${item.name}</span>
            </div>
        `).join('');
        
        dropZones.innerHTML = question.dropZones.map(zone => `
            <div class="drop-zone" data-organ="${zone.id}">
                <div class="organ-3d">
                    <i class="${zone.icon}"></i>
                </div>
                <span>${zone.name}</span>
            </div>
        `).join('');
        
        // Add progress bar
        const progressHTML = `
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress}%"></div>
            </div>
            <h3>Question ${this.currentQuestionIndex + 1} of ${GAME_DATA[this.currentGame].questions.length}</h3>
            <div class="question-text">${question.question}</div>
        `;
        
        document.getElementById('dragDropArea').insertAdjacentHTML('afterbegin', progressHTML);
        
        // Initialize drag and drop
        this.initializeDragAndDrop();
    }

    showPuzzleQuestion(question, progress) {
        document.getElementById('puzzleArea').style.display = 'block';
        
        // Clear previous content and add new content
        document.getElementById('puzzleArea').innerHTML = `
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress}%"></div>
            </div>
            <h3>Question ${this.currentQuestionIndex + 1} of ${GAME_DATA[this.currentGame].questions.length}</h3>
            <div class="question-text">${question.question}</div>
            <div class="puzzle-container">
                <div class="puzzle-pieces">
                    <!-- Puzzle pieces will be dynamically generated -->
                </div>
                <div class="puzzle-board">
                    <!-- Puzzle board will be dynamically generated -->
                </div>
            </div>
        `;
        
        // Initialize puzzle with proper styling
        this.initializePuzzle();
    }

    showOrganTestMatchingQuestion(question, progress) {
        document.getElementById('questionContainer').style.display = 'block';
        
        const questionHTML = `
            <div class="question bounce-in">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
                <h3>Question ${this.currentQuestionIndex + 1} of ${GAME_DATA[this.currentGame].questions.length}</h3>
                <div class="question-content">
                    <div class="question-text slide-in-right">${question.question}</div>
                    <div class="organ-display">
                        <div class="organ-image-large">
                            <span class="organ-emoji">${question.organ.image}</span>
                        </div>
                        <div class="organ-info">
                            <h4>${question.organ.name}</h4>
                            <p>${question.organ.description}</p>
                        </div>
                    </div>
                </div>
                <div class="test-options">
                    ${question.testOptions.map((option, index) => `
                        <div class="test-option slide-in-right" data-test-id="${option.id}" style="animation-delay: ${index * 0.1}s">
                            <div class="test-icon">
                                <i class="fas fa-vial"></i>
                            </div>
                            <div class="test-name">${option.name}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        document.getElementById('questionContainer').innerHTML = questionHTML;

        // Add click and touch listeners to test options
        document.querySelectorAll('.test-option').forEach(option => {
            const handleTestSelection = (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.selectTestOption(option.dataset.testId, question);
            };
            
            option.addEventListener('click', handleTestSelection);
            option.addEventListener('touchend', handleTestSelection);
        });
    }

    selectTestOption(selectedTestId, question) {
        // Disable all test options
        document.querySelectorAll('.test-option').forEach(option => {
            option.style.pointerEvents = 'none';
        });

        // Mark correct and incorrect answers
        document.querySelectorAll('.test-option').forEach(option => {
            const testId = option.dataset.testId;
            const testData = question.testOptions.find(test => test.id === testId);
            
            if (testData.correct) {
                option.classList.add('correct');
            } else if (testId === selectedTestId) {
                option.classList.add('incorrect');
            }
        });

        // Check if answer is correct
        if (selectedTestId === question.correctAnswer) {
            this.score += 10;
            document.getElementById('currentScore').textContent = this.score;
        }

        // Show explanation
        setTimeout(() => {
            const explanationHTML = `
                <div class="explanation slide-up">
                    <h4>Explanation:</h4>
                    <p>${question.explanation}</p>
                </div>
            `;
            document.querySelector('.question').insertAdjacentHTML('beforeend', explanationHTML);

            // Show next button
            const nextButton = document.createElement('button');
            nextButton.className = 'btn-primary';
            nextButton.innerHTML = this.currentQuestionIndex < GAME_DATA[this.currentGame].questions.length - 1 ? 'Next Question' : 'Finish Game';
            nextButton.style.marginTop = '20px';
            
            // Add both click and touch events for mobile support
            const handleNextButton = (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.nextQuestion();
            };
            
            nextButton.addEventListener('click', handleNextButton);
            nextButton.addEventListener('touchend', handleNextButton);
            
            document.querySelector('.question').appendChild(nextButton);
        }, 1500);
    }

    selectAnswer(selectedIndex) {
        const gameData = GAME_DATA[this.currentGame];
        const question = gameData.questions[this.currentQuestionIndex];
        
        // Disable all options
        document.querySelectorAll('.option').forEach(option => {
            option.style.pointerEvents = 'none';
        });

        // Mark correct and incorrect answers
        document.querySelectorAll('.option').forEach((option, index) => {
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === selectedIndex && index !== question.correct) {
                option.classList.add('incorrect');
            }
        });

        // Check if answer is correct
        if (selectedIndex === question.correct) {
            this.score += 10;
            document.getElementById('currentScore').textContent = this.score;
        }

        // Show explanation
        setTimeout(() => {
            const explanationHTML = `
                <div class="explanation slide-up">
                    <h4>Explanation:</h4>
                    <p>${question.explanation}</p>
                </div>
            `;
            document.querySelector('.question').insertAdjacentHTML('beforeend', explanationHTML);

            // Show next button
            const nextButton = document.createElement('button');
            nextButton.className = 'btn-primary';
            nextButton.innerHTML = this.currentQuestionIndex < gameData.questions.length - 1 ? 'Next Question' : 'Finish Game';
            nextButton.style.marginTop = '20px';
            
            // Add both click and touch events for mobile support
            const handleNextButton = (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.nextQuestion();
            };
            
            nextButton.addEventListener('click', handleNextButton);
            nextButton.addEventListener('touchend', handleNextButton);
            
            document.querySelector('.question').appendChild(nextButton);
        }, 1500);
    }

    nextQuestion() {
        const gameData = GAME_DATA[this.currentGame];
        
        if (this.currentQuestionIndex < gameData.questions.length - 1) {
            this.currentQuestionIndex++;
            // Clean up previous question elements
            this.cleanupQuestionElements();
            this.showQuestion();
        } else {
            // Stop timers immediately when questions are finished
            clearInterval(this.timerInterval);
            clearInterval(this.countdownInterval);
            this.finishGame();
        }
    }

    cleanupQuestionElements() {
        // Remove any existing feedback elements
        const existingFeedback = document.querySelectorAll('.feedback');
        existingFeedback.forEach(feedback => feedback.remove());
        
        // Reset drag and drop areas
        const dragItems = document.querySelectorAll('.drag-item');
        const dropZones = document.querySelectorAll('.drop-zone');
        const puzzlePieces = document.querySelectorAll('.puzzle-piece');
        const puzzleSlots = document.querySelectorAll('.puzzle-slot');
        
        dragItems.forEach(item => {
            item.classList.remove('dragging', 'correct', 'incorrect');
            item.style.display = 'flex';
        });
        
        dropZones.forEach(zone => {
            zone.classList.remove('drag-over', 'correct', 'incorrect');
        });
        
        puzzlePieces.forEach(piece => {
            piece.classList.remove('dragging', 'correct', 'incorrect');
            piece.style.display = 'flex';
        });
        
        puzzleSlots.forEach(slot => {
            slot.classList.remove('drag-over', 'correct', 'incorrect', 'filled');
            slot.innerHTML = '';
        });
    }

    finishGame() {
        // Ensure timers are stopped
        clearInterval(this.timerInterval);
        clearInterval(this.countdownInterval);
        
        const totalTime = Date.now() - this.gameStartTime;
        const minutes = Math.floor(totalTime / 60000);
        const seconds = Math.floor((totalTime % 60000) / 1000);
        const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        const accuracy = Math.round((this.score / (GAME_DATA[this.currentGame].questions.length * 10)) * 100);
        const classification = this.getClassification(accuracy);
        
        // Update final stats
        document.getElementById('finalScore').textContent = this.score;
        document.getElementById('finalTime').textContent = timeString;
        document.getElementById('finalAccuracy').textContent = `${accuracy}%`;
        document.getElementById('classification').textContent = classification;
        document.getElementById('classification').className = `stat-value ${classification.toLowerCase()}`;
        
        // Save score to leaderboard
        this.saveScore(this.currentGame, this.currentPlayer, this.score, totalTime, accuracy, classification);
        
        // Show result screen
        document.getElementById('questionContainer').style.display = 'none';
        document.getElementById('resultContainer').style.display = 'block';
    }

    getClassification(accuracy) {
        if (accuracy >= 90) {
            return 'Expert';
        } else if (accuracy >= 70) {
            return 'Intermediate';
        } else {
            return 'Beginner';
        }
    }

    saveScore(gameType, playerName, score, time, accuracy, classification) {
        if (!this.leaderboards[gameType]) {
            this.leaderboards[gameType] = [];
        }

        const newScore = {
            player: playerName,
            score: score,
            time: time,
            accuracy: accuracy,
            classification: classification,
            date: new Date().toISOString()
        };

        this.leaderboards[gameType].push(newScore);
        
        // Sort by score (descending) then by time (ascending)
        this.leaderboards[gameType].sort((a, b) => {
            if (b.score !== a.score) {
                return b.score - a.score;
            }
            return a.time - b.time;
        });

        // Keep only top 10 scores
        this.leaderboards[gameType] = this.leaderboards[gameType].slice(0, 10);
        
        this.saveLeaderboards();
    }

    loadLeaderboards() {
        const saved = localStorage.getItem('chemistryGameLeaderboards');
        return saved ? JSON.parse(saved) : {};
    }

    saveLeaderboards() {
        localStorage.setItem('chemistryGameLeaderboards', JSON.stringify(this.leaderboards));
    }

    updateLeaderboards() {
        Object.keys(GAME_DATA).forEach(gameType => {
            const leaderboard = this.leaderboards[gameType] || [];
            const leaderboardElement = document.querySelector(`#leaderboard-${gameType} .leaderboard-list`);
            
            if (leaderboard.length === 0) {
                leaderboardElement.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">No scores yet. Be the first to play!</p>';
            } else {
                leaderboardElement.innerHTML = leaderboard.map((entry, index) => {
                    const minutes = Math.floor(entry.time / 60000);
                    const seconds = Math.floor((entry.time % 60000) / 1000);
                    const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                    
                    const rankClass = index === 0 ? 'rank-1' : index === 1 ? 'rank-2' : index === 2 ? 'rank-3' : '';
                    const classificationClass = entry.classification ? entry.classification.toLowerCase() : 'beginner';
                    
                    return `
                        <div class="leaderboard-item ${rankClass}">
                            <div class="rank-info">
                                <span class="rank-number">#${index + 1}</span>
                                <span class="player-name">${entry.player}</span>
                                <span class="classification ${classificationClass}">${entry.classification || 'Beginner'}</span>
                            </div>
                            <div class="score-info">
                                <div class="score">${entry.score} pts</div>
                                <div class="time">${timeString}</div>
                                <div class="accuracy">${entry.accuracy || 0}%</div>
                            </div>
                        </div>
                    `;
                }).join('');
            }
        });
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
                    
                    document.getElementById(`${gameType}Best`).textContent = bestScore.score;
                    document.getElementById(`${gameType}Time`).textContent = timeString;
                } else {
                    document.getElementById(`${gameType}Best`).textContent = '0';
                    document.getElementById(`${gameType}Time`).textContent = '--:--';
                }
            } else {
                // Show best overall scores when no player is logged in
                if (leaderboard.length > 0) {
                    const bestScore = leaderboard[0];
                    const minutes = Math.floor(bestScore.time / 60000);
                    const seconds = Math.floor((bestScore.time % 60000) / 1000);
                    const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                    
                    document.getElementById(`${gameType}Best`).textContent = bestScore.score;
                    document.getElementById(`${gameType}Time`).textContent = timeString;
                } else {
                    document.getElementById(`${gameType}Best`).textContent = '0';
                    document.getElementById(`${gameType}Time`).textContent = '--:--';
                }
            }
        });
    }

    switchLeaderboardTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        // Update leaderboard content
        document.querySelectorAll('.leaderboard').forEach(board => {
            board.classList.remove('active');
        });
        document.getElementById(`leaderboard-${tabName}`).classList.add('active');
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new GameManager();
});

// Add some additional utility functions for better user experience
document.addEventListener('keydown', (e) => {
    // Allow Enter key to submit player form
    if (e.key === 'Enter' && document.getElementById('playerModal').style.display === 'flex') {
        document.getElementById('playerForm').dispatchEvent(new Event('submit'));
    }
    
    // Allow number keys 1-4 to select options in game
    if (document.getElementById('gameScreen').style.display === 'block') {
        const key = parseInt(e.key);
        if (key >= 1 && key <= 4) {
            const options = document.querySelectorAll('.option');
            if (options[key - 1] && !options[key - 1].style.pointerEvents) {
                options[key - 1].click();
            }
        }
    }
});

// Add touch support for mobile devices
document.addEventListener('touchstart', (e) => {
    // Prevent double-tap zoom on game cards and other interactive elements
    if (e.target.closest('.game-card') || e.target.closest('.option') || e.target.closest('.btn-primary') || e.target.closest('.btn-secondary')) {
        e.preventDefault();
    }
}, { passive: false });

// Add touch support for options in questions
document.addEventListener('DOMContentLoaded', () => {
    // Add touch event listeners to options when they are created
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1) { // Element node
                    const options = node.querySelectorAll ? node.querySelectorAll('.option') : [];
                    options.forEach(option => {
                        option.addEventListener('touchend', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            option.click();
                        });
                    });
                    
                    // Add touch support for test options
                    const testOptions = node.querySelectorAll ? node.querySelectorAll('.test-option') : [];
                    testOptions.forEach(option => {
                        option.addEventListener('touchend', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            option.click();
                        });
                    });
                    
                    // Add touch support for buttons
                    const buttons = node.querySelectorAll ? node.querySelectorAll('.btn-primary, .btn-secondary') : [];
                    buttons.forEach(button => {
                        button.addEventListener('touchend', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            button.click();
                        });
                    });
                }
            });
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

// Add service worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
