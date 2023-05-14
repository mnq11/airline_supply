import React from 'react';
import { GiAirplane, GiShield, GiBriefcase, GiLightningBow } from 'react-icons/gi';

interface InfoCardProps {
    title: string;
    description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
    const iconStyle: React.CSSProperties = {
        fontSize: '3em',
        color: '#333',
    };

    let icon;

    if (title === 'Service') {
        icon = <GiAirplane style={iconStyle} />;
    } else if (title === 'Safety') {
        icon = <GiShield style={iconStyle} />;
    } else if (title === 'Specialize') {
        icon = <GiBriefcase style={iconStyle} />;
    } else if (title === 'Strategy') {
        icon = <GiLightningBow style={iconStyle} />;
    }

    return (
        <div className="info-card">
            {icon}
            <h2 className="info-card-title">{title}</h2>
            <p className="info-card-description">{description}</p>
        </div>
    );
};

export default InfoCard;
