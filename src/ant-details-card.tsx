import './ant-details-card.css';
import { IAnt } from './ant';

export const AntDetailsCard = (props: Partial<IAnt>) => (
    <div className="container">
        <span className="name-value">{props.name}</span>
        <span className="location-label">Lat/Long: </span>
        <span className="location-value">{props.location?.latitude},{props.location?.latitude}</span>
        <span className="heading-label">Heading: </span>
        <span className="heading-value">{props.heading}</span>
        <span className="speed-label">Speed: </span>
        <span className="speed-value">{props.speed}</span>
        <span className="health-label">Health: </span>
        <span className="health-value">{props.health}</span>
        <span className="colony-label">Colony: </span>
        <span className="colony-value">{props.colony}</span>
    </div>
);

export default AntDetailsCard;