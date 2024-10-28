import React, { useState, useEffect } from 'react';
import './App.css';

const holidays = [
  { day: 1, name: "Wszystkich Świętych" },
  { day: 2, name: "Zaduszki" },
  { day: 3, name: "Dzień Dobroci dla Zwierząt" },
  { day: 4, name: "Dzień Taniego Wina" },
  { day: 5, name: "Dzień Postaci z Bajek" },
  { day: 6, name: "Dzień Świętego Leonarda" },
  { day: 7, name: "Międzynarodowy Dzień Pisania Listów" },
  { day: 8, name: "Dzień Zdrowego Śniadania" },
  { day: 9, name: "Światowy Dzień Wynalazcy" },
  { day: 10, name: "Dzień Młodzieży" },
  { day: 11, name: "Święto Niepodległości" },
  { day: 12, name: "Światowy Dzień Bicia Rekordów" },
  { day: 13, name: "Światowy Dzień Dobroci" },
  { day: 14, name: "Dzień Seniora" },
  { day: 15, name: "Dzień Rzucania Palenia" },
  { day: 16, name: "Dzień Tolerancji" },
  { day: 17, name: "Dzień Czarnego Kota" },
  { day: 18, name: "Dzień Myszki Miki" },
  { day: 19, name: "Dzień Toalet" },
  { day: 20, name: "Dzień Uprzemysłowienia Afryki" },
  { day: 21, name: "Światowy Dzień Życzliwości" },
  { day: 22, name: "Dzień Kredki" },
  { day: 23, name: "Dzień Licealisty" },
  { day: 24, name: "Dzień Buraka" },
  { day: 25, name: "Dzień Pluszowego Misia" },
  { day: 26, name: "Dzień Ciasta" },
  { day: 27, name: "Dzień Kolejarza" },
  { day: 28, name: "Dzień Podchorążego" },
  { day: 29, name: "Dzień Solidarności z Palestyńczykami" },
  { day: 30, name: "Andrzejki" },
];

const compliments = [
  "Masz piękny uśmiech!",
  "Jesteś wyjątkowa!",
  "Emanujesz ciepłem!",
  "Masz wspaniałe serce!",
  "Jesteś niezwykle silna!",
  "Masz świetny styl!",
  "Twoja radość zaraża!",
  "Jesteś niesamowicie inteligentna!",
  "Masz cudowne spojrzenie!",
  "Zawsze pomagasz innym!",
  "Emanujesz pewnością!",
  "Masz niesamowitą klasę!",
  "Twoja intuicja jest bezbłędna!",
  "Jesteś inspiracją!",
  "Masz piękną duszę!",
  "Twoje serce jest złote!",
  "Jesteś uosobieniem wdzięku!",
  "Masz w sobie magię!",
  "Jesteś niezastąpiona!",
  "Jesteś czarująca!",
  "Wnosisz światło do życia!",
  "Twoje piękno zachwyca!",
  "Zawsze jesteś sobą!",
  "Masz talent do wszystkiego!",
  "Jesteś wspaniałą przyjaciółką!",
  "Cudownie, że jesteś!",
  "Masz niezwykły wdzięk!",
  "Rozjaśniasz każdy dzień!",
  "Twoje serce jest skarbem!",
  "Jesteś po prostu wyjątkowa!"
];

function App() {
  useEffect(() => {
    document.title = 'Kalendarz listopada :)';
  }, []);

  const [currentDay, setCurrentDay] = useState(null);
  const [flippedDay, setFlippedDay] = useState(null);

  useEffect(() => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    if (month === 10) { // Listopad (miesiące są liczone od 0)
      setCurrentDay(day);
    }
  }, []);

  const handleFlip = (day) => {
    setFlippedDay(day === flippedDay ? null : day); // Przełącz flip
  };

  return (
    <div className="container">
      <h1>Kalendarz Listopadowy</h1>
      <i>Wejdź każdego dnia i popraw sobie humor czytając komplement.</i>
      <br /><br /><br />
      <div className="calendar">
        {Array.from({ length: 30 }, (_, index) => {
          const day = index + 1;
          const holiday = holidays.find(h => h.day === day);
          const compliment = compliments[index % compliments.length];
          const isToday = currentDay === day;
          const isFlipped = flippedDay === day;

          return (
            <div 
              key={day} 
              className={`day ${isToday ? 'today' : ''} ${isFlipped ? 'flipped' : ''}`}
              onClick={() => handleFlip(day)}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="date">{day}</div>
                  <div className="holiday">{holiday?.name}</div>
                </div>
                <div className="flip-card-back">
                  <div className="compliment">{compliment}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
