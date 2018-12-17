import { connect } from 'react-redux';
import AddWallets from '../../components/AddWallets';
import { AddWalletsScreenState } from './reducer';

const mapStateToProps = (state: AddWalletsScreenState) => {
  return {
    isLoading: state.isLoading,
  };
};
const mapDispatchToProps = ({ });

export default connect(mapStateToProps, mapDispatchToProps)(AddWallets);
