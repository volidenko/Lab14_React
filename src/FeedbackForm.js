import React, {useState} from "react";

export default function FeedbackForm() {
    let [categoryState, setCategoryState]=useState("Phones");
    let [feedbackState, setFeedbackState]=useState("");

    const handleCategoryChange=e=>{
        setCategoryState(e.target.value)
    }
    const handleFeedbackChange=e=>{
        setFeedbackState(e.target.value)
    }
    const handleSubmit=e=>{
        e.preventDefault();
        alert(`Вы отправили отзыв по категории: ${categoryState}:${feedbackState}`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label>Выберите категорию, по которой хотите оставить отзыв</label><br/>
            <select value={categoryState} onChange={handleCategoryChange}>
                <option>Phones</option>
                <option>TV</option>
                <option>Notebooks</option>
            </select>
            </div>
            <textarea cols="40" rows="20" value={feedbackState} onChange={handleFeedbackChange}></textarea>
            <input type="submit" value="Отправить отзыв"></input>
        </form>
    )
}