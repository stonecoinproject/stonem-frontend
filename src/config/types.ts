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

