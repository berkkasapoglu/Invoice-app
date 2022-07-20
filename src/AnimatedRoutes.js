import Sidebar from "./components/Sidebar/Sidebar"
import Invoices from "./components/Invoices/Invoices"
import Container from "./components/Container/Container"
import InvoiceView from "./components/InvoiceView/InvoiceView"
import Form from "./components/FormController/Form"
import Modal from "./components/common/Modal/Modal"
import { AnimatePresence } from "framer-motion"
import { useSelector } from "react-redux"
import { Routes, Route, useLocation } from "react-router-dom"

function AnimatedRoutes() {
  const { isFormOpen, isModalOpen } = useSelector((state) => state.invoices)
  const location = useLocation()
  return (
    <>
      <Sidebar />
      <AnimatePresence>
        {isModalOpen && <Modal />}
        {isFormOpen && <Form />}
      </AnimatePresence>
      <Container>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Invoices />} />
            <Route path="/invoices/:id" element={<InvoiceView />} />
          </Routes>
        </AnimatePresence>
      </Container>
    </>
  )
}
export default AnimatedRoutes
