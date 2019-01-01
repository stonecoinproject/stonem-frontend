import * as React from 'react';

type StatefulToggleState = {
  readonly isOn: boolean,
};

/**
 * Typing for arguments to be passed to the
 * consumer of the <Toggle /> render props function.
 */
export type ChildProps = {
  /** Runs the toggle action. */
  doToggle(): any,
  /** Tracks the toggle state. */
  isOn: boolean,
};

/** Accepts a function (not a ReactNode) as children) */
type StatefulToggleProps = {
  render(state: ChildProps): React.ReactNode,
};

/**
 * A render props pattern using component that can be used to create multiple
 * independent toggle functions.
 */
class ToggleProvider extends React.Component<StatefulToggleProps, StatefulToggleState> {

  readonly state:StatefulToggleState = {
    isOn: false,
  };

  constructor (props: StatefulToggleProps) {
    super(props);

    this.doToggle = this.doToggle.bind(this);
  }

  doToggle = () =>
    this.setState({
      isOn: !this.state.isOn,
    })

  render () {
    return this.props.render({
      isOn: this.state.isOn,
      doToggle: this.doToggle,
    });
  }

}

export default ToggleProvider;
