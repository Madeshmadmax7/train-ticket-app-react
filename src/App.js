import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import BookTickets from './components/BookTickets';
import SearchTrains from './components/SearchTrains';
import TrainMap from './components/TrainMap';
import RouteSearch from './components/RouteSearch';
import SeatSelection from './components/SeatSelection';
import TicketConfirmation from './components/TicketConfirmation';
import UserAccount from './components/UserAccount';
import Notifications from './components/Notifications';
import './App.css';

function App() {
  return (
    <Router basename="/train-ticket-app-react">
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-tickets" element={<BookTickets />} />
          <Route path="/search-trains" element={<SearchTrains />} />
          <Route path="/train-map" element={<TrainMap />} />
          <Route path="/route-search" element={<RouteSearch />} />
          <Route path="/seat-selection" element={<SeatSelection />} />
          <Route path="/ticket-confirmation" element={<TicketConfirmation />} />
          <Route path="/user-account" element={<UserAccount />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
