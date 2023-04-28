import Property from '../components/Property';
import PropertyForm from '../components/PropertyForm';
import { useState, useEffect } from 'react';
import { getProperties } from '../utilities';

export default function ListProps() {
  const [properties, setProperties] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const data = await getProperties();
      setProperties(data);
    }
    fetchData();
  }, []);

  const handleNewProperty = (newProperty) => {
    setProperties([...properties, newProperty]);
  };

  const handleDeleteProperty = (deletedPropertyId) => {
    setProperties(properties.filter((property) => property.id !== deletedPropertyId));
  };

  return (
    <div className="AddPropForm_container center">
      <div className='head_container'>
        <h3>My list of properties</h3>
        <div className="list_container">
            
          {properties.map(({id, address}) => (
            <Property key={id} id={id} address={address} onDeleteProperty={handleDeleteProperty}/>
          ))}
        </div>
      </div>
      <PropertyForm onNewProperty={handleNewProperty}/>
    </div>
  )
}
