import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styled from '@mui/material/styles/styled';

const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(odd)': {
        backgroundColor: '#F5F5F5',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(prop1, prop2) {
  return { prop1, prop2 };
}

const HeatPumpItem = ({ item }) => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const rows = Object.entries(item.spec).map((element) => {
      return createData(element[0], element[1]);
    });
    setData(rows);
  }, [item]);

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
        return 'COP при +7°C (вода за отопление 35°C)';
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
    <div className="firstTab">
      <div className="imgContainer">
        <img src={item.image} alt="first" />
      </div>
      <div className="rightSideContainer" style={{ width: '100%' }}>
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
              <TableBody>
                {data.map(
                  (row, index) =>
                    row.prop2.length > 0 && (
                      <StyledTableRow key={index}>
                        <TableCell component="th" scope="row">
                          {getRowName(row.prop1)}
                        </TableCell>
                        <TableCell align="right">{row.prop2}</TableCell>
                      </StyledTableRow>
                    )
                )}
                {item.dimensions.length.length > 0 && (
                  <StyledTableRow>
                    <TableCell component="th" scope="row">
                      Дължина
                    </TableCell>
                    <TableCell align="right">{item.dimensions.length}</TableCell>
                  </StyledTableRow>
                )}
                {item.dimensions.depth.length > 0 && (
                  <StyledTableRow>
                    <TableCell component="th" scope="row">
                      Дълбочина(mm)
                    </TableCell>
                    <TableCell align="right">{item.dimensions.depth}</TableCell>
                  </StyledTableRow>
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
  );
};

export default HeatPumpItem;
