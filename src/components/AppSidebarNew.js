import React from 'react'
import { CSidebar, CSidebarNav, CIcon, CNavTitle, CNavItem, CBadge, CNavGroup } from '@coreui/react'
import { cilSpeedometer, cilPuzzle } from '@coreui/icons'

const AppSidebarNew = () => {
  return (
    <CSidebar>
      <CSidebarNav>
        <CNavTitle>Nav Title</CNavTitle>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
          Nav item
        </CNavItem>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
          With badge
          <CBadge color="primary ms-auto">NEW</CBadge>
        </CNavItem>
        <CNavGroup toggler="Nav dropdown">
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown item
          </CNavItem>
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown item
          </CNavItem>
        </CNavGroup>
      </CSidebarNav>
    </CSidebar>
  )
}

export default AppSidebarNew
