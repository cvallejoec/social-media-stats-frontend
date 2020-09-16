import React from 'react';

const Toggle = ({ isDarkMode, setIsDarkMode }) => {
  const toggleColorMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="toggle">
      <label htmlFor="is-dark-mode">Dark Mode</label>
      <input
        id="is-dark-mode"
        type="checkbox"
        onChange={() => toggleColorMode()}
        checked={isDarkMode}
      />
    </div>
  );
};

export default Toggle;
