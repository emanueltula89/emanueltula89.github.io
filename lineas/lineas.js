var morris1 = new Morris.Line({
  element: 'myfirstchart',
  data: [
    { month: 'Enero', value: 5.39, valor2: 3.88 },
    { month: 'Febrero', value: 7.54, valor2: 4.69 },
    { month: 'Marzo', value: 7.99, valor2: 6.73 },
    { month: 'Abril', value: 6.52, valor2: 6.05 },
    { month: 'Mayo', value: 7.98, valor2: 5.05 },
    { month: 'Junio', value: 5.37, valor2: 5.30 },
    { month: 'Julio', value: 6.8, valor2: 7.41 },
    { month: 'Agosto', value: 12.15, valor2: 6.97 },
    { month: 'Septiembre', value: 13.85, valor2: 6.17 },
    { month: 'Octubre', value: 8.21, valor2: 6.35 },
    { month: 'Noviembre', value: 12.9, valor2: 4.92 },
    { month: 'Diciembre', value: 25, valor2: 5.12 }
  ],
  xkey: 'month',
  ykeys: ['value', 'valor2'],
  lineWidth: 1,
  labels: ['Inflación 2023', 'Inflación 2022'],
  resize: true,
  lineColors: ['#CC3366', '#FF33FF'],
  parseTime: false
});

Morris.Area({
  element: 'Grafica Clientes',
  data: [
    {x: 'Enero', y: 5.39, z: 3.88},
    {x: 'Febrero', y: 7.54, z: 4.69},
    {x: 'Marzo', y: 7.99, z: 6.73},
    {x: 'Abril', y: 6.52, z: 6.05},
    {x: 'Mayo', y: 7.98, z: 5.05},
    {x: 'Junio', y: 5.37, z: 5.30},
    {x: 'Julio', y: 6.8, z: 7.41},
    {x: 'Agosto', y: 12.15, z: 6.97},
    {x: 'Septiembre', y: 13.85, z: 6.17},
    {x: 'Octubre', y: 8.21, z: 6.35},
    {x: 'Noviembre', y: 12.9, z: 4.92},
    {x: 'Diciembre', y: 25, z: 5.12}
  ],
  xkey: 'x',
  ykeys: ['y', 'z'],
  labels: ['Inflación 2023', 'Inflacion 2022'],
  lineColors: ['#CC3366', '#FF33FF'],
  lineWidth: 1,
  parseTime: false
}).on('click', function(i, row){
  console.log(i, row);
});

var inflation_data = [
  { "period": "Enero", "inflacion_2023": 5.39, "inflacion_2022": 3.88 },
  { "period": "Febrero", "inflacion_2023": 7.54, "inflacion_2022": 4.69 },
  { "period": "Marzo", "inflacion_2023": 7.99, "inflacion_2022": 6.73 },
  { "period": "Abril", "inflacion_2023": 6.52, "inflacion_2022": 6.05 },
  { "period": "Mayo", "inflacion_2023": 7.98, "inflacion_2022": 5.05 },
  { "period": "Junio", "inflacion_2023": 5.37, "inflacion_2022": 5.30 },
  { "period": "Julio", "inflacion_2023": 6.8, "inflacion_2022": 7.41 },
  { "period": "Agosto", "inflacion_2023": 12.15, "inflacion_2022": 6.97 },
  { "period": "Septiembre", "inflacion_2023": 13.85, "inflacion_2022": 6.17 },
  { "period": "Octubre", "inflacion_2023": 8.21, "inflacion_2022": 6.35 },
  { "period": "Noviembre", "inflacion_2023": 12.9, "inflacion_2022": 4.92 },
  { "period": "Diciembre", "inflacion_2023": 25, "inflacion_2022": 5.12 }
];

Morris.Line({
  element: 'hola',
  data: inflation_data,
  xkey: 'period',
  ykeys: ['inflacion_2023', 'inflacion_2022'],
  labels: ['Inflación 2023', 'Inflación 2022'],
  parseTime: false
});

Morris.Donut({
  element: 'graficoTorta',
  data: [
    {label: "Enero", value: 6},
    {label: "Febrero", value: 6.6},
    {label: "Marzo", value: 7.7},
    {label: "Abril", value: 8.4},
    {label: "Mayo", value: 7.8},
    {label: "Junio", value: 6},
    {label: "Julio", value: 6.3},
    {label: "Agosto", value: 12.4},
    {label: "Septiembre", value: 12.7},
    {label: "Octubre", value: 8.3},
    {label: "Noviembre", value: 12.8},
    {label: "Diciembre", value: 25}
  ],
  colors: ['#FF6347', '#4682B4', '#32CD32', '#8A2BE2', '#FFD700', '#00FF00', '#FFA07A', '#87CEEB', '#FF69B4', '#7B68EE', '#20B2AA', '#FF4500']
});
