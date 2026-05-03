class User {
    constructor(name) {
        this.name = name;
        this.history = [];
    }

    addActivity(topic, level) {
        this.history.push({
            topic,
            level,
            date: new Date()
        });
    }

    getPreferences() {
        const freq = {};

        this.history.forEach(item => {
            const key = item.topic + "-" + item.level;
            freq[key] = (freq[key] || 0) + 1;
        });

        return freq;
    }
}

module.exports = User;
