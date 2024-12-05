import React, { useState } from "react";
import "./App.css"; 
import "./App.js"; 

const QuoteEstimation = ({ material }) => {
  const [area, setArea] = useState(0);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPattern, setSelectedPattern] = useState("");
  const [totalCost, setTotalCost] = useState(0);

  const colorOptions = ["White", "Red", "Black", "Blue", "Green"];
  const patternOptions = ["Classic Brick", "Herringbone", "Basket Weave"];
  const preparationFee = 150;
  const wasteDisposalFee = 100;

  const handleAreaChange = (e) => {
    setArea(e.target.value);
  };

  const handleColorChange = (color) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  const handlePatternChange = (pattern) => {
    setSelectedPattern(pattern);
  };

  const calculateCost = () => {
    if (!area || !selectedPattern || selectedColors.length === 0) {
      alert("Please fill in all required fields to calculate the cost.");
      return;
    }

    const materialCost = material.costPerSqFt * area;
    const colorCost = selectedColors.length * 1 * area;
    const installationCost = 3.5 * area * 1.2;

    const total =
      materialCost +
      colorCost +
      installationCost +
      preparationFee +
      wasteDisposalFee;

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
            <td>
              Rubber Tileset ({selectedPattern || "Select a Pattern"})
            </td>
            <td>${material.costPerSqFt}/sq ft</td>
            <td>{area} sq ft</td>
            <td>${(material.costPerSqFt * area).toFixed(2)}</td>
          </tr>
          <tr>
            <td>Accent Colors</td>
            <td>{selectedColors.join(", ") || "Select Colors"}</td>
            <td>$1.00/sq ft</td>
            <td>{area} sq ft</td>
            <td>${(selectedColors.length * 1 * area).toFixed(2)}</td>
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
        <div className="form-group">
          <label>Select Accent Colors:</label>
          {colorOptions.map((color) => (
            <div key={color}>
              <input
                type="checkbox"
                checked={selectedColors.includes(color)}
                onChange={() => handleColorChange(color)}
              />
              <label>{color}</label>
            </div>
          ))}
        </div>
        <div className="form-group">
          <label>Select Pattern:</label>
          <select
            value={selectedPattern}
            onChange={(e) => handlePatternChange(e.target.value)}
          >
            <option value="">-- Select Pattern --</option>
            {patternOptions.map((pattern) => (
              <option key={pattern} value={pattern}>
                {pattern}
              </option>
            ))}
          </select>
        </div>
        <button onClick={calculateCost} className="calculate-button">
          Calculate Total Cost
        </button>
      </div>
    </div>
  );
};

export default QuoteEstimation;
