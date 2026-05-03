import React, { useState } from "react";
import axios from "axios";

function LearningForm() {
    const [level, setLevel] = useState("");
    const [topic, setTopic] = useState("");
    const [results, setResults] = useState([]);

    const handleSubmit = async () => {
        const res = await axios.post("http://localhost:5000/recommend", {
            level,
            topic
        });
        setResults(res.data);
    };

    return (
        <div>
            <select onChange={(e) => setLevel(e.target.value)}>
                <option>Select Level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
            </select>

            <select onChange={(e) => setTopic(e.target.value)}>
                <option>Select Topic</option>
                <option value="DSA">DSA</option>
                <option value="Web">Web</option>
            </select>

            <button onClick={handleSubmit}>Get Recommendations</button>

            <ul>
                {results.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default LearningForm;
