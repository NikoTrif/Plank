import { useEffect, useState } from 'react';
// CSS
import '../../styles/monthly-view/monthly-view.scss';
// Bootstrap
import 'bootstrap';
// Components
import { MonthlyDay, CalendarNavButtons } from '../../allComponents';
// Ostalo
import { startOfMonth, endOfMonth, format, addDays, subDays, eachDayOfInterval, addMonths, subMonths, DateValues } from 'date-fns';
import { funcVariables } from '../../Variables';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { selectDate } from '../../slices';
import { RootState } from '../../store';

const MonthlyView: React.FC = () => {
    const dispatch = useDispatch();
    const selectedDate = useSelector((state: any) => state.selectedDate);

    const { weekDays, today } = funcVariables;

    const btnBckClick = () => {
        dispatch(selectDate(subMonths(startOfMonth(selectedDate), 1)));
    }
    const btnTodayClick = () => {
        dispatch(selectDate(today));
    }
    const btnFwdClick = () => {
        dispatch(selectDate(addMonths(startOfMonth(selectedDate), 1)));
    }


    const calendarStartDate = () => {
        let startDate = startOfMonth(selectedDate);
        while (startDate.getDay() !== 1) {
            startDate = subDays(startDate, 1);
        }

        return startDate.toDateString();
    }

    const calendarEndDate = () => {
        let endDate = endOfMonth(selectedDate);

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
            <h2 className='text-center'>{format(selectedDate, 'MMMM yyyy')}</h2>
            <CalendarNavButtons btnBckClick={btnBckClick} btnFwdClick={btnFwdClick} btnTodayClick={btnTodayClick} />

            <div className='row row-cols-7'>
                {weekDays.map((day, index) => <div className='col text-center weekDays' key={index + 100}>{day}</div>
                )}
                {calendarDates().map((day, index) => {
                    return (
                        <button className={selectedDate.getMonth() !== day.getMonth() ? 'col btn btn-outline-secondary' : 'col btn btn-outline-primary'} key={index}> {/**col day */}
                            <MonthlyDay day={format(day, 'd').toString()} />
                        </button>
                    );
                })} {/* potrebno dodati onClick funkciju koja otvara dailyView na taj dan */}
            </div>
        </div>
    );
}

export default MonthlyView;