const Statistics = (props) => {
    if (props.all === 0) {
        return (
            <div>
                <h2>Statistics</h2>
                <p>No feedback given</p>
            </div>
        )
    }

    return (
        <div>
            <h2>Statistics</h2>

            <div>
                <p>Good: {props.good}</p>
                <p>Neutral: {props.neutral}</p>
                <p>Bad: {props.bad}</p>

                <p>All: {props.all}</p>
                <p>Average: {props.average}</p>
                <p>Positive: {props.positive} %</p>
            </div>
        </div>
)}

export default Statistics