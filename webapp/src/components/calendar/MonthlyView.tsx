import { useState } from 'react';
import { startOfMonth, endOfMonth, format, addDays, subDays, eachDayOfInterval, addMonths, subMonths } from 'date-fns';
// Components
import { MonthlyDay } from '../../allComponents';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';
// CSS
import 'bootstrap';
import '../../styles/monthly-view/monthly-view.scss';

const MonthlyView: React.FC = () => {


    const [currentDate, setCureentDate] = useState(new Date);
    const today = new Date();
    const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const btnBckClick = () => {
        setCureentDate(subMonths(startOfMonth(currentDate), 1));
    }
    const btnTodayClick = () => {
        setCureentDate(today);
    }
    const btnFwdClick = () => {
        setCureentDate(addMonths(startOfMonth(currentDate), 1));
    }


    const calendarStartDate = () => {
        let startDate = startOfMonth(currentDate);
        while (startDate.getDay() !== 1) {
            startDate = subDays(startDate, 1);
        }

        return startDate.toDateString();
    }

    const calendarEndDate = () => {
        let endDate = endOfMonth(currentDate);

        while (endDate.getDay() !== 0) {
            endDate = addDays(endDate, 1);
        }

        return endDate.toDateString();
    }

    const calendarDates = () => {
        const daysInMonth = eachDayOfInterval({
            start: calendarStartDate(),
            end: calendarEndDate()
        });

        return daysInMonth;
    }

    return (
        <div className='month'>
            <h2 className='text-center'>{format(currentDate, 'MMMM yyyy')}</h2>
            <div className='nav-btns'>
                <button onClick={btnBckClick} className='arrow'><ArrowLeft /></button>
                <button onClick={btnTodayClick}>{"Today"}</button>
                <button onClick={btnFwdClick} className='arrow'><ArrowRight /></button>
            </div>
            <div className='row row-cols-7 calendar'>
                {weekDays.map((day, index) => <div className='col text-center weekDays' key={index + 100}>{day}</div>
                )}
                {calendarDates().map((day, index) => {
                    return (
                        <button className='col day' key={index}>
                            <MonthlyDay day={format(day, 'd').toString()} outsideCurrentMonth={currentDate.getMonth() !== day.getMonth() ? true : false} />
                        </button>
                    );
                })} {/* potrebno dodati onClick funkciju koja otvara dailyView na taj dan */}
            </div>
        </div>
    );
}

export default MonthlyView;