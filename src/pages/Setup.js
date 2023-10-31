import './page_styles.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SelectBox from '../components/SelectBox';
import NumberBox from '../components/NumberBox';
import GetDataFromApi from '../hooks/axios';
import { useState } from 'react';
import '../media_queries/mobile_design.css';


function Setup() {

  const [trivia_categories, setTriviaCategories] = useState([])
  const { response, error } = GetDataFromApi("api_category.php")

  let navigate = useNavigate();

  useEffect(() => {
    if (response) {
      setTriviaCategories(response.data.trivia_categories);
    }
  }, [response]);

  const trivia_type = [
     {id: "multiple", name: "Multiple Choice"},
     {id: "boolean", name: "True / False"}
  ]

  const trivia_difficulty = [
    {id: "easy", name: "Easy"},
    {id: "medium", name: "Medium"},
    {id: "hard", name: "Hard"}
  ]
  
  if(error) {
    return <label>Error occured while fetching the data!</label>
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/questions")
  };

  return (
    <form className='formBox' onSubmit={handleSubmit}>
      <h3>Setup Quiz</h3>
      <NumberBox />
      <SelectBox name="Category" options={trivia_categories}/>
      <SelectBox name="Type" options={trivia_type}/>
      <SelectBox name="Difficulty" options={trivia_difficulty}/>
      <button onSubmit={handleSubmit} className='submitButton'>Start</button>
    </form>
  );
}

export default Setup;