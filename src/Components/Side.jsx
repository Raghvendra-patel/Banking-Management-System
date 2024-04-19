import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 // Import CSS file for styling

const Side = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // State to track login status

  const handleLinkClick = () => {
    setIsLoggedIn(false); // Set isLoggedIn to false when a link is clicked
  };

  return (
    <div className='navbars'> {/* Apply navbar class */}
        <ul>
          <li><Link to={'create'} onClick={handleLinkClick}>Create Account</Link></li>
          <li><Link to={'login'} onClick={handleLinkClick}>Login</Link></li>
        </ul>
    </div>
  );
}

export default Side;
