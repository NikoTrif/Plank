import React from 'react'

type Props = {
    taskName?: string
}

const MonthlyDayTask = (props: Props) => {
  return (
    <div>{props.taskName}</div>
  )
}

export default MonthlyDayTask;