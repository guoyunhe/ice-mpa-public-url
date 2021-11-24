import { IRouterConfig } from 'ice';
import Home from './Home';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/tab1',
    exact: true,
    component: Tab1,
  },
  {
    path: '/tab2',
    exact: true,
    component: Tab2,
  },
];
export default routerConfig;
