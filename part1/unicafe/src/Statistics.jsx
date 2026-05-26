import StatisticsLine from "./StatisticsLine"

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
            <table>
                <tbody>
                    <StatisticsLine text="Good" value={props.good} />
                    <StatisticsLine text="Neutral" value={props.neutral} />
                    <StatisticsLine text="Bad" value={props.bad} />

                    <StatisticsLine text="All" value={props.all} />
                    <StatisticsLine text="Average" value={props.average} />
                    <StatisticsLine text="Positive" value={`${props.positive} %`} />
                </tbody>
            </table>
        </div>
)}

export default Statistics
