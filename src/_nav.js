import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilNotes,
  cilCheckAlt,
  cilPaperPlane,
  cilBook,
  cilEnvelopeClosed,
  cilVideo,
  cilTask,
  cilChatBubble,
  cilCog,
  cilMediaPlay,
  cilEducation,
  cilPin,
  cilReportSlash,
  cilBadge,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  /* {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  }, */
  /* {
    component: CNavTitle,
    name: 'Theme',
  }, */
  {
    component: CNavItem,
    name: 'Editor de Indicadores',
    to: '/theme/colors',
    icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Editor de contenidos',
    to: '/theme/colors',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Editor de evaluaciones',
    to: '/theme/colors',
    icon: <CIcon icon={cilCheckAlt} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Visualizar contenidos',
    to: '/theme/colors',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Profesor Online',
    to: '/theme/colors',
    icon: <CIcon icon={cilChatBubble} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Editor de clases en vivo',
    to: '/theme/colors',
    icon: <CIcon icon={cilVideo} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Mis clases en vivo',
    to: '/theme/colors',
    icon: <CIcon icon={cilMediaPlay} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Mis clases particulares',
    to: '/theme/colors',
    icon: <CIcon icon={cilEducation} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'PaperPlaner',
    to: '/theme/colors',
    icon: <CIcon icon={cilPaperPlane} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Desafios',
    to: '/theme/colors',
    icon: <CIcon icon={cilPin} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Reportes',
    to: '/theme/colors',
    icon: <CIcon icon={cilReportSlash} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Calificaciones',
    to: '/theme/colors',
    icon: <CIcon icon={cilBadge} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Comunicados',
    to: '/theme/colors',
    icon: <CIcon icon={cilEnvelopeClosed} customClassName="nav-icon" />,
  },
]

export default _nav
