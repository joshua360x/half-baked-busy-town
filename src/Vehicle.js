export default function Vehicle(props) {
  return <div className="vehicle">
    {/* the Vehcile component has a prop called vehicle. Check to see what string is in this vehicle prop */}
    {/* if the vehicle props is a car, render a '🚗' emoji */}
    <p>
      {props.vehicle === 'car' && '🚗' }
    </p>
    {/* if the vehicle props is a truck, render a '🚚' emoji */}
    <p>
      {props.vehicle === 'truck' && '🚚' }
    </p>
    {/* if the vehicle props is a motorcycle, render a '🏍️' emoji */}
    <p>
      {props.vehicle === 'motorcycle' && '🏍️' }
    </p>
    {/* if the vehicle props is a bus, render a '🚌' emoji */}
    <p>
      {props.vehicle === 'bus' && '🚌' }
    </p>
  </div>;
}