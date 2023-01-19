import Transaction from '../Transaction';
const TableBody = ({ month, monthlyPoints, MonthlyPointEarnedText, index }) => {
    return (
        <tbody>
              {month.map(transaction => (
                <Transaction key={transaction.date} date={transaction.date} amount={transaction.amount} points={transaction.points} />
              ))}
              <tr> <th colspan="3">
               {MonthlyPointEarnedText} : {monthlyPoints[index]}
              </th>
              </tr>
            </tbody>
    );
  }
  export default TableBody;
  