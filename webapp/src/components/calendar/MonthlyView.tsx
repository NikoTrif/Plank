import { format } from 'date-fns';

const MonthlyView: React.FC = () => {


    const currentDate = new Date();

    return ( 
        <div>
            <h2>{format(currentDate, 'MMMM yyyy')}</h2>
            <div>
                <button>{"<"}</button>
                <button>{">"}</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                        <th>Sun</th>
                    </tr>
                </thead>
            </table>
        </div>
     );
}

export default MonthlyView;