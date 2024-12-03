import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

const App = () => {
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [startTime, setStartTime] = useState("08:00 AM");
  const [endTime, setEndTime] = useState("08:00 AM");
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Details:", {
      date: appointmentDate,
      startTime,
      endTime,
      ...formData,
    });
    alert("Appointment Submitted!");
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const drag = (event) => {
    event.dataTransfer.setData("text", event.target.id);
  };

  const drop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  };

  return (
    <div className="container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">Urban Rubber Paving</div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Rubber Paving Vs. Concrete</li>
            <li>Residential</li>
            <li>Commercial</li>
            <li>Playgrounds</li>
            <li>About</li>
            <li>Gallery</li>
            <li>
              <button className="quote-button">Get Free Quote</button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Design a Driveway Section */}
      <main>
        <section id="design-a-driveway">
          <h2>DESIGN YOUR DRIVEWAY IN JUST A FEW STEPS</h2>
          <div className="driveway-img">
            <img
              src="https://th.bing.com/th/id/OIP.je6n41edd5mw-EG9OXG4owHaE8?rs=1&pid=ImgDetMain"
              alt="driveway"
            />
          </div>
          <h3>Choose your preferred option to continue.</h3>
          <div className="design-a-driveway__buttons">
            <div>
              <button className="nav-bar__button">Custom</button>
            </div>
            <div>
              <button className="nav-bar__button">Patterns</button>
            </div>
          </div>
        </section>

        {/* Customized Tileset Section */}
        <section id="customized-tileset">
          <h2>YOUR CUSTOMIZED TILESET</h2>
          <div
            id="getData"
            onDrop={drop}
            onDragOver={allowDrop}
            style={{
              width: "250px",
              height: "200px",
              padding: "10px",
              border: "1px solid #4f4d4d",
              marginBottom: "48px",
            }}
          ></div>
          <br />
          <img
            id="dragData"
            src="https://th.bing.com/th/id/OIP.je6n41edd5mw-EG9OXG4owHaE8?rs=1&pid=ImgDetMain"
            draggable="true"
            onDragStart={drag}
            width="250"
            height="200"
            alt="draggable"
          />
          <div>
            <button className="dragData__button">Upload</button>
          </div>
        </section>

        {/* Book an Appointment Section */}
        <section>
          <h1 className="section-title">Book an Appointment</h1>
          <div className="appointment-container">
            {/* Calendar Section */}
            <section className="calendar-section">
              <h2>Select Date</h2>
              <DatePicker
                selected={appointmentDate}
                onChange={(date) => setAppointmentDate(date)}
                inline
              />
              <div className="time-inputs">
                <label>
                  Start:
                  <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                  />
                </label>
                <label>
                  Ends:
                  <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                  />
                </label>
              </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-form-section">
              <h2>Contact Information</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Surname:
                  <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Message:
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </label>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
