import './components_styles.css';
import { useDispatch } from 'react-redux';
import { change_category, change_difficulty, change_type } from '../redux/quizActions';
import { useEffect } from 'react';


function SelectBox(props) {
  
  const dispatch = useDispatch();

  useEffect(() => {
        dispatch(change_difficulty(''));
        dispatch(change_category(''));
        dispatch(change_type(''));
  }, [dispatch]);

  const handleChange = (event) => {
    
    switch(props.name) {
      case "Difficulty":
        dispatch(change_difficulty(event.target.value));
        break;
      case "Category":
        dispatch(change_category(event.target.value));
        break;
      case "Type":
        dispatch(change_type(event.target.value));
        break;
      default:
        break;
    }
  }

  return (
    <select onChange={handleChange} className='selectField'>
      <option key={props.name} value="">
          Any {props.name}
      </option>
      {props.options.map((option) => (
        <option key={option.id} value={option.id}>{option.name}</option>
      ))}
    </select>
  )
}

export default SelectBox;