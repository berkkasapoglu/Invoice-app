import { Label, Input } from "../Form.styles"
import validateForm from "../../../utilities/validateForm"
import {
  StyledItemList,
  List,
  Row,
  Title,
  Head,
  Number,
  DeleteIcon,
} from "./ItemList.styles"
import Button from "../../common/Button/Button"

const initialItemState = {
  name: "",
  quantity: 0,
  price: 0,
  total: 0,
}

function ItemList({ formData, setFormData, errors, setErrors, isValidated }) {
  const { items } = formData

  const handleClickNewItem = (e) => {
    e.preventDefault()
    const itemsCopy = items.map((item) => ({ ...item }))
    itemsCopy.push(initialItemState)
    const newFormData = {
      ...formData,
      items: itemsCopy,
    }
    setFormData(newFormData)
  }

  const handleItemRemove = (idx) => {
    const itemsCopy = items.map((item) => ({ ...item }))

    const deletedItem = itemsCopy.splice(idx, 1)[0]
    const newFormData = {
      ...formData,
      items: itemsCopy,
      total: formData.total - deletedItem.total,
    }

    if (errors && Array.isArray(errors.items)) {
      const itemErrors = errors.items.map((item) => ({ ...item }))
      itemErrors.splice(idx, 1)
      setErrors({
        ...errors,
        items: itemErrors,
      })
    }
    setFormData(newFormData)
  }

  const onChange = (e, idx) => {
    const newItems = items.map((item) => ({ ...item }))
    const item = newItems[idx]
    item[e.target.name] = e.target.value
    let currentTotal = item.quantity * item.price
    let totalChange = currentTotal - item.total
    item.total = currentTotal
    const newFormData = {
      ...formData,
      items: newItems,
      total: formData.total + totalChange,
    }
    const { errors } = validateForm(newFormData)
    setErrors(errors)
    setFormData(newFormData)
  }

  const getLabelErrors = (key) => {
    let isError = false
    if (Array.isArray(errors)) {
      errors.forEach((item) => {
        if (item[key]) isError = true
      })
    }
    return isError
  }
  return (
    <StyledItemList>
      <Title>Item List</Title>
      {items.length ? (
        <>
          <Head>
            <Label
              error={errors && getLabelErrors("name")}
              isValidated={isValidated}
            >
              Item Name
            </Label>
            <Label
              error={errors && getLabelErrors("quantity")}
              isValidated={isValidated}
            >
              Qty.
            </Label>
            <Label
              error={errors && getLabelErrors("price")}
              isValidated={isValidated}
            >
              Price
            </Label>
            <Label>Total</Label>
          </Head>
          <List>
            {items.map((item, idx) => (
              <Row key={idx}>
                <Input
                  onChange={(e) => onChange(e, idx)}
                  value={item.name}
                  name="name"
                  error={errors && errors.items && errors.items[idx]?.name}
                  isValidated={isValidated}
                />
                <Input
                  onChange={(e) => onChange(e, idx)}
                  type="Number"
                  min={0}
                  value={item.quantity}
                  name="quantity"
                  error={errors && errors.items && errors.items[idx]?.quantity}
                  isValidated={isValidated}
                />
                <Input
                  onChange={(e) => onChange(e, idx)}
                  type="Number"
                  min={0}
                  value={item.price}
                  name="price"
                  error={errors && errors.items && errors.items[idx]?.price}
                  isValidated={isValidated}
                />
                <Number onChange={(e) => onChange(e, idx)} name="total">
                  {item.quantity * item.price}
                </Number>
                <DeleteIcon onClick={() => handleItemRemove(idx)} />
              </Row>
            ))}
          </List>
        </>
      ) : (
        ""
      )}
      <Button type="btnGray" onClick={handleClickNewItem} full>
        Add New Item
      </Button>
    </StyledItemList>
  )
}
export default ItemList
