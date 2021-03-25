import React from 'react';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';

function Q1({key, name, answers, handleSubmit}) {
    // console.log(questions)
    return(
        <>
        <b>Question 1</b>
            <div className='container'>
            <FormControl component="fieldset">
                <FormLabel component="legend">{name}
                </FormLabel>
                {answers.map(answer => {
                    return (
                        <RadioGroup 
                        key={key}
                        defaultValue='false' 
                        aria-label="question1" name={name} 
                        value='question1'
                        onChange={(e)=> handleSubmit(e, null, e.target.value, e.target.name)}> 
                        <FormControlLabel
                         
                        value={answer.value} 
                        control={<Radio />}
                        label={answer.answerText}/>
                </RadioGroup>
                    )
                })}
            </FormControl>
        </div>
        ))
        </>
    )
};
export default Q1;