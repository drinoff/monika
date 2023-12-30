import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Tabs, Tab } from '@mui/material';
import { heatPumpTemplate, getRowName, heatPumpInitialData, airConditionerInitialData, generateRequestBody } from '../../constants';

import './Add.css';

const Add = ({ Push }) => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState(heatPumpInitialData);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setData(newValue === 0 ? heatPumpInitialData : airConditionerInitialData);
  };

  const handleAdd = () => {
    let type = value === 0 ? data.type = 'heatPump' : data.type = 'airConditioner';
    
    Push(generateRequestBody(data,type));
    setData(value === 0 ? heatPumpInitialData : airConditionerInitialData);
  };

  return (
    <Box
      sx={{
        marginTop: '30px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Термопомпа" />
        <Tab label="Климатик" />
      </Tabs>
      {value === 0 && (
        <div className="fieldsContainer">
          {heatPumpTemplate.map((item) => (
            <TextField 
            key={item} 
            sx={{ width: '350px' }} 
            value={data[item] || ''} 
            onChange={(e)=>setData({...data, [item]: e.target.value})} 
            label={getRowName(item)} 
            />
          ))}
        </div>
      )}
      <button className={'pushButton'} onClick={handleAdd}>
        {`Добави ${value === 0 ? 'Термопомпа' : 'Климатик'}`}
      </button>
    </Box>
  );
};

export default Add;
