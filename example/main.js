import san from 'san';

// style
require('./main.less');


// route
import App from './App';
import Article from './pages/article/Article';
import Flex from './pages/flex/Flex';
import Icon from './pages/icons/Icon';
import Grid from './pages/grid/Grid';
import Footer from './pages/footer/Footer';
import Panel from './pages/panel/Panel';
import Progress from './pages/progress/Progress';
import Button from './pages/button/Button';
import Preview from './pages/preview/Preview';
import Badge from './pages/badge/Badge';
import Loadmore from './pages/loadmore/Loadmore';
import Swiper from './pages/swiper/Swiper';

import {router} from 'san-router';

router.add({rule: '/', Component: App, target: '#container'});
router.add({rule: '/article', Component: Article, target: '#container'});
router.add({rule: '/flex', Component: Flex, target: '#container'});
router.add({rule: '/icons', Component: Icon, target: '#container'});
router.add({rule: '/grid', Component: Grid, target: '#container'});
router.add({rule: '/footer', Component: Footer, target: '#container'});
router.add({rule: '/panel', Component: Panel, target: '#container'});
router.add({rule: '/progress', Component: Progress, target: '#container'});
router.add({rule: '/button', Component: Button, target: '#container'});
router.add({rule: '/preview', Component: Preview, target: '#container'});
router.add({rule: '/badge', Component: Badge, target: '#container'});
router.add({rule: '/loadmore', Component: Loadmore, target: '#container'});
router.add({rule: '/swiper', Component: Swiper, target: '#container'});

// start
router.start();
