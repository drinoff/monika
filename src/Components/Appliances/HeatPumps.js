import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function createData(prop1, prop2) {
  return { prop1, prop2 };
}

const HeatPumps = ({ items }) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    items &&
      items.forEach((element) => {
        const rows = Object.entries(element.spec).map((item) => {
          return createData(item[0], item[1]);
        });
        setData(rows);
      });
  }, [items]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getRowName = (name) => {
    switch (name) {
      case 'price':
        return 'Цена';
      case 'voltage':
        return 'Захранващо напрежение';
      case 'outputHeatingPower7':
        return 'Отдавана мощност на отопление при +7°C/вода 35°C(kW)';
      case 'cop7':
        return 'ЦОП при +7°C (вода за отопление 35°C)';
      case 'outputCoolingPower35':
        return 'Отдавана мощност на охлаждане при +35°C/вода 7°C(kW)';
      case 'eer35':
        return 'EER при +35°C (вода за охлаждане 7°C)';
      case 'power':
        return 'Мощност (kW)';
      case 'powerSupplyType':
        return 'Тип захранване';
      case 'MaxElConsumption':
        return 'Максимална консумация на ток (A)';
      case 'diameterConnections':
        return 'Диаметър връзки (цол)';
      case 'audioPressure':
        return 'Звуково налягане (dB(A))';
      default:
        return name;
    }
  };

  return (
    <div className="homeContainer">
      {items &&
        items.map((item, index) => (
          <Box key={index} sx={{ borderColor: '#4462C4' }}>
            <div className="firstTab">
              <div className="imgContainer">
                <img src={item.image} alt="first" />
              </div>
              <div className="rightSideContainer">
                <Tabs value={value} onChange={handleChange} sx={{ width: '100%' }} aria-label="basic tabs example">
                  <Tab label="Описание" />
                  <Tab label="Характеристика" />
                </Tabs>
                {value === 0 && (
                  <div className="descriptionContainer">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                )}
                {value === 1 && (
                  <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow></TableRow>
                      </TableHead>
                      <TableBody>
                        {data.map(
                          (row, index) =>
                            row.prop2.length > 0 && (
                              <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                  {getRowName(row.prop1)}
                                </TableCell>
                                <TableCell align="right">{row.prop2}</TableCell>
                              </TableRow>
                            )
                        )}
                        {item.dimensions.length.length > 0 && (
                          <TableRow>
                            <TableCell component="th" scope="row">
                              Дължина
                            </TableCell>
                            <TableCell align="right">{item.dimensions.length}</TableCell>
                          </TableRow>
                        )}
                        {item.dimensions.depth.length > 0 && (
                          <TableRow>
                            <TableCell component="th" scope="row">
                              Дълбочина(mm)
                            </TableCell>
                            <TableCell align="right">{item.dimensions.depth}</TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
                {item.price.length > 0 && (
                  <h3 className="price" style={{ color: '#4EC9B0' }}>
                    Цена: {item.price} <span>лв.</span>
                  </h3>
                )}
              </div>
            </div>
          </Box>
        ))}
    </div>
  );
};

export default HeatPumps;
