// Firebase Configuration
const firebaseConfig = {
    // Paste your actual Firebase config here from console.firebase.google.com
    apiKey: "AIzaSyC...", // Replace with your actual API key
    authDomain: "your-project.firebaseapp.com", // Replace with your actual domain
    projectId: "your-project-id", // Replace with your actual project ID
    storageBucket: "your-project.appspot.com", // Replace with your actual storage bucket
    messagingSenderId: "123456789", // Replace with your actual sender ID
    appId: "1:123456789:web:abcdef..." // Replace with your actual app ID
};

    // Initialize Firebase
    if (typeof firebase !== 'undefined') {
        firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore();
    }

    // Cloud-based leaderboard functions
    class CloudLeaderboard {
        constructor() {
            this.db = db;
        }

        async saveScore(gameType, player, score, time, accuracy) {
            if (!this.db) return;
            
            try {
                const scoreData = {
                    player: player,
                    score: score,
                    time: time,
                    accuracy: accuracy,
                    date: new Date().toISOString(),
                    gameType: gameType
                };

                await this.db.collection('scores').add(scoreData);
            } catch (error) {
                console.error('Error saving score:', error);
            }
        }

        async getLeaderboard(gameType) {
            if (!this.db) return [];

            try {
                const snapshot = await this.db.collection('scores')
                    .where('gameType', '==', gameType)
                    .orderBy('score', 'desc')
                    .limit(50)
                    .get();

                return snapshot.docs.map(doc => doc.data());
            } catch (error) {
                console.error('Error getting leaderboard:', error);
                return [];
            }
        }

        async getAllLeaderboards() {
            if (!this.db) return {};

            try {
                const snapshot = await this.db.collection('scores').get();
                const scores = snapshot.docs.map(doc => doc.data());
                
                const leaderboards = {};
                scores.forEach(score => {
                    if (!leaderboards[score.gameType]) {
                        leaderboards[score.gameType] = [];
                    }
                    leaderboards[score.gameType].push(score);
                });

                // Sort each game type by score
                Object.keys(leaderboards).forEach(gameType => {
                    leaderboards[gameType].sort((a, b) => b.score - a.score);
                });

                return leaderboards;
            } catch (error) {
                console.error('Error getting all leaderboards:', error);
                return {};
            }
        }
    }

    // Initialize cloud leaderboard
    const cloudLeaderboard = new CloudLeaderboard();
