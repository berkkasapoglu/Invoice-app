const validateForm = (form) => {
  const errors = {}
  let messages = []
  for (const key in form) {
    const value = form[key]
    if (["paymentDue", "total", "status"].includes(key)) continue
    if (!value) {
      errors[key] = true
      messages.push("* All fieds must be included.")
    }

    if (typeof value === "object" && !Array.isArray(value) && value !== null) {
      for (const nestedKey in value) {
        if (!value[nestedKey]) {
          errors[key] = { ...errors[key], [nestedKey]: true }
          messages.push("* All fieds must be included.")
        }
      }
    }

    if (Array.isArray(value)) {
      const res = []
      if (value.length === 0) {
        errors[key] = true
        messages.push("* Item list can not be empty.")
      } else {
        value.forEach((item) => {
          for (let key in item) {
            if (!item[key]) {
              item = { ...item, [key]: true }
            } else {
              item = { ...item, [key]: false }
            }
          }

          if (Object.keys(item).length) {
            res.push(item)
            errors[key] = res
          }
        })
      }
    }

    if (key === "clientEmail" && !checkEmail(value)) {
      errors[key] = true
      messages.push("* Email must be in proper format.")
    }
  }
  let isPassed = true
  if (Object.keys(errors).length === 1 && Object.keys(errors)[0] === "items") {
    if (!Array.isArray(errors.items)) isPassed = false
    else
      errors.items.forEach((item) => {
        for (let key in item) {
          if (item[key] === true) {
            isPassed = false
            messages.push("* All fieds must be included.")
          }
        }
      })
  } else isPassed = false
  messages = [...new Set(messages)]
  return { errors, messages, isPassed }
}

const checkEmail = (email) => {
  //eslint-disable-next-line
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g
  return regex.test(email)
}

export default validateForm
