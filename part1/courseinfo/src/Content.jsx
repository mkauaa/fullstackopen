import Part from './Part'

const Content = (props) => {
    return (
        <div>
            <Part name={props.parts[0].name} quantity={props.parts[0].exercises} />
            <Part name={props.parts[1].name} quantity={props.parts[1].exercises} />
            <Part name={props.parts[2].name} quantity={props.parts[2].exercises} />
        </div>
    )
    
}

export default Content