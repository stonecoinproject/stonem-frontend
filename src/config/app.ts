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

  '/wallets': {
    icon: WalletManagementIcon,
  },
};

type statusCode = 'off'|'restart-required'|'enabled';

type masternodesDataInterface = {
  lastRenewalDate: string,
  lastRenewalTime: string,
  statusCode: statusCode,
  title: string,
};

const masternodesData: masternodesDataInterface[] = [
  { lastRenewalDate: '21/07/2018', lastRenewalTime: '05:33', statusCode: 'enabled', title: 'MN 1' },
  { lastRenewalDate: '21/07/2018', lastRenewalTime: '05:33', statusCode: 'restart-required', title: 'MN 3' },
  { lastRenewalDate: '21/07/2018', lastRenewalTime: '05:33', statusCode: 'off', title: 'MN 5' },
];

type balanceDataInterface = {
  title: string,
  amount: number,
  currency: string,
};

const balanceData:balanceDataInterface[] = [
  { title: 'Total', amount: 10253.21, currency: 'STONE' },
  { title: 'Active', amount: 55129.21, currency: 'STONE' },
  { title: 'Pending', amount: 234.00, currency: 'STONE' },
  { title: 'Collateral', amount: 4500.00, currency: 'STONE' },
];

type transactionDataMeta = {
  /** The string to represent the key of the meta key-value pair. */
  key: string,
  /** The string to represent the value of the meta key-value pair. */
  value: string,
};

type transactionData = {
  /** Amount the transaction cost. */
  amount: string,
  /** A string representing the file name of the transaction vendor brand. */
  brand: string,
  /** Date the transaction was initiated */
  date: string,
  /** Time the transaction was initiated */
  time: string,
  /** The title assigned to this transaction. */
  title: string,
  /** Meta information for this transaction. */
  meta: transactionDataMeta[],
};

const transactionData = [
  { amount: '+6.00 STONE', brand: 'stone-logo.png', date: '07:39', time: '24/07/2018', title: 'MN Reward',
    meta: [
      { key: 'Status', value: '2833 confirmations' },
      { key: 'From', value: 'SkK9a0u332fy7xWumTmqJLJmXTL2E' },
      { key: 'Credit', value: '+6.00 STONE' },
      { key: 'Transaction fee', value: '-0.0057640 STONE' },
      { key: 'Net amount', value: '+6.0057640 STONE' },
      { key: 'Transaction ID', value: '23918921bcf6c792aff' },
    ],
  },
  { amount: '-10.000 TRC', brand: 'terracoin-logo.png', date: '19:21', time: '22/07/2018',
    title: 'Instant Send',
    meta: [
      { key: 'Status', value: '3783 confirmations' },
      { key: 'To', value: 'ZkK9a0u332fy7xWfmemTJLJmXTL2Q' },
      { key: 'Credit', value: '-10.00 TRC' },
      { key: 'Transaction fee', value: '-0.0057640 TRC' },
      { key: 'Net amount', value: '-10.0057640 TRC' },
      { key: 'Transaction ID', value: '32218921bcf6c792aff' },
    ],
  },
  { amount: '+6.00 STONE', brand: 'stone-logo.png', date: '07:39', time: '24/07/2018', title: 'MN Reward',
    meta: [
      { key: 'Status', value: '2833 confirmations' },
      { key: 'From', value: 'SkK9a0u332fy7xWumTmqJLJmXTL2E' },
      { key: 'Credit', value: '+6.00 STONE' },
      { key: 'Transaction fee', value: '-0.0057640 STONE' },
      { key: 'Net amount', value: '+6.0057640 STONE' },
      { key: 'Transaction ID', value: '23918921bcf6c792aff' },
    ],
  },
  { amount: '+3.00 TRC', brand: 'terracoin-logo.png', date: '07:39', time: '24/07/2018', title: 'MN Reward',
    meta: [
      { key: 'Status', value: '2833 confirmations' },
      { key: 'From', value: 'SkK9a0u332fy7xWumTmqJLJmXTL2E' },
      { key: 'Credit', value: '+3.00 TRC' },
      { key: 'Transaction fee', value: '-0.0057640 TRC' },
      { key: 'Net amount', value: '+3.0057640 TRC' },
      { key: 'Transaction ID', value: '23918921bcf6c792aff' },
    ],
  },
  { amount: '+6.00 STONE', brand: 'stone-logo.png', date: '07:39', time: '24/07/2018', title: 'MN Reward',
    meta: [
      { key: 'Status', value: '2833 confirmations' },
      { key: 'From', value: 'SkK9a0u332fy7xWumTmqJLJmXTL2E' },
      { key: 'Credit', value: '+6.00 STONE' },
      { key: 'Transaction fee', value: '-0.0057640 STONE' },
      { key: 'Net amount', value: '+6.0057640 STONE' },
      { key: 'Transaction ID', value: '23918921bcf6c792aff' },
    ],
  },
  { amount: '+3.00 TRC', brand: 'terracoin-logo.png', date: '07:39', time: '24/07/2018', title: 'MN Reward',
    meta: [
      { key: 'Status', value: '2833 confirmations' },
      { key: 'From', value: 'SkK9a0u332fy7xWumTmqJLJmXTL2E' },
      { key: 'Credit', value: '+3.00 TRC' },
      { key: 'Transaction fee', value: '-0.0057640 TRC' },
      { key: 'Net amount', value: '+3.0057640 TRC' },
      { key: 'Transaction ID', value: '23918921bcf6c792aff' },
    ],
  },
];

export default {
  balanceData,
  filterCriteria,
  incomeSummaries,
  masternodesData,
  name,
  periodicalData,
  sidebarLinks,
  tagline,
  transactionData,
};
