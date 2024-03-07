import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function RedirectToLearn() {
  const history = useHistory();

  useEffect(() => {
    history.push('/learn/');
  }, [history]);

  return null; // or a loader component if you prefer
}

export default RedirectToLearn;