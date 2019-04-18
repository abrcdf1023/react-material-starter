import React from 'react';

const Page2 = ({
  handleAlertDialogOpen,
  setAlertDialogTitle,
  setAlertDialogMessage
}) => {
  const handleClick = () => {
    setAlertDialogTitle('Page2');
    setAlertDialogMessage('Page2 Message');
    handleAlertDialogOpen();
  };

  return (
    <div>
      <button onClick={handleClick}>show alert dialog</button>
    </div>
  );
};

export default Page2;
