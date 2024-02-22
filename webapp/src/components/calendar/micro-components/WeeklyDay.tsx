import React from 'react';
import { WeeklyDayTask } from '../../../allComponents';

type Props = {}

const WeeklyDay = (props: Props) => {
  return (
    <div>
      day
      <WeeklyDayTask />
    </div>
  )
}

export default WeeklyDay;