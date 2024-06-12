import logo from './logo.svg';
import './App.css';
import AddTicket from './components/AddTicket';
import SearchTicket from './components/SearchTicket';
import ViewAll from './components/ViewAll';
import DeleteTicket from './components/DeleteTicket';

function App() {
  return (
    <div>
      <AddTicket/>
      <SearchTicket/>
      <DeleteTicket/>
      <ViewAll/>
      
    </div>
  );
}

export default App;
