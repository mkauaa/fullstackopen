import { useState } from 'react'
import Statistics from './Statistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = all === 0 ? 0 : (good - bad) / all
  const positive = all === 0 ? 0 : (good / all) * 100

  return (
    <div>
      <h1>Feedback</h1>
      
      <div>
        <button onClick={() => setGood(good + 1)}>
          Good
        </button>
        <button onClick={() => setNeutral(neutral + 1)}>
          Neutral
        </button>
        <button onClick={() => setBad(bad + 1)}>
          Bad
        </button>
      </div>
      
    <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      all={all}
      average={average}
      positive={positive}
    />

    </div>
  )
}

export default App
