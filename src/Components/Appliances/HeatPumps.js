import React from 'react';
import Box from '@mui/material/Box';
import HeatPumpItem from './HeatPumpItem';

const HeatPumps = ({ items }) => {

  return (
    <div className="homeContainer">
      {items &&
        items.map((item, index) => (
          <Box key={index} sx={{ borderColor: '#4462C4' }}>
            <HeatPumpItem item={item} />
          </Box>
        ))}
    </div>
  );
};

export default HeatPumps;
