import {
  FormWrapper,
  StyledForm,
  Header,
  SubHeader,
  InputSection,
  Label,
  Select,
  Option,
  Input,
  InputGroup,
  InputWrapper,
} from "./Form.styles"
import Submit from "./Submit/Submit"
import Error from "./Error/Error"
import ItemList from "./ItemList/ItemList"
import ModalOverlay from "../common/ModalOverlay/ModalOverlay"
import { StyledDatePicker } from "./Form.styles"
import "react-datepicker/dist/react-datepicker.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { closeForm } from "../../store/actions/invoicesActions"
import { useState, useRef } from "react"
import { addInvoice, saveChanges } from "../../store/actions/invoicesActions"
import validateForm from "../../utilities/validateForm"
import { formVariants } from "../../utilities/variants"

const initialFormState = {
  createdAt: new Date(),
  paymentDue: "",
  description: "",
  senderAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  clientName: "",
  clientEmail: "",
  clientAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  status: "",
  items: [],
  total: 0,
}

function Form() {
  const [paymentTerms, setPaymentTerms] = useState(1)
  const { isEditModeOpen, invoiceItems, invoiceId } = useSelector(
    (state) => state.invoices
  )

  const isEditForm = useRef(isEditModeOpen)
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  const [messages, setMessages] = useState([])
  const [isValidated, setIsValidated] = useState(false)

  useEffect(() => {
    isEditForm.current
      ? setFormData(invoiceItems.find((item) => item.id === invoiceId))
      : setFormData(initialFormState)
  }, [isEditModeOpen, invoiceId, invoiceItems])

  const dispatch = useDispatch()

  const discard = () => {
    dispatch(closeForm())
  }

  const handleFormChange = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    }
    const { errors } = validateForm(newFormData)
    setErrors(errors)
    setFormData(newFormData)
  }

  const handleAddressChange = (e) => {
    const keys = e.target.name.split(".")
    const target = keys.pop()
    const newFormData = { ...formData }
    let pointer = newFormData
    keys.forEach((key) => {
      pointer[key] = { ...pointer[key] }
      pointer = pointer[key]
    })
    pointer[target] = e.target.value
    const { errors } = validateForm(newFormData)
    setErrors(errors)
    setFormData(newFormData)
  }

  const prepareFormData = () => {
    const submittedFormData = { ...formData }
    let createdAt = new Date(submittedFormData.createdAt)
    const paymentDue = new Date(
      createdAt.setDate(createdAt.getDate() + parseInt(paymentTerms))
    )
    submittedFormData.paymentDue = paymentDue
    submittedFormData.paymentTerms = parseInt(paymentTerms)
    return submittedFormData
  }

  const handleAddInvoice = (e) => {
    e.preventDefault()
    const submittedFormData = prepareFormData()
    const status = e.target.value
    submittedFormData.status = status ? status : "pending"
    if (status === "draft") {
      dispatch(addInvoice(submittedFormData))
    } else {
      validateAndSubmitForm(submittedFormData, () =>
        addInvoice(submittedFormData)
      )
    }
  }

  const handleEditSubmit = () => {
    const editedFormData = prepareFormData()
    editedFormData.status = "pending"
    validateAndSubmitForm(editedFormData, () =>
      saveChanges(invoiceId, editedFormData)
    )
  }

  const validateAndSubmitForm = (form, cb) => {
    const { isPassed, errors, messages } = validateForm(form)
    setIsValidated(true)
    if (isPassed) {
      dispatch(cb())
    } else {
      setErrors(errors)
      setMessages(messages)
    }
  }

  return (
    <>
      <ModalOverlay />
      <FormWrapper
        variants={formVariants.form}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Header>
          {isEditForm.current ? `Edit #${invoiceId}` : "New Invoice"}
        </Header>
        <StyledForm>
          <InputSection>
            <SubHeader>Bill from</SubHeader>
            <InputWrapper>
              <Label
                htmlFor="streetAddress"
                error={errors.senderAddress?.street}
                isValidated={isValidated}
              >
                Street Address
              </Label>
              <Input
                id="streetAddress"
                name="senderAddress.street"
                onChange={handleAddressChange}
                value={formData.senderAddress.street}
                error={errors.senderAddress?.street}
                isValidated={isValidated}
              />
            </InputWrapper>
            <InputGroup>
              <InputWrapper>
                <Label
                  htmlFor="city"
                  error={errors.senderAddress?.city}
                  isValidated={isValidated}
                >
                  City
                </Label>
                <Input
                  id="city"
                  name="senderAddress.city"
                  onChange={handleAddressChange}
                  value={formData.senderAddress.city}
                  error={errors.senderAddress?.city}
                  isValidated={isValidated}
                />
              </InputWrapper>
              <InputWrapper>
                <Label
                  htmlFor="postCode"
                  error={errors.senderAddress?.postCode}
                  isValidated={isValidated}
                >
                  Post Code
                </Label>
                <Input
                  id="postCode"
                  name="senderAddress.postCode"
                  onChange={handleAddressChange}
                  value={formData.senderAddress.postCode}
                  error={errors.senderAddress?.postCode}
                  isValidated={isValidated}
                />
              </InputWrapper>
              <InputWrapper>
                <Label
                  htmlFor="country"
                  error={errors.senderAddress?.country}
                  isValidated={isValidated}
                >
                  Country
                </Label>
                <Input
                  id="country"
                  name="senderAddress.country"
                  onChange={handleAddressChange}
                  value={formData.senderAddress.country}
                  error={errors.senderAddress?.country}
                  isValidated={isValidated}
                />
              </InputWrapper>
            </InputGroup>
          </InputSection>
          <InputSection>
            <SubHeader>Bill to</SubHeader>
            <InputWrapper>
              <Label
                htmlFor="clientName"
                error={errors.clientName}
                isValidated={isValidated}
              >
                Client's Name
              </Label>
              <Input
                id="clientName"
                name="clientName"
                onChange={handleFormChange}
                value={formData.clientName}
                error={errors.clientName}
                isValidated={isValidated}
              />
            </InputWrapper>
            <InputWrapper>
              <Label
                htmlFor="clientEmail"
                error={errors.clientEmail}
                isValidated={isValidated}
              >
                Client's Email
              </Label>
              <Input
                id="clientEmail"
                name="clientEmail"
                onChange={handleFormChange}
                value={formData.clientEmail}
                type="email"
                placeholder="e.g. email@example.com"
                error={errors.clientEmail}
                isValidated={isValidated}
              />
            </InputWrapper>
            <InputWrapper>
              <Label
                htmlFor="clientStreet"
                error={errors.clientAddress?.street}
                isValidated={isValidated}
              >
                Street Address
              </Label>
              <Input
                id="clientStreet"
                name="clientAddress.street"
                onChange={handleAddressChange}
                value={formData.clientAddress.street}
                error={errors.clientAddress?.street}
                isValidated={isValidated}
              />
            </InputWrapper>
            <InputGroup>
              <InputWrapper>
                <Label
                  htmlFor="clientCity"
                  error={errors.clientAddress?.city}
                  isValidated={isValidated}
                >
                  City
                </Label>
                <Input
                  id="clientCity"
                  name="clientAddress.city"
                  onChange={handleAddressChange}
                  value={formData.clientAddress.city}
                  error={errors.clientAddress?.city}
                  isValidated={isValidated}
                />
              </InputWrapper>
              <InputWrapper>
                <Label
                  htmlFor="clientPostCode"
                  error={errors.clientAddress?.postCode}
                  isValidated={isValidated}
                >
                  Post Code
                </Label>
                <Input
                  id="clientPostCode"
                  name="clientAddress.postCode"
                  onChange={handleAddressChange}
                  value={formData.clientAddress.postCode}
                  error={errors.clientAddress?.postCode}
                  isValidated={isValidated}
                />
              </InputWrapper>
              <InputWrapper>
                <Label
                  htmlFor="clientCountry"
                  error={errors.clientAddress?.country}
                  isValidated={isValidated}
                >
                  Country
                </Label>
                <Input
                  id="clientCountry"
                  name="clientAddress.country"
                  onChange={handleAddressChange}
                  value={formData.clientAddress.country}
                  error={errors.clientAddress?.country}
                  isValidated={isValidated}
                />
              </InputWrapper>
            </InputGroup>
            <InputGroup>
              <InputWrapper>
                <Label htmlFor="date">Invoice Date</Label>
                <StyledDatePicker
                  id="date"
                  dateFormat="dd MMM yyyy"
                  selected={new Date(formData.createdAt)}
                  name="createdAt"
                  minDate={new Date()}
                  onChange={(date) =>
                    setFormData({ ...formData, createdAt: date })
                  }
                />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="paymentTerms">Payment Terms</Label>
                <Select onChange={(e) => setPaymentTerms(e.target.value)}>
                  <Option value="1">Net 1 Days</Option>
                  <Option value="7">Net 7 Days</Option>
                  <Option value="14">Net 14 Days</Option>
                  <Option value="30">Net 30 Days</Option>
                </Select>
              </InputWrapper>
            </InputGroup>
            <InputWrapper>
              <Label
                htmlFor="description"
                error={errors.description}
                isValidated={isValidated}
              >
                Project Description
              </Label>
              <Input
                id="description"
                name="description"
                onChange={handleFormChange}
                value={formData.description}
                placeholder="e.g. Graphic Design Service"
                error={errors.description}
                isValidated={isValidated}
              />
            </InputWrapper>
          </InputSection>
          <ItemList
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
            isValidated={isValidated}
          />
          <Error messages={messages} />
        </StyledForm>
        <Submit
          isEditForm={isEditForm.current}
          discard={discard}
          handleAddInvoice={handleAddInvoice}
          handleEditSubmit={handleEditSubmit}
        />
      </FormWrapper>
    </>
  )
}
export default Form
