const Transaction = ({ date, amount, points }) => {
  return (
    <tr>
      <td> {date}</td>
      <td> ${amount}</td>
      <td> {points}</td>
    </tr>
  );
}
export default Transaction;
