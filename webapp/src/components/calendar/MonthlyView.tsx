import * as fns from 'date-fns';

const MonthlyView: React.FC = () => {


    const currentDate = new Date();
    const weekDays = [0,1,2,3,4,5,6];
    const firstInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    
    const monthStartDate = () => {
        let startDate = firstInMonth;
            while(startDate.getDay() !== 1){
                fns.subDays(startDate, 1);
            }

            return startDate.toDateString();
    }


    const renderDay = () => {
        console.log(currentDate.getMonth());
        return (
            <tr>
                <td>{monthStartDate()}</td>
            </tr>
        )
    }

    return ( 
        <div>
            <h2>{fns.format(currentDate, 'MMMM yyyy')}</h2>
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
                <tbody>
                    {/* ovde ide funkcija koja vraca redove i podatke */}
                    {renderDay()}
                </tbody>
            </table>
        </div>
     );
}

export default MonthlyView;