import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const scores = [
  { id: 1, score: '5-4', winner: 'Los Angeles Dodgers', loser: 'Detroit Tigers' },
  { id: 2, score: '3-1', winner: 'Houston Astros', loser: 'New York Mets' },
  { id: 3, score: '4-2', winner: 'Seattle Mariners', loser: 'Oakland Athletics' },
  { id: 4, score: '7-3', winner: 'Philadelphia Phillies', loser: 'Washington Nationals' },
  { id: 5, score: '5-2', winner: 'Boston Red Sox', loser: 'Texas Rangers' }
];

const eliteEightPicks = [
  { id: 1, team: 'Auburn', region: 'South', correct: true },
  { id: 1, team: 'Michigan State', region: 'South', correct: true },
  { id: 1, team: 'Florida', region: 'West', correct: true },
  { id: 1, team: 'St Johns', region: 'West', correct: false },
  { id: 1, team: 'Duke', region: 'East', correct: true },
  { id: 1, team: 'Alabama', region: 'East', correct: true },
  { id: 1, team: 'Purdue', region: 'Midwest', correct: false },
  { id: 1, team: 'Tennessee', region: 'Midwest', correct: true }
];

function Scoreboard() {
  const scoresList = scores.map(game =>
    <li
      key={game.id}
    >
      Score: {game.score} Winner: {game.winner} Loser: {game.loser}
    </li>
  );
  return (
    <>
      <h2>MLB Opening Day Scores:</h2>
      <ul>{ scoresList }</ul>
    </>
  );
}

function BaseballButton() {
  return (
    <button onClick={() => window.location.href = 'https://www.mlb.com/tv'}>
      Watch some baseball here!!
    </button>
  )
}

function MyEliteEight() {
  const picks = eliteEightPicks.map(pick =>
    <li
      key={pick.id}
      style={{
        color: pick.correct ? 'green' : 'red',
        fontSize: pick.correct ? '1.2em' : '1em'
      }}
    >
      Team: {pick.team} || Region: {pick.region}
    </li>
  );
  return (
    <>
      <h2>My March Madness Elite Eight Picks:</h2>
      <ul>{ picks }</ul>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React Web Page</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Scoreboard />
      <BaseballButton />
      <MyEliteEight />
    </>
  )
}

export default App
