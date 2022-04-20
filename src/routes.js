import Backgroundcolor from './pages/BackgroundColor/Backgroundcolor';
import Backgroundgradient from './pages/Backgroundgradient/Backgroundgradient';
import Border from './pages/Border/Border';
import BorderRadius from './pages/BorderRadius/BorderRadius';
import Blur from './pages/Filter/Blur';
import Sepia from './pages/Filter/Sepia';
import Brightness from './pages/Filter/Brightness';
import Contrast from './pages/Filter/Contrast';
import Grayscale from './pages/Filter/Grayscale';
import HeuRotate from './pages/Filter/HeuRotate';
import Invert from './pages/Filter/Invert';
import Saturate from './pages/Filter/Saturate';
import Home from './pages/Home/Home';
import DropShadow from './pages/Filter/DropShadow';
import BoxShadow from './pages/Box/BoxShadow';
import { Navigate } from 'react-router-dom';
import Opasity from './pages/Box/Opasity';
import FontSize from './pages/Text/FontSize';
import Textcolor from './pages/Text/Textcolor';
import TextDecoration from './pages/Text/TextDecoration';

let router = [
    {path: '/', element: <Home />,},
    {path: '/backgroundcolor', element: <Backgroundcolor />,},
    {path: '/backgroundgradient', element: <Backgroundgradient />,},
    {path: '/border', element: <Border />,},
    {path: '/BorderRadius', element: <BorderRadius />,},
    {path: '/box/boxshadow', element: <BoxShadow />,},
    {path: '/box/opasity', element: <Opasity />,},
    {path: '/filter/blur', element: <Blur />,},
    {path: '/filter/sepia', element: <Sepia />,},
    {path: '/filter/brightness', element: <Brightness />,},
    {path: '/filter/contrast', element: <Contrast />,},
    {path: '/filter/grayscale', element: <Grayscale />,},
    {path: '/filter/heurotate', element: <HeuRotate />,},
    {path: '/filter/invert', element: <Invert />,},
    {path: '/filter/saturate', element: <Saturate />,},
    {path: '/filter/dropshadow', element: <DropShadow />,},
    {path: '/text/fontsize', element: <FontSize />,},
    {path: '/text/color', element: <Textcolor />,},
    {path: '/text/decoration', element: <TextDecoration />,},
    {path: '*', element: <Navigate to={'/'} />,},
  ]

export default router