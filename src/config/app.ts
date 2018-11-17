const name:string = 'STONEm';
const tagline:string = 'Masternodes Hosting Service';
const filterCriteria = [
  { name: 'Price', isSelected: true },
  { name: 'Change', isSelected: false },
  { name: 'Volume', isSelected: false },
  { name: 'Marketcap', isSelected: false },
  { name: 'ROI', isSelected: true },
  { name: 'Nodes', isSelected: false },
  { name: 'Coin Required', isSelected: false },
  { name: 'MN Worth', isSelected: true },
];

const incomeSummaries = [
  { price: '$0.0337', ROI: '369.87%', worth: '$51' },
];

export default {
  name,
  tagline,
  filterCriteria,
  incomeSummaries,
};
