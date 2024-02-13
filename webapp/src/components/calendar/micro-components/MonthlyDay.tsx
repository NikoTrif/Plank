import { MonthlyDayTask } from '../../../allComponents'

type Props = {
  day?: number
}

const MonthlyDay: React.FC = (props: Props) => {
  return (
    <div>
        <p>{props.day}</p>
        <div>
          <MonthlyDayTask />
        </div>
    </div>
  )
};

export default MonthlyDay;