import React from "react";
import RouteRegistry from "../../api/components/dev/RouteRegistry";


const RegistryLandingPage: React.FC = async () => {
  // a little delay just to feel something
  await new Promise(resolve => setTimeout(resolve, 100));
  return (
    <div className="p-4 m-4 border rounded-lg">
      <RouteRegistry /> 
    </div>
  );
}
export default RegistryLandingPage;