import React from 'react';

const Toggle = ({ isDarkMode, setIsDarkMode }) => {
  const toggleColorMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="toggle">
      <p>Dark Mode</p>
      <input type="checkbox" onChange={() => toggleColorMode()} />
    </div>
  );
};

export default Toggle;
