const validateForm = (form) => {
  let isPassed = true
  const errors = {}
  const messages = []
  for (const key in form) {
    const value = form[key]
    if (["paymentDue", "total", "status"].includes(key)) continue
    if (!value) {
      isPassed = false
      errors[key] = true
    }

    if (typeof value === "object" && !Array.isArray(value) && value !== null) {
      for (const nestedKey in value) {
        if (!value[nestedKey]) {
          isPassed = false
          errors[key] = { ...errors[key], [nestedKey]: true }
        }
      }
    }

    if (Array.isArray(value)) {
      const res = []
      if (value.length === 0) {
        isPassed = false
        errors[key] = true
      } else {
        value.forEach((item) => {
          let error
          for (let key in item) {
            error = false
            if (!item[key]) {
              isPassed = false
              error = true
              item = { ...item, [key]: true }
            } else {
              item = { ...item, [key]: false }
            }
          }

          if (Object.keys(item).length && error) {
            errors[key] = res
            res.push(item)
          }
        })
      }
    }

    if (key === "clientEmail" && !checkEmail(value)) {
      isPassed = false
      errors[key] = true
    }
  }
  return { isPassed, errors, messages }
}

const checkEmail = (email) => {
  //eslint-disable-next-line
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g
  return regex.test(email)
}

export default validateForm
