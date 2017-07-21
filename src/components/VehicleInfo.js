import React, { Component } from 'react';

export default class VehicleInfo extends Component {

  constructor(props) {
    super(props);


  }

  render() {
    const {vehicle, name, model} = this.props;
    const vehicleProps = [
      'manufacturer',
      'vehicle_class',
      'passengers',
      'crew',
      'length',
      'max_atmosphering_speed',
      'cargo_capacity'
    ];
    return (
      <div className="card col-lg-3">
        <h3>{name}</h3>
        <p className="lead">
          {model}
        </p>
        <ul>
        {vehicleProps.map(property =>
            <li key={property} className="specs list-unstyled">{property}: {vehicle[property]}</li>
        )}
        </ul>
      </div>
    );
  }

}
