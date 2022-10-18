import './App.scss';
import Balance from './Components/Balance';
import Form from './Components/Form';
import History  from './Components/History';

function App() {
    return (
        <div className="App">
            <header>
                <h1>Expense Tracker</h1>
            </header>
            <div className='main grid'>
                <div className="balance-and-history">
                    <Balance/>
                    <History/>
                </div>
                <Form/>
            </div>
        </div>
    );
}

export default App;
