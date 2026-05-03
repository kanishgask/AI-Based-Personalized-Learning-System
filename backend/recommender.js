const { courses } = require("./data");

function getRecommendations(level, topic) {
    let filtered = courses.filter(course => 
        course.level === level && course.topic === topic
    );

    // fallback if nothing found
    if (filtered.length === 0) {
        filtered = courses.filter(course => course.topic === topic);
    }

    return filtered;
}

module.exports = { getRecommendations };
