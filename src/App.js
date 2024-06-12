import logo from './logo.svg';
import './App.css';
import AddTicket from './components/AddTicket';
import SearchTicket from './components/SearchTicket';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <AddTicket/>
      <SearchTicket/>
      <ViewAll/>
      
    </div>
  );
}

export default App;
