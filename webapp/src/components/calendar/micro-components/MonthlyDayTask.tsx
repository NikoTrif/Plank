import React from 'react'

type Props = {
    taskName?: string
}

const MonthlyDayTask: React.FC = (props: Props) => {
  return (
    <div>{props.taskName}</div>
  )
}

export default MonthlyDayTask;