import GetDataFromApi from '../hooks/axios';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import spinner from '../images/ZKZg.gif'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { change_score, score_to_zero } from '../redux/quizActions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import '../media_queries/mobile_design.css';


function Questions() {
  
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(score_to_zero())
  }, [dispatch]);



  const quizState = {
    amount: useSelector((state) => state.quiz_amount),
    difficulty: useSelector((state) => state.quiz_difficulty),
    category: useSelector((state) => state.quiz_category),
    type: useSelector((state) => state.quiz_type)
  }

  const url = `api.php?amount=${quizState.amount}` +
    (quizState.category ? `&category=${quizState.category}` : '') +
    (quizState.difficulty ? `&difficulty=${quizState.difficulty}` : '') +
    (quizState.type ? `&type=${quizState.type}` : '');

  const {response, error, loading} = GetDataFromApi(url);
  const [questionNum, setQuestionNum] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [clickedItem, setClickedItem] = useState(null)
  const he = require('he');

  if(error) {
    return <label>Error occured while fetching the data!</label>
  }

  if(loading) {
    return (
      <img src={spinner} alt='Loading...' width={'25px'}></img>
    );
  }

  const handleClick = () => {

    if(questionNum === quizState.amount - 1) {
      navigate("/stats");
    }
    else {
      setQuestionNum(questionNum + 1);
    }

    setButtonClicked(false);
  };

  const optionClicked = (answer, item) => {

    if(!buttonClicked) {
      
      if(answer === item) {
        dispatch(change_score());
      }
      setButtonClicked(true);
      setClickedItem(item)
    }
  };

  

  if(response) {
    const answerArray = response.data.results[questionNum].incorrect_answers;
    
    let random;
    if(answerArray.length === 3) {
      random = Math.floor(Math.random() * 4)
      answerArray.splice(random, 0, response.data.results[questionNum].correct_answer)
    }
    else if(answerArray.length === 1) { 
      if(answerArray[0] === 'True') {
        answerArray.splice(1, 0, response.data.results[questionNum].correct_answer)
      }
      else {
        answerArray.splice(0, 0, response.data.results[questionNum].correct_answer)
      }
    }

 
    
    return (
      <div className='divBox'>
        <h3 className='heading'>Quiz Up</h3>
        <div className='statsQ'>
          <label className='info'>Question {questionNum + 1} of {quizState.amount}</label>
          <label className='info'>
            {response.data.results[questionNum].category} <br></br>
            ({response.data.results[questionNum].difficulty})
          </label>
        </div>
        <label className='questionL'>{he.decode(response.data.results[questionNum].question)}</label>
        <div className='divQ'>
          <div className='grid'>
            {answerArray.map((item, index) => (
              <div key={index} onClick={() => optionClicked(response.data.results[questionNum].correct_answer, item)}
                className={`grid-item ${buttonClicked ? (item === response.data.results[questionNum].correct_answer) 
                ? 'correct-ans noHover' : (item === clickedItem) ? 'incorrect-ans noHover' : 'noHover' : null }`}>
                  {he.decode(item)}
              </div>
            ))}
          </div>
        </div>
        { buttonClicked ? (
          <button className='next_button' onClick={handleClick}>Next</button>
        ) :
        (
          null
        )}
      </div>
    );
  }
}

export default Questions;