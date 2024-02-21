import React, { FC, ReactElement, ReactNode } from 'react';
// CSS

// Bootstrap
import 'bootstrap';

// Components

// Ostalo
import { funcVariables } from '../../Variables';
import {WeeklyDay} from '../../allComponents';

// Interfaces and Types
type Props = {}


const WeeklyView = (props: Props) => {
  // Variables
  const weekDays = funcVariables.weekDays;

  const renderTableRow = () => {
    let allRows = []
    for (let i = 0; i <= 24; i++) {
      allRows.push(<tr key={i}>{renderTableCols(i)}</tr>)
    }
    return allRows
  }

  const renderTableCols = (i: number) => {
    let allCols = [];
    for(let j = 0; j <=7; j++){
      if(j===0){
        allCols.push(<td>{`${i}:00`}</td>)
      }
      else{
        allCols.push(<td><WeeklyDay /></td>)
      }
    }

    return allCols;
  }

  return (
    <div className='weekly-view'>

      <table>
        <thead>
          <th></th>
          {weekDays.map((day) => <th>{day}</th>)}
        </thead>
        <tbody>
          {renderTableRow()}
        </tbody>
      </table>
    </div>
  )
}

export default WeeklyView;