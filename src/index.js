/**
 * @file home
 * @author: dabeen(lidianbin@baidu.com)
 * @date:   2017-03-31 20:58:26
 */

import Article from './components/article';
import Icon from './components/icon';
import { Flex, FlexItem } from './components/flex'
import { Grids, Grid, GridLabel, GridIcon } from './components/grid';
import { Footer, FooterLink, FooterLinks, FooterText } from './components/footer';
import { Panel, PanelHeader, PanelBody, PanelFooter} from './components/panel';
import { 
    Mediabox, 
    MediaboxHeader, 
    MediaboxBody, 
    MediaboxTitle, 
    MediaboxDesc, 
    MediaboxInfo, 
    MediaboxInfoMeta,
    MediaboxImg
} from './components/mediabox';
import { Cell, CellHeader, CellBody, CellFooter, Cells, CellsTips, CellsTitle } from './components/cell';
import Progress from './components/progress';
import { Button, ButtonArea, ButtonPreview } from './components/button';
import {
    Preview,
    PreviewHeader,
    PreviewBody,
    PreviewFooter,
    PreviewItem
} from './components/preview';
import Badge from './components/badge'

const Version  = '0.0.2';
// console.log(Article);

export {
    Version,

    //0.0.1
    Article,
    Flex,
    FlexItem,
    Icon,
    Grids, Grid, GridLabel, GridIcon,

    //0.0.2
    Footer,
    FooterText,
    FooterLink,
    FooterLinks,
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter,
    Mediabox,
    MediaboxHeader,
    MediaboxBody,
    MediaboxTitle,
    MediaboxDesc,
    MediaboxInfo,
    MediaboxInfoMeta,
    MediaboxImg,
    Cell,
    CellBody,
    CellFooter,
    CellHeader,
    Cells,
    CellsTips,
    CellsTitle,
    Progress,
    Button,
    ButtonArea,
    ButtonPreview,
    Preview,
    PreviewHeader,
    PreviewBody,
    PreviewFooter,
    PreviewItem,
    Badge
};
