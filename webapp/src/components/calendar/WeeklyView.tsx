import React, { FC, ReactElement, ReactNode } from 'react';
// CSS

// Bootstrap
import 'bootstrap';

// Components

// Ostalo
import { funcVariables } from '../../Variables';
import { CalendarNavButtons, WeeklyDay } from '../../allComponents';
import * as fns from 'date-fns';

// Interfaces and Types
type Props = {}


const WeeklyView = (props: Props) => {
  // Variables
  const weekDays = funcVariables.weekDays;

  // const renderTableRow = () => {
  //   let allRows = []
  //   for (let i = 0; i < 24; i++) {
  //     allRows.push(<tr key={i}>{renderTableCols(i)}</tr>)
  //   }
  //   return allRows
  // }

  // const renderTableCols = (i: number) => {
  //   let allCols = [];
  //   for(let j = 0; j <=7; j++){
  //     if(j===0){
  //       allCols.push(<td className='weekly-time'>{`${i}:00`}</td>)
  //     }
  //     else{
  //       allCols.push(<td><WeeklyDay /></td>)
  //     }
  //   }

  //   return allCols;
  // }

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

  return (
    <div className='weekly-view'>
      <CalendarNavButtons btnBckClick={() => { }} btnFwdClick={() => { }} btnTodayClick={() => { }} />

      <table className='table'>
        <thead>
          <tr>
            <th></th>
            {weekDays.map((day, index) => <th scope='col' key={index*100}>{day}</th>)}
          </tr>
        </thead>
        <tbody>
          {renderTableRow()}
        </tbody>
      </table>
    </div>
  )
}

export default WeeklyView;