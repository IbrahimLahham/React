import "./SuggestionCard.css";

function SuggestionCard(props) {
    const {changeSpam, changeStatus} = props;
    return (
        <div className="suggestion">
            <label>דוא״ל: {props.suggestions.submittedBy.email}</label>
            <label>תוכן: {props.suggestions.description}</label>
            <label>ספאם: {""+props.suggestions.isSpam}</label>
            <button onClick={(e) => { changeSpam(props) }}>ספאם/לא ספאם</button>
            <button onClick={(e) => { changeStatus(props) }}>חסימת משתמש/ ביטל חסימה</button>
        </div>
    );
}

export default SuggestionCard;
