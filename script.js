// Game Data and Configuration
const GAME_DATA = {
    'medical-phlebotomy': {
        title: 'Medical & Phlebotomy',
        questions: [
            // 🩸 Glucose Tests
            {
                question: "What is a blood sugar (glucose) test?",
                options: ["Measures blood pressure", "Measures the amount of glucose in the blood", "Measures cholesterol"],
                correct: 1,
                explanation: "A blood glucose test measures the amount of sugar (glucose) in your blood, which is essential for diagnosing diabetes and monitoring blood sugar levels."
            },
            {
                question: "What are the types of glucose tests?",
                options: ["FBG and HbA1c", "CBC and ESR", "ALT and AST"],
                correct: 0,
                explanation: "FBG (Fasting Blood Glucose) and HbA1c are the main types of glucose tests used to diagnose and monitor diabetes."
            },
            {
                question: "Why is the cortisol test done in the morning and evening?",
                options: ["To measure blood pressure", "To measure cortisol levels at different times", "To check calcium levels"],
                correct: 1,
                explanation: "Cortisol levels vary throughout the day, so testing at different times helps assess the body's stress response and adrenal function."
            },
            {
                question: "What conditions can cortisol test help diagnose?",
                options: ["Addison's disease", "Cushing's syndrome", "Both Addison's disease and Cushing's syndrome"],
                correct: 2,
                explanation: "Cortisol testing helps diagnose both Addison's disease (low cortisol) and Cushing's syndrome (high cortisol)."
            },
            {
                question: "How is the 24-hour urine collection test done?",
                options: ["Blood sample", "Collecting urine for 24 hours", "Nose swab"],
                correct: 1,
                explanation: "The 24-hour urine collection test requires collecting all urine produced over a 24-hour period to measure various substances."
            },
            {
                question: "What does the 24-hour urine collection test measure?",
                options: ["Protein, calcium, cortisol", "Hemoglobin", "Vitamin B12"],
                correct: 0,
                explanation: "This test measures protein, calcium, cortisol, and other substances to assess kidney and endocrine function."
            },
            {
                question: "What is the 24-hour urine test mainly used for?",
                options: ["Diagnosing kidney or endocrine disorders", "Eye problems", "Heart diseases"],
                correct: 0,
                explanation: "The 24-hour urine test is primarily used to diagnose kidney disorders and endocrine problems."
            },
            {
                question: "What is a vitamin D test?",
                options: ["Measures vitamin D levels in the blood", "Measures iron levels", "Measures blood sugar"],
                correct: 0,
                explanation: "A vitamin D test measures the amount of vitamin D in your blood, which is essential for bone health."
            },
            {
                question: "When is vitamin D test usually ordered?",
                options: ["In cases of bone weakness or fatigue", "When coughing", "When having a fever"],
                correct: 0,
                explanation: "Vitamin D testing is ordered when patients have symptoms of bone weakness, fatigue, or suspected deficiency."
            },
            {
                question: "What is the purpose of vitamin D test?",
                options: ["Evaluate bone health and diagnose vitamin D deficiency or excess", "Measure blood pressure", "Measure cholesterol"],
                correct: 0,
                explanation: "Vitamin D testing evaluates bone health and helps diagnose vitamin D deficiency or excess."
            },
            // ❓ Extra Simple Medical Questions (for Phlebotomists)
            {
                question: "How many hours should a patient fast before a fasting blood glucose test (FBG)?",
                options: ["4 hours", "8 hours", "12 hours"],
                correct: 1,
                explanation: "Patients should fast for 8 hours before a fasting blood glucose test to get accurate results."
            },
            {
                question: "Which tube is usually used for CBC?",
                options: ["Red", "Purple (Lavender)", "Blue"],
                correct: 1,
                explanation: "Purple (Lavender) tubes contain EDTA and are used for CBC and other hematology tests."
            },
            {
                question: "For coagulation tests (PT/INR), which tube is used?",
                options: ["Blue", "Green", "Yellow"],
                correct: 0,
                explanation: "Blue tubes contain sodium citrate and are used for coagulation studies like PT/INR."
            },
            {
                question: "What is the ideal time to draw a morning cortisol sample?",
                options: ["Between 7–9 AM", "12 Noon", "10 PM"],
                correct: 0,
                explanation: "Morning cortisol samples should be drawn between 7-9 AM when cortisol levels are naturally highest."
            },
            // 🧑‍⚕️ Phlebotomy Collection Questions
            {
                question: "Which vein is most commonly used for venipuncture?",
                options: ["Basilic", "Median cubital", "Dorsal hand vein"],
                correct: 1,
                explanation: "The median cubital vein is the most commonly used for venipuncture as it's large, stable, and easily accessible."
            },
            {
                question: "What is the correct order of draw for blood collection?",
                options: ["Red → Blue → Green → Lavender", "Lavender → Blue → Red → Green", "Green → Lavender → Blue → Red"],
                correct: 0,
                explanation: "The correct order is Red → Blue → Green → Lavender to prevent cross-contamination between tubes."
            },
            {
                question: "Which tube contains sodium citrate?",
                options: ["Blue", "Red", "Green"],
                correct: 0,
                explanation: "Blue tubes contain sodium citrate, which is an anticoagulant used for coagulation studies."
            },
            {
                question: "What should be done if a patient feels faint during venipuncture?",
                options: ["Continue the draw", "Stop immediately and lay the patient down", "Ignore and finish quickly"],
                correct: 1,
                explanation: "If a patient feels faint, stop immediately, remove the needle, and lay the patient down to prevent injury."
            },
            {
                question: "Why is it important to invert tubes after collection?",
                options: ["To prevent clotting", "To mix with oxygen", "To change the tube color"],
                correct: 0,
                explanation: "Inverting tubes ensures proper mixing of anticoagulants and prevents clotting of the blood sample."
            },
            {
                question: "Which angle should the needle enter the skin during venipuncture?",
                options: ["15–30 degrees", "45–60 degrees", "90 degrees"],
                correct: 0,
                explanation: "The needle should enter at a 15-30 degree angle for optimal vein access and patient comfort."
            },
            {
                question: "Which antiseptic is commonly used before drawing blood?",
                options: ["Chlorhexidine", "70% Isopropyl alcohol", "Hydrogen peroxide"],
                correct: 1,
                explanation: "70% Isopropyl alcohol is the most commonly used antiseptic for cleaning the venipuncture site."
            },
            {
                question: "How long should a tourniquet be applied before venipuncture?",
                options: ["Less than 1 minute", "2–3 minutes", "5 minutes"],
                correct: 0,
                explanation: "Tourniquet should be applied for less than 1 minute to prevent hemoconcentration and patient discomfort."
            },
            {
                question: "What happens if the tourniquet is left on too long?",
                options: ["Hemoconcentration", "Hemolysis only", "Nothing happens"],
                correct: 0,
                explanation: "Leaving the tourniquet on too long causes hemoconcentration, which can affect test results."
            },
            {
                question: "Which color tube is used for blood culture?",
                options: ["Yellow", "Red", "Blue"],
                correct: 0,
                explanation: "Yellow tubes are used for blood cultures as they contain SPS (Sodium Polyanethol Sulfonate)."
            },
            {
                question: "Which color tube is used for serum chemistry tests?",
                options: ["Red", "Blue", "Lavender"],
                correct: 0,
                explanation: "Red tubes are used for serum chemistry tests as they allow blood to clot and separate serum."
            },
            {
                question: "Which tube is used for coagulation studies?",
                options: ["Blue", "Purple", "Yellow"],
                correct: 0,
                explanation: "Blue tubes are used for coagulation studies as they contain sodium citrate anticoagulant."
            },
            {
                question: "What is the first step before performing venipuncture?",
                options: ["Ask patient to clench fist", "Verify patient identity", "Apply tourniquet"],
                correct: 1,
                explanation: "Verifying patient identity is the first and most critical step to ensure patient safety and correct results."
            },
            {
                question: "What is the maximum number of attempts a phlebotomist should try on one patient?",
                options: ["2", "3", "5"],
                correct: 0,
                explanation: "The maximum number of attempts should be 2 to minimize patient discomfort and avoid complications."
            },
            {
                question: "What should be done if blood flow stops during collection?",
                options: ["Wiggle needle aggressively", "Gently reposition the needle", "Push plunger harder"],
                correct: 1,
                explanation: "If blood flow stops, gently reposition the needle to restore flow without causing patient discomfort."
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
            },
            {
                question: "What is the main reason we use a centrifuge on blood samples?",
                options: ["To heat the sample", "To make the blood clot", "To separate cells from serum/plasma"],
                correct: 2,
                explanation: "Centrifugation separates blood components - cells settle at the bottom while serum/plasma remains on top for testing."
            },
            {
                question: "If a patient sample tube is missing its label, what happens?",
                options: ["It goes straight to testing", "The lab writes the patient name on it", "The lab cannot test it"],
                correct: 2,
                explanation: "Unlabeled samples cannot be tested as they cannot be properly identified, which is a critical safety requirement."
            },
            {
                question: "What can happen if a sample is delayed and sits out too long before being spun?",
                options: ["The tube will change color", "Some chemicals in the blood may change", "Nothing at all"],
                correct: 1,
                explanation: "Delayed processing can cause changes in blood chemistry, leading to inaccurate test results."
            },
            {
                question: "A sample that is too hot or too cold during transport is an example of what kind of error?",
                options: ["Analytical error", "Pre-analytical error", "Post-analytical error"],
                correct: 1,
                explanation: "Temperature issues during transport are pre-analytical errors that occur before the sample reaches the testing phase."
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
            },
            {
                question: "How should the blood collection tubes be filled relative to the line on the label?",
                options: ["Only half-way", "As little as possible", "To the correct fill line"],
                correct: 2,
                explanation: "Tubes must be filled to the correct line to maintain the proper blood-to-additive ratio for accurate results."
            },
            {
                question: "What is the correct action if a small amount of blood spills during the draw?",
                options: ["Ignore it and finish the draw", "Clean it up immediately with a disinfectant wipe", "Use your bare hand to wipe it away"],
                correct: 1,
                explanation: "Blood spills must be cleaned immediately with appropriate disinfectant to prevent contamination and infection risk."
            },
            {
                question: "If you collect a sample, where must you put the patient label?",
                options: ["On the transport box", "Directly onto the sample tube", "On your own clipboard"],
                correct: 1,
                explanation: "Patient labels must be placed directly on the sample tube to ensure proper identification throughout the testing process."
            },
            {
                question: "If a patient is told to fast for 12 hours, what can they only drink?",
                options: ["Orange Juice", "Black Coffee", "Plain water"],
                correct: 2,
                explanation: "During fasting, patients can only drink plain water as other beverages can affect test results."
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
            },
            {
                question: "If you are taking a sample to the lab, what should you keep it away from?",
                options: ["Loud noise", "Extreme heat or direct sunlight", "Other people"],
                correct: 1,
                explanation: "Extreme temperatures can damage samples and affect test results, so samples must be protected from heat and sunlight."
            },
            {
                question: "Which item is used to clean the skin before a needle is inserted?",
                options: ["Water", "An alcohol pad", "Hand lotion"],
                correct: 1,
                explanation: "Alcohol pads are used to disinfect the skin before needle insertion to prevent infection."
            },
            {
                question: "What is the special container for throwing away used needles and sharp objects called?",
                options: ["The trash can", "The metal bin", "A sharps container"],
                correct: 2,
                explanation: "Sharps containers are specially designed to safely dispose of needles and other sharp medical instruments."
            },
            {
                question: "In a laboratory setting, which piece of Personal Protective Equipment (PPE) protects your hands?",
                options: ["A face mask", "Gloves", "Safety glasses"],
                correct: 1,
                explanation: "Gloves are the primary PPE for hand protection in laboratory settings to prevent contamination and exposure."
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
        this.boothStats = this.loadBoothStats();
        
        this.initializeEventListeners();
        this.showPlayerModal();
        // Load and display leaderboards immediately
        this.updateLeaderboards();
        this.updateBestScores();
        this.updateBoothStats();
    }

    initializeEventListeners() {
        // Player registration
        document.getElementById('playerForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.registerPlayer();
        });
        
        // Enhanced touch support for submit button
        const submitBtn = document.getElementById('submitBtn');
        
        // Prevent default touch behaviors
        submitBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            submitBtn.style.transform = 'scale(0.95)';
        }, { passive: false });
        
        submitBtn.addEventListener('touchend', (e) => {
            e.preventDefault();
            e.stopPropagation();
            submitBtn.style.transform = 'scale(1)';
            this.registerPlayer();
        }, { passive: false });
        
        submitBtn.addEventListener('touchcancel', (e) => {
            e.preventDefault();
            submitBtn.style.transform = 'scale(1)';
        }, { passive: false });
        
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.registerPlayer();
        });

        // Logout
        document.getElementById('logoutBtn').addEventListener('click', () => {
            this.logout();
        });

        // Enhanced game selection for mobile devices
        document.querySelectorAll('.game-card').forEach(card => {
            // Add visual feedback for touch
            card.addEventListener('touchstart', (e) => {
                e.preventDefault();
                card.style.transform = 'scale(0.95)';
                card.style.transition = 'transform 0.1s ease';
            }, { passive: false });
            
            card.addEventListener('touchend', (e) => {
                e.preventDefault();
                e.stopPropagation();
                card.style.transform = 'scale(1)';
                const gameType = card.dataset.game;
                this.startGame(gameType);
            }, { passive: false });
            
            card.addEventListener('touchcancel', (e) => {
                e.preventDefault();
                card.style.transform = 'scale(1)';
            }, { passive: false });
            
            card.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const gameType = card.dataset.game;
                this.startGame(gameType);
            });
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

        // No more leaderboard tabs - using unified leaderboard

        // Admin panel
        document.getElementById('adminBtn').addEventListener('click', () => {
            this.showAdminPanel();
        });

        document.getElementById('closeAdminModal').addEventListener('click', () => {
            this.hideAdminPanel();
        });

        document.getElementById('clearAllData').addEventListener('click', () => {
            this.clearAllData();
        });

        document.getElementById('exportData').addEventListener('click', () => {
            this.exportData();
        });

        document.getElementById('importData').addEventListener('click', () => {
            this.importData();
        });

        // Random game button
        document.getElementById('randomGameBtn').addEventListener('click', () => {
            this.showRandomWheel();
        });

        // Medical Staff button
        document.getElementById('medicalStaffBtn').addEventListener('click', () => {
            this.showMedicalStaffSection();
        });

        // Back to games button
        document.getElementById('backToGamesBtn').addEventListener('click', () => {
            this.hideMedicalStaffSection();
        });

        // Medical Staff cards
        document.querySelectorAll('.medical-staff-card').forEach(card => {
            card.addEventListener('click', () => {
                const action = card.dataset.action;
                this.handleMedicalStaffAction(action);
            });
        });

        // Enhanced random wheel events for mobile
        const spinButton = document.getElementById('spinButton');
        const startSelectedGameBtn = document.getElementById('startSelectedGame');
        
        // Spin button with touch support
        spinButton.addEventListener('touchstart', (e) => {
            e.preventDefault();
            spinButton.style.transform = 'scale(0.9)';
        }, { passive: false });
        
        spinButton.addEventListener('touchend', (e) => {
            e.preventDefault();
            e.stopPropagation();
            spinButton.style.transform = 'scale(1)';
            this.spinWheel();
        }, { passive: false });
        
        spinButton.addEventListener('touchcancel', (e) => {
            e.preventDefault();
            spinButton.style.transform = 'scale(1)';
        }, { passive: false });
        
        spinButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.spinWheel();
        });
        
        // Start selected game button with touch support
        startSelectedGameBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            startSelectedGameBtn.style.transform = 'scale(0.95)';
        }, { passive: false });
        
        startSelectedGameBtn.addEventListener('touchend', (e) => {
            e.preventDefault();
            e.stopPropagation();
            startSelectedGameBtn.style.transform = 'scale(1)';
            this.startSelectedRandomGame();
        }, { passive: false });
        
        startSelectedGameBtn.addEventListener('touchcancel', (e) => {
            e.preventDefault();
            startSelectedGameBtn.style.transform = 'scale(1)';
        }, { passive: false });
        
        startSelectedGameBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.startSelectedRandomGame();
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
            
            // Increment daily player count
            this.boothStats.totalPlayersToday++;
            this.saveBoothStats();
            
            document.getElementById('playerModal').style.display = 'none';
            document.getElementById('mainMenu').style.display = 'block';
            document.getElementById('playerInfo').style.display = 'flex';
            
            // Show admin button for specific admin users
            if (this.isAdminUser(playerName)) {
                document.getElementById('adminBtn').style.display = 'inline-block';
            }
            
            this.updateLeaderboards();
            this.updateBestScores();
            this.updateBoothStats();
            
            // Reset button state
            submitBtn.disabled = false;
            submitText.style.display = 'inline';
            loadingSpinner.style.display = 'none';
        }, 1500);
    }

    isAdminUser(playerName) {
        // Define admin users - you can change these names
        const adminUsers = ['admin', 'administrator', 'developer', 'owner'];
        return adminUsers.includes(playerName.toLowerCase());
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
        document.getElementById('medicalStaffSection').style.display = 'none';
        document.getElementById('quick-stats').style.display = 'flex';
        document.getElementById('games-grid').style.display = 'grid';
        document.getElementById('randomGameBtn').style.display = 'inline-flex';
        this.updateLeaderboards();
        this.updateBestScores();
    }

    showMedicalStaffSection() {
        document.getElementById('medicalStaffSection').style.display = 'block';
        document.getElementById('quick-stats').style.display = 'none';
        document.getElementById('games-grid').style.display = 'none';
        document.getElementById('randomGameBtn').style.display = 'none';
    }

    hideMedicalStaffSection() {
        document.getElementById('medicalStaffSection').style.display = 'none';
        document.getElementById('quick-stats').style.display = 'flex';
        document.getElementById('games-grid').style.display = 'grid';
        document.getElementById('randomGameBtn').style.display = 'inline-flex';
    }

    handleMedicalStaffAction(action) {
        switch(action) {
            case 'lab-tests':
                this.showLabTests();
                break;
            case 'drug-interactions':
                this.showDrugInteractions();
                break;
            case 'medical-calculator':
                this.showMedicalCalculator();
                break;
            case 'patient-records':
                this.showPatientRecords();
                break;
            case 'emergency-protocols':
                this.showEmergencyProtocols();
                break;
            case 'medical-education':
                this.showMedicalEducation();
                break;
            case 'diagnostic-tools':
                this.showDiagnosticTools();
                break;
            case 'treatment-guidelines':
                this.showTreatmentGuidelines();
                break;
            case 'medical-imaging':
                this.showMedicalImaging();
                break;
            default:
                console.log('Unknown medical staff action:', action);
        }
    }

    showLabTests() {
        alert('Lab Tests Portal\n\nAccess laboratory test references and normal ranges:\n\n• Complete Blood Count (CBC)\n• Basic Metabolic Panel (BMP)\n• Liver Function Tests (LFT)\n• Lipid Panel\n• Thyroid Function Tests\n\nThis feature will be implemented in the next update.');
    }

    showDrugInteractions() {
        alert('Drug Interactions Checker\n\nCheck drug interactions and contraindications:\n\n• Drug-Drug Interactions\n• Drug-Food Interactions\n• Contraindications\n• Dosage Adjustments\n\nThis feature will be implemented in the next update.');
    }

    showMedicalCalculator() {
        alert('Medical Calculator\n\nCalculate various medical parameters:\n\n• BMI (Body Mass Index)\n• GFR (Glomerular Filtration Rate)\n• BSA (Body Surface Area)\n• Ideal Body Weight\n• Creatinine Clearance\n\nThis feature will be implemented in the next update.');
    }

    showPatientRecords() {
        alert('Patient Records System\n\nAccess and manage patient information:\n\n• Patient Demographics\n• Medical History\n• Lab Results\n• Medications\n• Allergies\n\nThis feature will be implemented in the next update.');
    }

    showEmergencyProtocols() {
        alert('Emergency Protocols\n\nQuick access to emergency procedures:\n\n• ACLS Protocols\n• BLS Guidelines\n• Emergency Medications\n• Critical Care Procedures\n• Disaster Response\n\nThis feature will be implemented in the next update.');
    }

    showMedicalEducation() {
        alert('Medical Education Portal\n\nContinuing education and training materials:\n\n• CME Courses\n• Case Studies\n• Medical Journals\n• Training Videos\n• Certification Programs\n\nThis feature will be implemented in the next update.');
    }

    showDiagnosticTools() {
        alert('Diagnostic Tools\n\nClinical decision support and diagnostic aids:\n\n• Symptom Checker\n• Differential Diagnosis\n• Clinical Decision Trees\n• Diagnostic Algorithms\n• Risk Assessment Tools\n\nThis feature will be implemented in the next update.');
    }

    showTreatmentGuidelines() {
        alert('Treatment Guidelines\n\nEvidence-based treatment protocols and guidelines:\n\n• Clinical Practice Guidelines\n• Treatment Protocols\n• Evidence-Based Medicine\n• Clinical Pathways\n• Quality Indicators\n\nThis feature will be implemented in the next update.');
    }

    showMedicalImaging() {
        alert('Medical Imaging Portal\n\nRadiology references and imaging protocols:\n\n• X-Ray Interpretation\n• CT Scan Guidelines\n• MRI Protocols\n• Ultrasound Procedures\n• Nuclear Medicine\n\nThis feature will be implemented in the next update.');
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
        
        // Reset selected questions for random selection
        this.selectedQuestions = null;

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
        
        // Add visual effects based on type
        if (type === 'success') {
            this.showCorrectAnswerEffect();
            this.createParticles();
            this.showScorePop();
        } else if (type === 'error') {
            this.showIncorrectAnswerEffect();
        }
        
        setTimeout(() => {
            feedback.remove();
        }, 2000);
    }

    showCorrectAnswerEffect() {
        const effect = document.createElement('div');
        effect.className = 'correct-answer-effect';
        effect.innerHTML = '🎉';
        document.body.appendChild(effect);
        
        setTimeout(() => {
            effect.remove();
        }, 1500);
    }

    showIncorrectAnswerEffect() {
        const effect = document.createElement('div');
        effect.className = 'incorrect-answer-effect';
        effect.innerHTML = '❌';
        document.body.appendChild(effect);
        
        setTimeout(() => {
            effect.remove();
        }, 1000);
    }

    createParticles() {
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = Math.random() * window.innerHeight + 'px';
            particle.style.background = ['#4caf50', '#4ecdc4', '#45b7d1', '#feca57'][Math.floor(Math.random() * 4)];
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 2000);
        }
    }

    showScorePop() {
        const scorePop = document.createElement('div');
        scorePop.className = 'score-pop';
        scorePop.textContent = `+10 Points!`;
        document.body.appendChild(scorePop);
        
        setTimeout(() => {
            scorePop.remove();
        }, 2000);
    }

    showCelebration() {
        const celebration = document.createElement('div');
        celebration.className = 'celebration';
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDelay = Math.random() * 3 + 's';
            celebration.appendChild(confetti);
        }
        
        document.body.appendChild(celebration);
        
        setTimeout(() => {
            celebration.remove();
        }, 3000);
    }

    getRandomQuestions(questions, count) {
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    showQuestion() {
        const gameData = GAME_DATA[this.currentGame];
        
        // For Medical & Phlebotomy, select 5 random questions
        if (this.currentGame === 'medical-phlebotomy') {
            if (!this.selectedQuestions) {
                this.selectedQuestions = this.getRandomQuestions(gameData.questions, 5);
            }
        }
        
        const question = this.currentGame === 'medical-phlebotomy' ? 
            this.selectedQuestions[this.currentQuestionIndex] : 
            gameData.questions[this.currentQuestionIndex];
        
        const totalQuestions = this.currentGame === 'medical-phlebotomy' ? 
            this.selectedQuestions.length : 
            gameData.questions.length;
        
        const progress = ((this.currentQuestionIndex + 1) / totalQuestions) * 100;
        
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
                <h3>Question ${this.currentQuestionIndex + 1} of ${this.currentGame === 'medical-phlebotomy' ? this.selectedQuestions.length : GAME_DATA[this.currentGame].questions.length}</h3>
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
            const totalQuestions = this.currentGame === 'medical-phlebotomy' ? 
                this.selectedQuestions.length : 
                GAME_DATA[this.currentGame].questions.length;
            nextButton.innerHTML = this.currentQuestionIndex < totalQuestions - 1 ? 'Next Question' : 'Finish Game';
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
            const totalQuestions = this.currentGame === 'medical-phlebotomy' ? 
                this.selectedQuestions.length : 
                gameData.questions.length;
            nextButton.innerHTML = this.currentQuestionIndex < totalQuestions - 1 ? 'Next Question' : 'Finish Game';
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
        const totalQuestions = this.currentGame === 'medical-phlebotomy' ? 
            this.selectedQuestions.length : 
            gameData.questions.length;
        
        if (this.currentQuestionIndex < totalQuestions - 1) {
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
        
        const totalQuestions = this.currentGame === 'medical-phlebotomy' ? 
            this.selectedQuestions.length : 
            GAME_DATA[this.currentGame].questions.length;
        const accuracy = Math.round((this.score / (totalQuestions * 10)) * 100);
        const classification = this.getClassification(accuracy);
        
        // Update final stats
        document.getElementById('finalScore').textContent = this.score;
        document.getElementById('finalTime').textContent = timeString;
        document.getElementById('finalAccuracy').textContent = `${accuracy}%`;
        document.getElementById('classification').textContent = classification;
        document.getElementById('classification').className = `stat-value ${classification.toLowerCase()}`;
        
        // Save score to leaderboard
        this.saveScore(this.currentGame, this.currentPlayer, this.score, totalTime, accuracy, classification);
        
        // Update booth stats
        this.incrementBoothStats();
        
        // Show celebration for high scores
        if (accuracy >= 80) {
            this.showCelebration();
        }
        
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

    loadBoothStats() {
        const saved = localStorage.getItem('chemistryGameBoothStats');
        const defaultStats = {
            totalPlayersToday: 0,
            totalGamesPlayed: 0,
            totalScore: 0,
            lastResetDate: new Date().toDateString()
        };
        
        if (saved) {
            const stats = JSON.parse(saved);
            // Reset daily stats if it's a new day
            if (stats.lastResetDate !== new Date().toDateString()) {
                stats.totalPlayersToday = 0;
                stats.lastResetDate = new Date().toDateString();
            }
            return stats;
        }
        return defaultStats;
    }

    saveBoothStats() {
        localStorage.setItem('chemistryGameBoothStats', JSON.stringify(this.boothStats));
    }

    updateBoothStats() {
        // Calculate average score
        const averageScore = this.boothStats.totalGamesPlayed > 0 
            ? Math.round(this.boothStats.totalScore / this.boothStats.totalGamesPlayed)
            : 0;

        // Update display
        document.getElementById('totalPlayersToday').textContent = this.boothStats.totalPlayersToday;
        document.getElementById('totalGamesPlayed').textContent = this.boothStats.totalGamesPlayed;
        document.getElementById('averageScore').textContent = averageScore;
    }

    incrementBoothStats() {
        this.boothStats.totalGamesPlayed++;
        this.boothStats.totalScore += this.score;
        this.saveBoothStats();
        this.updateBoothStats();
    }

    updateLeaderboards() {
        // Collect all scores from all games
        const allScores = [];
        
        Object.keys(GAME_DATA).forEach(gameType => {
            const leaderboard = this.leaderboards[gameType] || [];
            leaderboard.forEach(entry => {
                allScores.push({
                    ...entry,
                    gameType: gameType,
                    gameTitle: GAME_DATA[gameType].title
                });
            });
        });
        
        // Sort by score (descending) then by time (ascending)
        allScores.sort((a, b) => {
            if (b.score !== a.score) {
                return b.score - a.score;
            }
            return a.time - b.time;
        });
        
        // Keep only top 20 scores
        const topScores = allScores.slice(0, 20);
        
        const leaderboardElement = document.querySelector('#unifiedLeaderboard .leaderboard-list');
        
        if (topScores.length === 0) {
            leaderboardElement.innerHTML = '<p style="text-align: center; color: rgba(255, 255, 255, 0.7); padding: 40px; font-size: 1.1rem;">No scores yet. Be the first to play!</p>';
        } else {
            leaderboardElement.innerHTML = topScores.map((entry, index) => {
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
                            <span class="game-type">${entry.gameTitle}</span>
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
                } else {
                    const elementId = gameType === 'medical-phlebotomy' ? 'medicalPhlebotomy' : gameType;
                    document.getElementById(`${elementId}Best`).textContent = '0';
                    document.getElementById(`${elementId}Time`).textContent = '--:--';
                }
            } else {
                // Show best overall scores when no player is logged in
                if (leaderboard.length > 0) {
                    const bestScore = leaderboard[0];
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
                } else {
                    const elementId = gameType === 'medical-phlebotomy' ? 'medicalPhlebotomy' : gameType;
                    document.getElementById(`${elementId}Best`).textContent = '0';
                    document.getElementById(`${elementId}Time`).textContent = '--:--';
                }
            }
        });
    }


    // Admin Panel Functions
    showAdminPanel() {
        document.getElementById('adminModal').style.display = 'flex';
        this.updateAdminStats();
        this.updateAdminLeaderboard();
    }

    hideAdminPanel() {
        document.getElementById('adminModal').style.display = 'none';
    }

    updateAdminStats() {
        const leaderboards = this.leaderboards;
        let totalPlayers = 0;
        let totalGames = 0;
        const playerSet = new Set();

        Object.keys(leaderboards).forEach(gameType => {
            const gameData = leaderboards[gameType] || [];
            totalGames += gameData.length;
            gameData.forEach(entry => {
                playerSet.add(entry.player);
            });
        });

        totalPlayers = playerSet.size;

        // Calculate data size
        const dataString = JSON.stringify(leaderboards);
        const dataSize = Math.round(dataString.length / 1024 * 100) / 100;

        document.getElementById('totalPlayers').textContent = totalPlayers;
        document.getElementById('totalGames').textContent = totalGames;
        document.getElementById('dataSize').textContent = `${dataSize} KB`;
    }

    updateAdminLeaderboard() {
        const leaderboardList = document.getElementById('adminLeaderboardList');
        let html = '';

        Object.keys(this.leaderboards).forEach(gameType => {
            const gameData = this.leaderboards[gameType] || [];
            if (gameData.length > 0) {
                html += `<h4>${GAME_DATA[gameType].title}</h4>`;
                gameData.forEach((entry, index) => {
                    const minutes = Math.floor(entry.time / 60000);
                    const seconds = Math.floor((entry.time % 60000) / 1000);
                    const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                    
                    html += `
                        <div class="leaderboard-item">
                            <strong>#${index + 1}</strong> ${entry.player} - 
                            ${entry.score} pts (${timeString}) - 
                            ${entry.accuracy || 0}% - 
                            ${entry.classification || 'Beginner'}
                        </div>
                    `;
                });
                html += '<br>';
            }
        });

        if (html === '') {
            html = '<p>No data available</p>';
        }

        leaderboardList.innerHTML = html;
    }

    clearAllData() {
        if (confirm('Are you sure you want to clear ALL data? This action cannot be undone!')) {
            if (confirm('This will delete all leaderboards and player data. Are you absolutely sure?')) {
                // Clear all localStorage data
                localStorage.removeItem('chemistryGameLeaderboards');
                
                // Reset leaderboards
                this.leaderboards = {};
                
                // Update displays
                this.updateLeaderboards();
                this.updateBestScores();
                this.updateAdminStats();
                this.updateAdminLeaderboard();
                
                alert('All data has been cleared successfully!');
            }
        }
    }

    exportData() {
        const data = {
            leaderboards: this.leaderboards,
            exportDate: new Date().toISOString(),
            version: '1.0'
        };

        const dataString = JSON.stringify(data, null, 2);
        const blob = new Blob([dataString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `chemistry-game-data-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        alert('Data exported successfully!');
    }

    importData() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const data = JSON.parse(e.target.result);
                        if (data.leaderboards) {
                            this.leaderboards = data.leaderboards;
                            this.saveLeaderboards();
                            
                            // Update displays
                            this.updateLeaderboards();
                            this.updateBestScores();
                            this.updateAdminStats();
                            this.updateAdminLeaderboard();
                            
                            alert('Data imported successfully!');
                        } else {
                            alert('Invalid data format!');
                        }
                    } catch (error) {
                        alert('Error importing data: ' + error.message);
                    }
                };
                reader.readAsText(file);
            }
        };
        
        input.click();
    }

    // Random Wheel Functions
    showRandomWheel() {
        if (!this.currentPlayer) {
            this.showPlayerModal();
            return;
        }

        document.getElementById('randomWheelModal').style.display = 'flex';
        this.createWheelSegments();
        this.selectedRandomGame = null;
        document.getElementById('selectedGame').style.display = 'none';
    }

    createWheelSegments() {
        const gameTypes = Object.keys(GAME_DATA);
        const segmentsContainer = document.getElementById('wheelSegments');
        segmentsContainer.innerHTML = '';

        gameTypes.forEach((gameType, index) => {
            const segment = document.createElement('div');
            segment.className = 'wheel-segment';
            segment.style.transform = `rotate(${index * (360 / gameTypes.length)}deg)`;
            segment.textContent = GAME_DATA[gameType].title;
            segmentsContainer.appendChild(segment);
        });
    }

    spinWheel() {
        const wheel = document.getElementById('gameWheel');
        const spinButton = document.getElementById('spinButton');
        
        // Disable spin button during animation
        spinButton.style.pointerEvents = 'none';
        spinButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        
        // Calculate random rotation (multiple full rotations + random angle)
        const gameTypes = Object.keys(GAME_DATA);
        const segmentAngle = 360 / gameTypes.length;
        const randomSegment = Math.floor(Math.random() * gameTypes.length);
        const baseRotation = 1800; // 5 full rotations
        const finalAngle = randomSegment * segmentAngle;
        const totalRotation = baseRotation + finalAngle;
        
        // Set CSS variable for animation
        wheel.style.setProperty('--final-rotation', `${totalRotation}deg`);
        wheel.classList.add('spinning');
        
        // Store selected game
        this.selectedRandomGame = gameTypes[randomSegment];
        
        // Show result after animation
        setTimeout(() => {
            wheel.classList.remove('spinning');
            this.showSelectedGame();
            
            // Reset spin button
            spinButton.style.pointerEvents = 'auto';
            spinButton.innerHTML = '<i class="fas fa-play"></i>';
        }, 3000);
    }

    showSelectedGame() {
        const selectedGameDiv = document.getElementById('selectedGame');
        const gameResultDiv = document.getElementById('gameResult');
        
        gameResultDiv.innerHTML = `
            <div class="game-icon">
                <i class="fas fa-gamepad"></i>
            </div>
            <h4>${GAME_DATA[this.selectedRandomGame].title}</h4>
            <p>Get ready to test your knowledge!</p>
        `;
        
        selectedGameDiv.style.display = 'block';
    }

    startSelectedRandomGame() {
        if (this.selectedRandomGame) {
            document.getElementById('randomWheelModal').style.display = 'none';
            this.startGame(this.selectedRandomGame);
        }
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
    if (e.target.closest('.game-card') || e.target.closest('.option') || e.target.closest('.btn-primary') || e.target.closest('.btn-secondary') || e.target.closest('.modal-content button') || e.target.closest('.test-option')) {
        e.preventDefault();
    }
}, { passive: false });

// Special handling for submit button
document.addEventListener('touchstart', (e) => {
    if (e.target.id === 'submitBtn' || e.target.closest('#submitBtn')) {
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
                    
                    // Add touch support for modal buttons
                    const modalButtons = node.querySelectorAll ? node.querySelectorAll('.modal-content button') : [];
                    modalButtons.forEach(button => {
                        button.addEventListener('touchend', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            button.click();
                        });
                    });
                    
                    // Special handling for submit button
                    const submitBtn = node.querySelector ? node.querySelector('#submitBtn') : null;
                    if (submitBtn) {
                        submitBtn.addEventListener('touchend', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            submitBtn.click();
                        });
                    }
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
