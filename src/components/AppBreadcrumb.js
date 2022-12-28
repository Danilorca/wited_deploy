import {
  CBreadcrumb,
  CBreadcrumbItem,
  CButton,
  CCol,
  CContainer,
  CNavbar,
  CRow,
} from '@coreui/react'
import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilArrowLeft, cilOptions, cilSave } from '@coreui/icons'

const AppBreadcrumb = () => {
  return (
    <CNavbar className="navbar-custom">
      <CContainer className="d-flex docs-highlight nav-container">
        <CBreadcrumb flex-grow-1 docs-highlight className="cbreadcrumb-item-container">
          <CBreadcrumbItem className="nav-home-container">
            <CIcon icon={cilArrowLeft} size="lg" />
            <a className="text-decoration-none ps-3" href="#">
              Home
            </a>
          </CBreadcrumbItem>
          <CBreadcrumbItem>
            <a className="text-decoration-none" href="#">
              Editor de clases en vivo
            </a>
          </CBreadcrumbItem>
          <CBreadcrumbItem active>Crear nueva clase</CBreadcrumbItem>
        </CBreadcrumb>
        <CRow>
          <CCol>
            <CButton color="primary" className="btn_nav">
              <CIcon size="lg" icon={cilSave} />
              <p>Guardar</p>
            </CButton>
          </CCol>
          <CCol>
            <CButton color="primary" className="btn_nav justify-content-end">
              <CIcon size="lg" icon={cilOptions} />
            </CButton>
          </CCol>
        </CRow>
      </CContainer>
    </CNavbar>
  )
}

export default AppBreadcrumb
