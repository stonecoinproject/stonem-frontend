import react, { SFC } from 'react';

import { connect } from 'react-redux';
import Signup from '../../components/Signup';
import { SignupScreenState } from './reducer';

const mapStateToProps = (state: SignupScreenState) => {
  return {
    isLoading: state.isLoading,
  };
};
const mapDispatchToProps = ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
// export default Signup;
