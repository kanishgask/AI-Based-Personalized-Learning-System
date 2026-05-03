import React from "react";

function RecommendationCard({ course }) {
    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9"
        }}>
            <h3>{course.title}</h3>
            <p><strong>Topic:</strong> {course.topic}</p>
            <p><strong>Level:</strong> {course.level}</p>
        </div>
    );
}

export default RecommendationCard;
