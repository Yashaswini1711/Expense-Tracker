import ExpensesByDateRange from '../components/ExpensesByDateRange';
import ChartContainer from '../components/ChartContainer';
import './../styles/AnalyticsPage.css'; // Import the CSS file

function AnalyticsPage() {
  return (
    <div className="card-container p-4">
      <div className="row">
        <div className="col">
          <h2>Expenses Analysis</h2>
          <ExpensesByDateRange />
        </div>
        {/* <div className="col-4">
          <ChartContainer />
        </div> */}
      </div>
    </div>
  );
}

export default AnalyticsPage;
