import { connect } from 'react-redux';
import { HeaderState } from './reducer';
import Header from '../../components/Header';

const mapStateToProps = (state: HeaderState) => state.name;
const mapDispatchToProps = ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Header);
