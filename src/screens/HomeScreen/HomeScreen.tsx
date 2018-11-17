import react, { SFC } from 'react';

import { connect } from 'react-redux';
import Home from '../../components/Home';
import { HomeScreenState } from './reducer';

const mapStateToProps = (state: HomeScreenState) => {
  return {
    isLoading: state.isLoading,
  };
};
const mapDispatchToProps = ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Home);
