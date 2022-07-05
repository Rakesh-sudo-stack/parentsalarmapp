const Announcecard = (props) => {
    return(
        <div className="announcement">
            <div className="work">{props.work}</div>
            <div className="date">{props.date}</div>
            <div className="time">{props.time}</div>
        </div>
    )
}

export default Announcecard;