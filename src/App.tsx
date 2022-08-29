import { useEffect, useState } from "react";
import { getLocations } from "./adapters/locationes";
import { Selector } from "./components/Selector/Selector";
import untypedLocations from "./data/locations.json";
import { Location } from "./interfaces/interfaces";

export const App = () => {
  const [locations, setLocations] = useState<Location[]>();
  const [selectedLocations, setSelectedLocations] = useState<Location>();

  useEffect(() => {
    const locations = getLocations(untypedLocations);
    setSelectedLocations(locations[0]);
    setLocations(locations);
  }, []);

  const handleSelectedLocation = (selectedLocation: Location) => {
    setSelectedLocations(selectedLocation);
    console.log(selectedLocation);
  };

  return (
    <div className="App">
      <span>Hello</span>
      {!!locations && selectedLocations && (
        <Selector
          selected={selectedLocations}
          handleSelect={handleSelectedLocation}
          options={locations}
        />
      )}
    </div>
  );
};

export default App;
