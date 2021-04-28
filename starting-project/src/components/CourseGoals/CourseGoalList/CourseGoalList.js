import React from 'react';

// CSS
import './CourseGoalList.css';

// JSX
import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';

const CourseGoalList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <CourseGoalItem
          id={goal.id}
          key={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
