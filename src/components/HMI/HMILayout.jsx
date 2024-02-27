import React from 'react'
import Card from './Card'

function HMILayout({
  className
}) {
  return (
    <div className={` ${className}`}>
          {/* weather and Now playing */}
          <div className="flex-col basis-1/3">
            <Card title={"Weather Today"} value={"16°C"}></Card>
            <Card title={"Now Playing"} value={"Hitboy x Smino"}></Card>
          </div>

          <Card
            title={"Today's Destination"}
            value={"16°C"}
            className="basis-1/3"
          ></Card>
          <Card
            title={"Car Functionalities"}
            value={"Quick Controls"}
            className="basis-1/3"
          ></Card>
        </div>
  )
}

export default HMILayout