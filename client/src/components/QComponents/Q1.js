import React from 'react';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';

function Q1({handleSubmit, SQuestions}) {
console.log(SQuestions[0].question)
    return(
        <>
        <b>Question 1</b>
            <div className='container'>
            <FormControl component="fieldset">
                <FormLabel component="legend">{SQuestions.question}
                </FormLabel>
                {SQuestions.answers.map(answer => {
                    return (
                        <RadioGroup 
                        key={SQuestions.key}
                        defaultValue='false' 
                        aria-label="question1" name={SQuestions.name} 
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