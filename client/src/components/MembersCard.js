import "./MembersCard.css";

function MembersCard(props) {
    const {changeStatus} = props;
    return (
        <div className="member">
            <label>דוא״ל: {props.members.email}</label>
            <label>פעיל: {""+props.members.active}</label>
            <button onClick={(e) => { changeStatus(props) }}>חסום/ביטול חסימה</button>
        </div>
    );
}

export default MembersCard;
