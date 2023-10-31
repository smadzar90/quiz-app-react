import React from 'react';
import { useState } from 'react';
import './components_styles.css';
import { useDispatch } from 'react-redux';
import { change_amount } from '../redux/quizActions';
import { useEffect } from 'react';


function NumberBox() {

    const [numVal, setNumVal] = useState(10);
    const dispatch = useDispatch();

    useEffect(() => {
          dispatch(change_amount(10));
    }, [dispatch]);

    const handleChange = (event) => {
      setNumVal(event.target.value);
      dispatch(change_amount(event.target.value));
    }
    
    return (
       <input type="number" 
              className='numberField'
              min={1} 
              max={50} 
              placeholder="Amount of Questions:"
              onChange={handleChange}
              value={numVal}
              required>
       </input>
    )
}

export default NumberBox;