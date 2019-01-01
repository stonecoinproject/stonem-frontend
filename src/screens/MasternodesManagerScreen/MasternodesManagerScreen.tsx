import * as React from 'react';

import { connect } from 'react-redux';
import MasternodesManager from '../../components/MasternodesManager';
import { MasternodesManagerScreenState } from './reducer';

const mapStateToProps = (state: MasternodesManagerScreenState) => {
  return {
    isLoading: state.isLoading,
  };
};
const mapDispatchToProps = ({ });

export default connect(mapStateToProps, mapDispatchToProps)(MasternodesManager);
