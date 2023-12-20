import React, { useEffect, useState } from 'react';
import './LoadingScreen.css'; // Create this CSS file for styling
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const LoadingScreen = ({ history }) => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate(); // Use useNavigate directly

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      navigate('/main'); // Use navigate instead of history.push
    }, 2500);

    return () => clearTimeout(timeout);
  }, [history]);

  return (
    <div className={`loading-screen ${visible ? 'visible' : 'hidden'}`}>
      <img src="https://media1.giphy.com/media/hV0G5du6Z3cRBviTN0/giphy.gif?cid=ecf05e47d5ru0b6e2m71i4z4ry1qzphywca0aqtc1o2lluv1&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Pizza" style={{ marginTop: '20px', width: '200px', height: '150px' }} />
      <img src="https://media3.giphy.com/media/b0ThcximAjJNkyAkNn/giphy.gif?cid=ecf05e47uok1o3b6wig3fez75cppu30962j2bo78sees9c5v&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Kitten" />
      <img src="https://i.imgur.com/p0FVFJv.png" alt="Kitten" />
    </div>
  );
};

export default LoadingScreen;
