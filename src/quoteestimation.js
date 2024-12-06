import React, { useState } from "react";
import "./App.css";
import "./App.js";

const QuoteEstimation = ({ material }) => {
  const [area, setArea] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const preparationFee = 150;
  const wasteDisposalFee = 100;

  const handleAreaChange = (e) => {
    setArea(e.target.value);
  };

  const calculateCost = () => {
    if (!area) {
      alert("Please enter a valid area to calculate the cost.");
      return;
    }

    const materialCost = material.costPerSqFt * area;
    const installationCost = 3.5 * area * 1.2;

    const total =
      materialCost + installationCost + preparationFee + wasteDisposalFee;

    setTotalCost(total);
  };

  return (
    <div className="quote-estimation">
      <h1>QUOTE ESTIMATION</h1>
      <table className="quote-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Description</th>
            <th>Cost per Unit</th>
            <th>Quantity</th>
            <th>Total Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Material</td>
            <td>Rubber Tileset</td>
            <td>${material.costPerSqFt}/sq ft</td>
            <td>{area} sq ft</td>
            <td>${(material.costPerSqFt * area).toFixed(2)}</td>
          </tr>
          <tr>
            <td>Installation</td>
            <td>Standard Install (Location: Calgary, AB)</td>
            <td>$3.50/sq ft x 1.2</td>
            <td>{area} sq ft</td>
            <td>${(3.5 * area * 1.2).toFixed(2)}</td>
          </tr>
          <tr>
            <td>Preparation Fee</td>
            <td>Leveling and Area Prep</td>
            <td>-</td>
            <td>-</td>
            <td>${preparationFee.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Waste Disposal</td>
            <td>Existing Material Removal</td>
            <td>-</td>
            <td>-</td>
            <td>${wasteDisposalFee.toFixed(2)}</td>
          </tr>
          <tr>
            <td colSpan="4">Total</td>
            <td>${totalCost.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <div className="form-section">
        <h2>Input Details</h2>
        <div className="form-group">
          <label>Enter Driveway Area (sq ft):</label>
          <input
            type="number"
            value={area}
            onChange={handleAreaChange}
          />
        </div>
        <button onClick={calculateCost} className="calculate-button">
          Calculate Total Cost
        </button>
      </div>
    </div>
  );
};

export default QuoteEstimation;
