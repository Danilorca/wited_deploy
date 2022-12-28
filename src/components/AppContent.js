import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import {
  CContainer,
  CForm,
  CFormLabel,
  CFormInput,
  CFormTextarea,
  CRow,
  CCol,
  CButton,
  CFormCheck,
  CToast,
  CToastBody,
  CToastClose,
} from '@coreui/react'

// routes config
import routes from '../routes'
import CIcon from '@coreui/icons-react'
import { cilTrash, cilPaperclip } from '@coreui/icons'

const AppContent = () => {
  return (
    <CContainer>
      <h2>Crear clase en vivo</h2>
      <CForm className="border bg-white p-4">
        <CFormLabel className="mt-4" htmlFor="nombreClase">
          Nombre de la clase
        </CFormLabel>
        <CFormInput type="text" id="nombreClase" aria-describedby="nombreClase" />
        <CFormLabel htmlFor="descripcionClase">Descripción de la clase</CFormLabel>
        <CFormTextarea id="descripcionClase" rows={3}></CFormTextarea>

        <h5 className="mb-3 mt-5">Adjuntar material descargable</h5>
        <CContainer>
          <CRow xs={{ gutter: 1 }} className="align-items-end mb-2">
            <CCol md={6}>
              <CFormLabel htmlFor="updateArchivo1">Nombre del archivo</CFormLabel>
              <CFormTextarea id="updateArchivo1" rows={1}></CFormTextarea>
            </CCol>
            <CCol md={6}>
              <CRow>
                <CCol md={11}>
                  <CFormTextarea placeholder="1B-526995.pdf" rows={1}></CFormTextarea>
                </CCol>
                <CCol md={1}>
                  <CButton color="danger">
                    <CIcon icon={cilTrash} className="svg-color" />
                  </CButton>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CContainer>
        <CContainer fluid>
          <CRow lg={{ gutter: 1 }} className="align-items-end mb-2">
            <CCol md={6}>
              <CFormLabel htmlFor="updateArchivo2" className="label-text">
                {' '}
                Nombre del archivo
              </CFormLabel>
              <CFormTextarea id="updateArchivo2" rows={1}></CFormTextarea>
            </CCol>
            <CCol md={6}>
              <CRow>
                <CCol md={11}>
                  <CFormTextarea placeholder="1B-526996.pdf" rows={1}></CFormTextarea>
                </CCol>
                <CCol md={1}>
                  <CButton color="danger">
                    <CIcon icon={cilTrash} className="svg-color" />
                  </CButton>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CContainer>

        <CContainer>
          <CRow>
            <CCol>
              <CButton color="primary" className="add_Archivo mb-5">
                <CIcon icon={cilPaperclip} />
                <p>Adjuntar Archivo</p>
              </CButton>
            </CCol>
          </CRow>
        </CContainer>

        <CContainer>
          <CRow className="mb-2">
            <CCol>
              <CFormLabel htmlFor="profesor">Profesor</CFormLabel>
              <select className="form-select" id="profesor" aria-label="profesor">
                <option selected>Selecciona</option>
                <option value="1">Ana María Bravo</option>
                <option value="2">Camila Castillo</option>
                <option value="3">Pedro Capo</option>
              </select>
            </CCol>
          </CRow>
          <CRow className="mb-2">
            <CCol>
              <CFormLabel htmlFor="zoom">Cuenta de Zoom</CFormLabel>
              <select className="form-select" id="zoom" aria-label="zoom">
                <option selected>Selecciona</option>
                <option value="1">Clase 1</option>
                <option value="2">Clase 2</option>
                <option value="3">Clase 3</option>
              </select>
            </CCol>
          </CRow>
          <CRow className="align-items-end mb-2">
            <CCol md={2}>
              <CFormLabel htmlFor="fecha">Fecha</CFormLabel>
              <select className="form-select" id="fecha" aria-label="fecha">
                <option selected>Calendario</option>
                <option value="1">Enero</option>
                <option value="2">Febrero</option>
                <option value="3">Marzo</option>
                <option value="4">Abril</option>
                <option value="5">Mayo</option>
                <option value="6">Junio</option>
                <option value="7">Julio</option>
                <option value="8">Agosto</option>
                <option value="9">Septiembre</option>
                <option value="10">Octubre</option>
                <option value="11">Noviembre</option>
                <option value="12">Diciembre</option>
              </select>
            </CCol>
            <CCol md={2}>
              <CFormLabel htmlFor="horarios">Hora</CFormLabel>
              <select className="form-select" id="horarios" aria-label="horarios">
                <option selected>00:00</option>
                <option value="1">01:00</option>
                <option value="2">02:00</option>
                <option value="3">03:00</option>
                <option value="4">04:00</option>
                <option value="5">05:00</option>
                <option value="6">06:00</option>
                <option value="7">07:00</option>
                <option value="8">08:00</option>
                <option value="9">09:00</option>
                <option value="10">10:00</option>
                <option value="11">11:00</option>
                <option value="12">12:00</option>
              </select>
            </CCol>
            <CCol md={2}>
              <select className="form-select" id="Hora" aria-label="Default select example">
                <option selected>AM</option>
                <option value="1">PM</option>
              </select>
            </CCol>
          </CRow>

          <CRow>
            <CCol md={4} className="mb-5">
              <CFormLabel className="mt-1" htmlFor="cantidadEstudiantes">
                Cantidad de estudiantes Máximo
              </CFormLabel>
              <CFormInput
                type="text"
                id="cantidadEstudiantes"
                placeholder="30"
                aria-describedby="cantidadEstudiantes"
              />
            </CCol>
          </CRow>
        </CContainer>

        <CContainer>
          <h5>Pais</h5>
          <CContainer className="border p-3 mb-5">
            <CRow className="mb-2">
              <CCol>
                <CFormCheck id="Todos" label="Todos" defaultChecked />
              </CCol>
              <CCol>
                <CFormCheck id="Chile" label="Chile" />
              </CCol>
              <CCol>
                <CFormCheck id="México" label="México" />
              </CCol>
              <CCol>
                <CFormCheck id="Colombia" label="Colombia" />
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <CFormCheck id="Venezuela" label="Venezuela" />
              </CCol>
              <CCol>
                <CFormCheck id="Argentina" label="Argentina" />
              </CCol>
              <CCol>
                <CFormCheck id="Perú" label="Perú" />
              </CCol>
              <CCol>
                <CFormCheck id="Uruguay" label="Uruguay" />
              </CCol>
            </CRow>
          </CContainer>
        </CContainer>

        <CContainer>
          <CContainer className="border p-3">
            <h5>Cursos</h5>
            <CRow>
              <CCol md={2}>
                <CToast autohide={false} visible={true} color="none" className="text-black">
                  <div className="d-flex">
                    <CToastBody>Primer básico</CToastBody>
                    <CToastClose className="me-2 m-auto" black />
                  </div>
                </CToast>
              </CCol>
              <CCol md={2}>
                <CToast autohide={false} visible={true} color="none" className="text-black">
                  <div className="d-flex">
                    <CToastBody>Segundo básico</CToastBody>
                    <CToastClose className="me-2 m-auto" black />
                  </div>
                </CToast>
              </CCol>
              <CCol md={2}>
                <CToast autohide={false} visible={true} color="none" className="text-black">
                  <div className="d-flex">
                    <CToastBody>Lecto Escritura</CToastBody>
                    <CToastClose className="me-2 m-auto" black />
                  </div>
                </CToast>
              </CCol>
              <CCol md={3}>
                <CToast autohide={false} visible={true} className="text-white button-bg-color">
                  <div className="d-flex">
                    <CToastBody>Añadir mas cursos</CToastBody>
                    <CToastClose className="me-2 m-auto" white />
                  </div>
                </CToast>
              </CCol>
            </CRow>
          </CContainer>
        </CContainer>

        <CContainer>
          <CContainer className="border p-3 mt-5">
            <CRow>
              <CFormLabel htmlFor="Asignatura">Asignatura</CFormLabel>
              <CFormInput
                type="text"
                id="Asignatura"
                aria-describedby="nombreClase"
                placeholder="Matemáticas"
              />
            </CRow>
          </CContainer>
        </CContainer>

        <CContainer>
          <CContainer className="border p-3 mt-5">
            <h5>QA</h5>
            <CRow>
              <CCol sm={1}>
                <CToast autohide={false} visible={true} className="text-white button-bg-color">
                  <div className="d-flex">
                    <CToastBody>1BOA1</CToastBody>
                    <CToastClose className="me-2 m-auto" white />
                  </div>
                </CToast>
              </CCol>
              <CCol sm={1}>
                <CToast autohide={false} visible={true} className="text-white button-bg-color">
                  <div className="d-flex">
                    <CToastBody>2BOA3</CToastBody>
                    <CToastClose className="me-2 m-auto" white />
                  </div>
                </CToast>
              </CCol>
              <CCol sm={1}>
                <CToast autohide={false} visible={true} className="text-white button-bg-color">
                  <div className="d-flex">
                    <CToastBody>1BOA10</CToastBody>
                    <CToastClose className="me-2 m-auto" white />
                  </div>
                </CToast>
              </CCol>
            </CRow>
          </CContainer>
        </CContainer>

        <CContainer>
          <CContainer className="p-3 mt-3">
            <CRow>
              <CFormLabel htmlFor="url">URL de Zoom</CFormLabel>
              <CFormInput
                type="text"
                id="url"
                aria-describedby="url"
                placeholder="Generador Automáticamente"
              />
            </CRow>
          </CContainer>
        </CContainer>
      </CForm>
    </CContainer>
  )
}

export default React.memo(AppContent)
