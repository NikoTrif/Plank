import { MonthlyDayTask } from '../../../allComponents'
import 'bootstrap';
import '../../../styles/bootstrap-darkly.css';

type Props = {
  day: string
}


const MonthlyDay = (props: Props) => {
  return (
    <div>
      <p>{props.day}</p>
      <div>
        <MonthlyDayTask taskName='Nema taska' />
      </div>
    </div>
  )
};

export default MonthlyDay;