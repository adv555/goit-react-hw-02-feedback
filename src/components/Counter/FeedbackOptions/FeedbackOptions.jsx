import React from 'react';
import s from 'components/Counter/FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, addFeedback }) => {
  return options.map(option => {
    return (
      <label key={option}>
        <input
          type="submit"
          className={s.cornerButton}
          name={option}
          value={option}
          onClick={addFeedback}
        />
      </label>
    );
  });
};

export default FeedbackOptions;
