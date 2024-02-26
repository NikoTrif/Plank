import React, { FC, ReactElement, ReactNode, useEffect } from 'react';
// CSS
import '../../styles/weekly-view.scss';

// Bootstrap
import 'bootstrap';

// Components

// Ostalo
import { funcVariables } from '../../Variables';
import { CalendarNavButtons, WeeklyDay } from '../../allComponents';
import * as fns from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { selectDate } from '../../slices';

// Interfaces and Types
type Props = {}


const WeeklyView = (props: Props) => {
  // Variables
  const { weekDays, today } = funcVariables;
  const dispatch = useDispatch();
  const selectedDate = useSelector((state: any) => state.selectedDate);

  const startOfWeek = fns.addDays(fns.startOfWeek(selectedDate), 1);

  const renderDates = (): string[][] => {
    let weekdates: string[][] = [];
    
    for (let i = 0; i < 7; i++) {
      weekdates.push(fns.format(fns.addDays(startOfWeek, i), 'EEE,dd.MM.yyyy').split(','));
    }

    return weekdates;
  }  

  const renderTableRow = () => {
    let allRows = []
    for (let i = 0; i < 24; i++) {
      allRows.push(<tr key={i}>{renderTableCols(i)}</tr>)
    }

    return allRows
  }

  const renderTableCols = (i: number) => {
    let allCols = [];
    for (let j = 0; j <= 7; j++) {
      if (j === 0) {
        allCols.push(<th scope='row' className='weekly-time' key={`${i}${j}`}>{`${i}:00`}</th>)
      }
      else {
        allCols.push(<td key={`${i}${j}`}><WeeklyDay /></td>)
      }
    }

    return allCols;
  }

  const btnBckClick = () => {
    dispatch(selectDate(fns.subWeeks(startOfWeek, 1)));
  }

  const btnTodayClick = () => {
    dispatch(selectDate(today));
  }

  const btnFwdClick = () => {
    dispatch(selectDate(fns.addWeeks(startOfWeek, 1)));
  }

  return (
    <div className='weekly-view'>
      <CalendarNavButtons btnBckClick={btnBckClick} btnFwdClick={btnFwdClick} btnTodayClick={btnTodayClick} />

      <div className='week-plan'>
        <table className='table'>
          <thead>
            <tr>
              <th></th>
              {renderDates().map((day, index) => <th scope='col' key={index * 100}>{day[0]}<span className='weekdate'>{day[1]}</span></th>)}
            </tr>
          </thead>
          <tbody>
            {renderTableRow()}
          </tbody>
        </table>
            </div>
      </div>
  )
}

export default WeeklyView;