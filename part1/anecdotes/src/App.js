import React, { useState } from 'react';

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [mostVoted, setMostVoted] = useState(0);

  const handleSelected = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const indexOfMax = (arr) => {
    if (arr.length === 0) {
      return 0;
    }

    let max = arr[0];
    let maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        maxIndex = i;
        max = arr[i];
      }
    }

    return maxIndex;
  };

  const handleVote = () => {
    const copy = [...votes];
    copy[selected]++;
    setVotes(copy);
    setMostVoted(indexOfMax(copy));
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {anecdotes[selected]} <br />
        has {votes[selected]} votes <br />
        <Button handleClick={handleVote} text="vote" />
        <Button handleClick={handleSelected} text="next anecdote" />
      </p>
      <h1>Anecdote with most votes</h1>
      <p>
        {anecdotes[mostVoted]} <br />
        has {votes[mostVoted]} votes <br />
      </p>
    </div>
  );
};

export default App;
