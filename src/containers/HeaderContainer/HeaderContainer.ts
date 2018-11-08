import { connect } from 'react-redux';
import { HeaderState } from './reducers';
import Header from '../../components/Header';

const mapStateToProps = (state: HeaderState) => state.name;
const mapDispatchToProps = ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Header);
