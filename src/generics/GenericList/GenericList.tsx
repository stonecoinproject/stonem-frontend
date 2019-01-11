import * as React from 'react';

export interface GenericListProps<T> {
  /** Items to be members of the list. */
  items: T[];
  /** Callback method to render the items. Allows us delegate rendering for each consumer. */
  itemRenderer: (item: T) => JSX.Element
}

export class GenericList<T> extends React.Component<GenericListProps<T>, {}> {
  render () {
    const {
      items,
      itemRenderer
    } = this.props

    return (<div>{items.map(itemRenderer)}</div>)
  }
}