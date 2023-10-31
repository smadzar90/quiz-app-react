import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useNavigate } from 'react-router-dom';
import '../media_queries/mobile_design.css';


function Stats() {

  const score = useSelector((state) => state.score);
  const questions = useSelector((state) => state.quiz_amount);
  const acc = Number(score / questions * 100).toFixed(1);

  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/')
  }

  return (
    <div className='formBox'>
      <h3>STATS</h3>
      <div className='stats'>
        <div className='row'>
          <label className='question'>Total questions </label>
          <label className='circle'>{questions}</label>
        </div>
        <div className='row'>
          <label className='question'>Correct answers</label>
          <label className='circle'>{score}</label>
        </div>
        <div className='row'>
          <label className='question'>Incorrect answers</label>
          <label className='circle'>{questions - score}</label>
        </div>
        <div className='row'>
          <label className='question'>Accuracy</label>
          <label className='circle procS'>{acc}%</label>
        </div>
      </div>
      <button className='submitButton' onClick={handleClick}>Return</button>
    </div>
  );
}

export default Stats;