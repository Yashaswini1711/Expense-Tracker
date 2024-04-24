import React from 'react';

const ChartTypeDropdown = ({ onChange }) => {
  const handleSelectChange = (e) => {
    const selectedType = e.target.value;
    onChange(selectedType);
  };

  return (
    <div className="mb-3">
      <label htmlFor="chartType" className="form-label">Select Chart Type:</label>
      <select
        id="chartType"
        onChange={handleSelectChange}
        className="form-select">
        <option value="line">Line Chart</option>
        <option value="bar">Bar Chart</option>
        <option value="pie">Pie Chart</option>
      </select>
    </div>
  );
};

export default ChartTypeDropdown;
