import React from "react";
import RouteRegistry from "../../api/components/dev/RouteRegistry";


const RegistryLandingPage: React.FC = async () => {
  // a little delay just to feel something
  await new Promise(resolve => setTimeout(resolve, 100));
  return (
    <div>
      <RouteRegistry /> 
    </div>
  );
}
export default RegistryLandingPage;