export type BalanceDataInterface = {
  /** Title of the account balance. */
  title: string,
  /** Amount contained within the account. */
  amount: number,
  /** Currency of the account */
  currency: string,
};

/**
 * Status indicator types.
 */
export type StatusIndicatorProps = {
  /** Background color of indicator. */
  indicatorBg?: string,
  /** Border highlight color of indicator. Only color codes supported. */
  indicatorHighlight?: string,
  /** Text displayed next to the status dot. */
  statusText: string;
  /** Text displayed next to the status dot. */
  statusTextColor: string;
};

export type TransactionMetaDataInterface = {
  /** The string to represent the key of the meta key-value pair. */
  key: string,
  /** The string to represent the value of the meta key-value pair. */
  value: string,
};

export type TransactionDataInterface = {
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
  meta: TransactionMetaDataInterface[],
};

export type RecentTransactionItemProps = {
  /** Transaction amount for recent transaction item. */
  transactionAmount: string,
  /** Transaction date for recent transaction item. Example: 27/11/12 */
  transactionDate: string,
  /** Transaction time for recent transaction item. */
  transactionTime: string,
  /** Transaction title. */
  transactionTitle: string,
};

