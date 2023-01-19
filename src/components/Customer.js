
import TableHeader from './Table/TableHeader';
import TableBody from './Table/TableBody';

const Customer = ({ transactions }) => {
  const DateText = 'Date';
  const AmountText='Amount';
  const PointsEarnedText= 'Points Earned';
  const MonthText ='Month';
  const MonthlyPointEarnedText = 'Points Earned';
  const TotalPointsEarned = 'Total Points Earned';
  const TransactionsByMonth ='Transactions by Month:';

  // group transactions by month
  const transactionsByMonth = transactions.reduce((months, transaction) => {
    const month = new Date(transaction.date).getMonth();
    if (!months[month]) {
      months[month] = [];
    }
    months[month].push(transaction);
    return months;
  }, []);

  // calculate total points earned by month
  const monthlyPoints = transactionsByMonth.map(month =>
    month.reduce((totalPoints, transaction) => totalPoints + transaction.points, 0)
  );

  // calculate total points earned
  const totalPoints = transactions.reduce((total, transaction) => total + transaction.points, 0);

  return (
    <div>
      <h1> {TransactionsByMonth} </h1>
      {transactionsByMonth.map((month, index) => (
        <div key={index}>
          <h3 class="text-center">{MonthText} {index + 1}</h3>
          <table class="table table-striped table-responsive">
            <TableHeader DateText={DateText} AmountText={AmountText} PointsEarnedText={PointsEarnedText}/>
            <TableBody  month ={month} monthlyPoints = {monthlyPoints} MonthlyPointEarnedText ={MonthlyPointEarnedText} index ={index}/>
          </table>
        </div>
      ))}
      <div>
        <span class="font-weight-bold">
          {TotalPointsEarned}: {totalPoints}
        </span></div>
    </div>
  );
}
export default Customer;
