const TableHeader = ({ DateText, AmountText, PointsEarnedText }) => {
    return (
        <thead>
        <tr>
          <th scope="col">{DateText}</th>
          <th scope="col">{AmountText}</th>
          <th scope="col">{PointsEarnedText}</th>
        </tr>
      </thead>
    );
  }
  export default TableHeader;
  