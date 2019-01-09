import * as React from 'react';
import { Route } from 'react-router-dom';
import { ModalRoute } from 'react-router-modal';
import AddWalletsScreen from '../screens/AddWalletsScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import MasternodesManagerScreen from '../screens/MasternodesManagerScreen';
import SignupScreen from '../screens/SignupScreen';
import WalletManagerScreen from '../screens/WalletManagerScreen';

const baseModalProps = {
  inClassName: 'react-router-modal__modal-in',
  outClassName: 'react-router-modal__modal-out',
  backdropClassName: 'react-router-modal__backdrop',
  backdropInClassName: 'react-router-modal__backdrop-in',
  backdropOutClassName: 'react-router-modal__backdrop-out',
  outDelay: 500,
};

/**
 * Route interface definition.
 */
type IRoute = {
  /** Component to be rendered at this route. */
  component: React.ComponentClass,
  /** Sets the route parser to match only an exact match for the pattern provided. */
  isExact: boolean,
  /** Is the route serving a modal or a regular view? */
  isModal: boolean,
  /** Regular expression pattern to serve up this route.  */
  path: string,
};

const routeList:IRoute[] = [
  {
    component: AddWalletsScreen,
    isExact: true,
    isModal: true,
    path: '*/add-wallets',
  },
  {
    component: SignupScreen,
    isExact: true,
    isModal: true,
    path: '*/signup',
  },
  {
    component: LoginScreen,
    isExact: true,
    isModal: true,
    path: '*/signin',
  },
  {
    component: MasternodesManagerScreen,
    isModal: false,
    isExact: false,
    path: '/masternodes',
  },
  {
    component: WalletManagerScreen,
    isModal: false,
    isExact: false,
    path: '/wallets',
  },
  {
    component: HomeScreen,
    isModal: false,
    isExact: true,
    path: '/',
  },
];

export default class Routes extends React.Component {
  constructor (props:any) {
    super(props);
  }

  /**
   * Renders routes defined in the `routeList` params.
   *
   * @param {Array<IRoute>} routeList - List of routes.
   * @param {Object} props - Route props.
   *
   * @returns React.ReactNode
   */
  renderRoutes (
    routeList:IRoute[],
    props:any,
  ) {
    return routeList.map((route, i) => (
      // Render the <ModalRoute /> component only if a modal route encountered.
      route.isModal ?
      <ModalRoute
        component={route.component}
        exact={route.isExact}
        key={i}
        parentPath={props.match.path}
        path={route.path}
        {...baseModalProps}
      /> :
      <Route
        component={route.component}
        exact={route.isExact}
        key={i}
        path={route.path}
        {...baseModalProps}
      />
    ));
  }

  render () {
    return (
      <Route render={(props) => {
        return (
          <div style={{
            width: '100%',
          }}>
            {this.renderRoutes(routeList, props)}
          </div>
        );
      }} />
    );
  }
}
