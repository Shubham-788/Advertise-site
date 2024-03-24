import React from 'react';
import { useLocation } from 'react-router-dom';
import '../style/advertisement.css'; // Import CSS file for styling

const Advertisement = () => {
    const location = useLocation();
    const { matchingUsers } = location.state;

    return (
        <div className="advertisement-container">
            {matchingUsers.map((business) => (
                <div key={business._id} className="business-card">
                    <h1 className="business-name">{business.businessName}</h1>
                    {/* <h2 className="business-header">About Company :</h2> */}
                    <h3 className="business-description">{business.description}</h3>
                </div>
            ))}
        </div>
    );
};

export default Advertisement;
