import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"

const center = { lat:48.8584, lng: 2.2945 }


export default function Map() {

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyCxg5D2bcU4yPiwsFF0204BwCGkCLcDR1k', //  <-- hide this later
        
    })   

    if (!isLoaded) {
        return <h3>Loading...</h3>// loading screen
    }


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