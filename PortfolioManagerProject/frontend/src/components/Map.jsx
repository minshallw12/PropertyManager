import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Geocode from 'react-geocode';

const center = { lat:48.8584, lng: 2.2945 }
const address = "Louvre"

export default function Map() {

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyCxg5D2bcU4yPiwsFF0204BwCGkCLcDR1k', //  <-- hide this later
        
    })   

    if (!isLoaded) {
        return <h3>Loading...</h3>// loading screen
    }

    Geocode.setApiKey('AIzaSyCxg5D2bcU4yPiwsFF0204BwCGkCLcDR1k')
    Geocode.setLanguage('en');
    Geocode.setRegion('us');

    let coords;
    async function addressToCoordinates(my_address) {
        let response = await 
        Geocode.fromAddress(my_address).then(
            (response) => {
                return response.results[0].geometry.location;
            },
            (error) => {
                console.error(error);
            }
        )
        console.log(response, "response")
        return response
    }

    coords = addressToCoordinates(address)
    console.log(coords, 'coords')

    return (
        <div className="google_map">

            <GoogleMap 
                center={center} 
                zoom={10} 
                mapContainerStyle={{
                    width: '400px', 
                    height: '400px'
                    }}
            >

                {/* display markers */}
                <Marker position={center}/>
            </GoogleMap>


        </div>
    )
}