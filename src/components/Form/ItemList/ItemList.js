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

function ItemList({ formData, setFormData, errors, setErrors }) {
  const { items } = formData
  const handleClickNewItem = (e) => {
    e.preventDefault()
    const itemsCopy = items.map((item) => ({ ...item }))
    itemsCopy.push(initialItemState)
    setFormData({
      ...formData,
      items: itemsCopy,
    })
  }

  const handleItemRemove = (idx) => {
    const itemsCopy = items.map((item) => ({ ...item }))
    const deletedItem = itemsCopy.splice(idx, 1)[0]
    setFormData({
      ...formData,
      items: itemsCopy,
      total: formData.total - deletedItem.total,
    })
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
  return (
    <StyledItemList>
      <Title>Item List</Title>
      {items.length ? (
        <>
          <Head>
            <Label>Item Name</Label>
            <Label>Qty.</Label>
            <Label>Price</Label>
            <Label>Total</Label>
          </Head>
          <List>
            {items.map((item, idx) => (
              <Row key={idx}>
                <Input
                  onChange={(e) => onChange(e, idx)}
                  value={item.name}
                  name="name"
                  error={errors && errors[idx]?.name}
                />
                <Input
                  onChange={(e) => onChange(e, idx)}
                  type="Number"
                  min={0}
                  value={item.quantity}
                  name="quantity"
                  error={errors && errors[idx]?.quantity}
                />
                <Input
                  onChange={(e) => onChange(e, idx)}
                  type="Number"
                  min={0}
                  value={item.price}
                  name="price"
                  error={errors && errors[idx]?.price}
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
