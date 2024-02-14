import { MonthlyDayTask } from '../../../allComponents'
import 'bootstrap';

type Props = {
  day: string,
  outsideCurrentMonth: boolean
}


const MonthlyDay = (props: Props) => {
  const outsideMonth = (): string => {
    if (props.outsideCurrentMonth) {
      return 'outsideMonth';
    }
    else {
      return '';
    }
  }

  return (
    <div className={outsideMonth()}>
      <p>{props.day}</p>
      <div>
        <MonthlyDayTask taskName='Nema taska'/>
      </div>
    </div>
  )
};

export default MonthlyDay;