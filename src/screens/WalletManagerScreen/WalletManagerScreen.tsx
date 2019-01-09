import * as React from 'react';

import { connect } from 'react-redux';
import WalletManager from '../../components/WalletManager';
import { WalletManagerScreenState } from './reducer';

const mapStateToProps = (state: WalletManagerScreenState) => {
  return {
    isLoading: state.isLoading,
  };
};
const mapDispatchToProps = ({ });

export default connect(mapStateToProps, mapDispatchToProps)(WalletManager);
