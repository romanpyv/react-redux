import React from 'react';
import './styles.css';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@material-ui/core";

export default function Question({answer = -1, disabled, index, text, onAnswer, variants}) {
  return (
    <div className='question-container'>
      <FormControl component="fieldset">
        <FormLabel component="legend">{index + 1 + '. ' + text}</FormLabel>
        <RadioGroup value={answer} onChange={onAnswer}>
          {variants.map(i => (
            <FormControlLabel key={i.text} value={i.value} control={<Radio/>} label={i.text} disabled={disabled}/>
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}
