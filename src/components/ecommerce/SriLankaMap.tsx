"use client";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "/maps/lk.json";

export default function SriLankaMap() {
  return (
    <div style={{ width: "100%", maxWidth: 600 }}>
      <ComposableMap
        width={800}
        height={800}
        projection="geoMercator"
        projectionConfig={{
          scale: 11000,
          center: [80.7, 8.0],
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }: any) =>
            geographies.map((geo: any) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#D0D5DD",
                    outline: "none",
                  },
                  hover: {
                    fill: "#465FFF",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#465FFF",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}