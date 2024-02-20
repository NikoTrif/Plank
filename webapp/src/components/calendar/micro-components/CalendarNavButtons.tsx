import React from 'react';
// Bootstrap
import 'bootstrap';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';
// Ostalo

type Props = {
    btnBckClick: React.MouseEventHandler<HTMLButtonElement>;
    btnTodayClick: React.MouseEventHandler<HTMLButtonElement>,
    btnFwdClick: React.MouseEventHandler<HTMLButtonElement>
}

const CalendarNavButtons = (props: Props) => {
  return (
    <div className='nav-btns'>
                <button onClick={props.btnBckClick} className='arrow btn btn-primary'><ArrowLeft /></button>
                <button onClick={props.btnTodayClick} className='btn btn-primary'>{"Today"}</button>
                <button onClick={props.btnFwdClick} className='arrow btn btn-primary'><ArrowRight /></button>
            </div>
  )
}

export default CalendarNavButtons;