import { useState } from 'react';

const useUserLocSelected = () => {
  const [userLocSelected, setUserLocSelected] = useState([]);

  const handleUserLocSelected = (selected) => {
    setUserLocSelected(selected);
  };

  return [userLocSelected, handleUserLocSelected];
};

export default useUserLocSelected;
