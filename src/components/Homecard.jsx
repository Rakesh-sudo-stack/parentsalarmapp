const Homecard = (props) => {
    return(
        <div className="homework">
            <div className="work">{props.work}</div>
            <div className="date">{props.date}</div>
            <div className="time">{props.time}</div>
        </div>
    )
}

export default Homecard;