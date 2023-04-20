import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Geocode from 'react-geocode';
import inventory from '../data/my_props.json'

const center = {lat: 44.9095503, lng: -116.1006108}
const address = "282 Moonridge Dr, McCall"

//helper function that converts a list of inventory addresses to a list of correct formats for the next helper
export function inputCleaner(lst_of_objects) {
    let sanitized = [];
    for (let i=0; i<lst_of_objects.length; i++) {
        let joined = `${lst_of_objects[i].address}, ${lst_of_objects[i].city}`
        sanitized.push(joined)
    }
    return sanitized
};


//helper function that takes one address and ouputs one coordinate
export async function addressToCoordinates(my_address) {

    Geocode.setApiKey('AIzaSyCxg5D2bcU4yPiwsFF0204BwCGkCLcDR1k')
    Geocode.setLanguage('en');
    Geocode.setRegion('us');  

    let response = await Geocode.fromAddress(my_address).then(
        (response) => {
            return response.results[0].geometry.location;
        },

        (error) => {
            console.error(error);
        }
    )
    return response
};


//helper function that takes a list of cleansed inputs and outputs a list of coordinates
export async function coordinateList(lst) {
    const new_list = []
    for (let i=0; i<lst.length; i++) {
        let response = await addressToCoordinates(lst[i])
        console.log(response, "<-- response")
        new_list.push(response)
    }
    return new_list
};


export async function listCompilation() {
    let my_list = await coordinateList(inputCleaner(inventory))
    console.log(my_list, '<-- list')
    return my_list
    
}

/* Right now the output of "listCompilation" above does appear on the console
the problem is, when I try to prin the list below, there is a timing issue and the coordinates
are not saved.  The variable "the_list" is called before the response arrives and therefore
breaks the document as it cannot send undefined information into the google marker api. It
must be coordinates formatted as in the hardcoded coords below. */

//------ Start of bug window -------
const the_list = listCompilation(); // <-- this should be the list of coordinates for each address
console.log(the_list, "<-- the_list")

//hardcoded list of coordinates
const coordinates = [ {"coords": {lat: 44.9112275, lng: -116.0993498}}, {"coords": {lat: 44.8648198, lng: -116.1387163}}, {"coords": {lat: 44.9082206, lng: -116.104886}}]
   
//------ End of bug window ---------




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

                {
                    coordinates.map(({coords}) => (
                        <Marker position={coords}/>
                    ))
                }
                
            </GoogleMap>


        </div>
    )
}