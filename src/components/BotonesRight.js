import CIcon from '@coreui/icons-react'
import { CButton, CCol, CRow } from '@coreui/react'
import React from 'react'
import { cilOptions, cilSave } from '@coreui/icons'

const BotonesRight = () => {
  return (
    <CRow>
      <CCol>
        <CButton color="primary" className="add_Archivo">
          <CIcon size="lg" icon={cilSave} />
          <p>Guardar</p>
        </CButton>
      </CCol>
      <CCol>
        <CButton color="primary" className="add_Archivo justify-content-end">
          <CIcon size="lg" icon={cilOptions} className="CilOptions-rotate" />
        </CButton>
      </CCol>
    </CRow>
  )
}

export default BotonesRight
