import React from 'react';
import Timer from '../Pages/Timer/CountDownTimer';
import Constants from '../Constants';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
function Ceremony() {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    const specialDay = new Date(Constants.specialDateTime)
    return (
        <div className="CeremonyPage">
            <div className="datePlaceFont">{Constants.specialDate} - {Constants.specialLocation}</div>
            <Timer targetDate={specialDay} />
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAhwhpo_awMNuCtHw70Q0SNWMcs0oyErEQ" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        </div>
    )
}

export default Ceremony