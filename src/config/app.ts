import {
  AddMasternodeIcon,
  MasternodeManagementIcon,
  WalletManagementIcon,
  iconProps,
} from '../components/Icons';

type sidebarLinkInterface = {
  icon: React.SFC<iconProps>,
};

type sidebarLinksInterface = {
  [link: string]: sidebarLinkInterface,
};

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

const periodicalData = [
  {
    label: 'Daily Income',
    incomeFigures: [
      '$0.4889',
      '0.00005943 BTC',
      '14.496 STONE',
    ],
  },
  {
    label: 'Weekly Income',
    incomeFigures: [
      '$3.4222',
      '0.000041600 BTC',
      '101.2172 STONE',
    ],
  },
  {
    label: 'Monthly Income',
    incomeFigures: [
      '$14.6664',
      '0.0017827 BTC',
      '433.7880 STONE',
    ],
  },
  {
    label: 'Yearly Income',
    incomeFigures: [
      '$178.4409',
      '0.02169157 BTC',
      '5,277.7540 STONE',
    ],
  },
];

const sidebarLinks: sidebarLinksInterface = {
  '/': {
    icon: AddMasternodeIcon,
  },

  '/masternodes': {
    icon: MasternodeManagementIcon,
  },

  '/add-wallets': {
    icon: WalletManagementIcon,
  },
};

export default {
  filterCriteria,
  incomeSummaries,
  name,
  sidebarLinks,
  periodicalData,
  tagline,
};
