import React, {useState} from 'react';
import {GiAirplane, GiShield, GiBriefcase, GiLightningBow} from 'react-icons/gi';

interface InfoCardProps {
    title: string;
    description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({title, description}) => {
    const [isHovered, setIsHovered] = useState(false);

    const iconStyle: React.CSSProperties = {
        fontSize: '3em',
        color: isHovered ? '#007BFF' : '#333',
        transition: 'color 0.3s ease',
    };

    let IconComponent;

    if (title === 'Service') {
        IconComponent = GiAirplane;
    } else if (title === 'Safety') {
        IconComponent = GiShield;
    } else if (title === 'Specialize') {
        IconComponent = GiBriefcase;
    } else if (title === 'Strategy') {
        IconComponent = GiLightningBow;
    }

    return (
        <div className="info-card" data-title={title}
             style={{
                 transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                 transition: 'transform 0.3s ease',
             }}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
        >
            {IconComponent && <IconComponent style={iconStyle}/>}
            <h2 className="info-card-title" style={{color: isHovered ? '#007BFF' : '#333'}}>{title}</h2>
            <p className="info-card-description"
               style={{
                   opacity: isHovered ? 1 : 0,
                   transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
                   transition: 'opacity 0.3s ease, transform 0.3s ease'
               }}>
                {description}
            </p>
        </div>
    );
};

export default InfoCard;
