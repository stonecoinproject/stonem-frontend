import react, { SFC } from 'react';

import { connect } from 'react-redux';
import Login from '../../components/Login';
import { LoginScreenState } from './reducer';

const mapStateToProps = (state: LoginScreenState) => {
  return {
    isLoading: state.isLoading,
  };
};
const mapDispatchToProps = ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Login);
