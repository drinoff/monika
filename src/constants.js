export const heatPumpTemplate = [
  'name',
  'description',
  'price',
  'voltage',
  'outputHeatingPower7',
  'cop7',
  'outputCoolingPower35',
  'eer35',
  'power',
  'powerSupplyType',
  'MaxElConsumption',
  'diameterConnections',
  'audioPressure',
  'length',
  'depth',
];

export const getRowName = (name) => {
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
      return 'Мощност';
    case 'powerSupplyType':
      return 'Тип захранване';
    case 'MaxElConsumption':
      return 'Максимална консумация на ток (A)';
    case 'diameterConnections':
      return 'Диаметър връзки (цол)';
    case 'audioPressure':
      return 'Звуково налягане (dB(A))';
    case 'weight':
      return 'Тегло';
    case 'coolingAgent':
      return 'Хладилен агент';
    case 'productClass':
      return 'Продуктов Клас';
    case 'coverage':
      return 'За помещения';
    case 'outputPowerCooling':
      return 'Отдавана мощност (охлаждане)';
    case 'outputPowerHeating':
      return 'Отдавана мощност (отопление)';
    case 'inputPowerCooling':
      return 'Консумирана мощност (охлаждане)';
    case 'inputPowerHeating':
      return 'Консумирана мощност (отопление)';
    case 'extras':
      return 'Предимства';
    case 'energyClassCooling':
      return 'Енергиен клас (охлаждане)';
    case 'energyClassHeating':
      return 'Енергиен клас (отопление)';
    case 'SEER':
      return 'SEER (Сезонна ефективност в режим на охлаждане)';
    case 'SCOP':
      return 'SCOP (Сезонна ефективност в режим на отопление)';
    case 'recVolumeCooling':
      return 'Препоръчителен обем (охлаждане)';
    case 'recVolumeHeating':
      return 'Препоръчителен обем (отопление)';
    case 'noise':
      return 'Ниво на шум (вътрешно/външно)';
    case 'workingTempCooling':
      return 'Работен диапазон (охлаждане)';
    case 'workingTempHeating':
      return 'Работен диапазон (отопление)';
    case 'diameterPipe':
      return 'Диаметър на тръбата течност/газ (mm)';
    case 'powerSupplyTypeAcs':
      return 'El. захранване';
    case 'manufactured':
      return 'Произход';
    case 'name':
      return 'Име';
    case 'description':
      return 'Описание';
    case 'image':
      return 'Изображение';
    case 'length':
      return 'Дължина';
    case 'depth':
      return 'Дълбочина(mm)';

    default:
      return name;
  }
};

export const heatPumpInitialData = {
  length: '',
  depth: '',
  description: '',
  name: '',
  image: '',
  price: '',
  voltage: '',
  outputHeatingPower7: '',
  cop7: '',
  outputCoolingPower35: '',
  eer35: '',
  power: '',
  powerSupplyType: '',
  MaxElConsumption: '',
  diameterConnections: '',
  audioPressure: '',
};

export const airConditionerInitialData = {
  dimensions: {
    inside: '',
    outside: '',
    weightInside: '',
    weightOutside: '',
  },
  type: 'aCs',
  description: '',
  name: '',
  image: '',
  price: '',
  spec: {
    weight: '',
    voltage: '',
    coolingAgent: '',
    productClass: '',
    coverage: '',
    power: '',
    outputPowerCooling: '',
    outputPowerHeating: '',
    inputPowerCooling: '',
    inputPowerHeating: '',
    extras: '',
    energyClassCooling: '',
    energyClassHeating: '',
    SEER: '',
    SCOP: '',
    recVolumeCooling: '',
    recVolumeHeating: '',
    noise: '',
    workingTempCooling: '',
    workingTempHeating: '',
    diameterPipe: '',
    powerSupplyTypeAcs: '',
    manufactured: '',
  },
};

export const generateRequestBody = (data, type) => {
  let requestBody = {
    dimensions: {
      length: data.length,
      depth: data.depth,
    },
    type: type,
    description: data.description,
    name: data.name,
    image: '',
    price: data.price,
    spec: {
      voltage: data.voltage,
      outputHeatingPower7: data.outputHeatingPower7,
      cop7: data.cop7,
      outputCoolingPower35: data.outputCoolingPower35,
      eer35: data.eer35,
      power: data.power,
      powerSupplyType: data.powerSupplyType,
      MaxElConsumption: data.MaxElConsumption,
      diameterConnections: data.diameterConnections,
      audioPressure: data.audioPressure,
    },
  };

  return requestBody;
};
