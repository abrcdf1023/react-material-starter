import React from 'react';

const Page1 = ({
  handleAlertDialogOpen,
  setAlertDialogTitle,
  setAlertDialogMessage
}) => {
  const handleClick = () => {
    setAlertDialogTitle('Page1');
    setAlertDialogMessage('Page1 Message');
    handleAlertDialogOpen();
  };

  return (
    <div>
      <button onClick={handleClick}>show alert dialog</button>
    </div>
  );
};

export default Page1;
