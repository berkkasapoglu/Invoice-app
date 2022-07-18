const generateRandomId = () => {
  const idCharArray = Array.from(Array(6)).map((_, idx) => {
    if(idx < 2) {
      const index = Math.floor(Math.random() * 26) + 65
      const char = String.fromCharCode(index)
      return char
    } else {
      return Math.floor(Math.random() * 10)
    }
    
  })
  return idCharArray.join("")
}

const generateUniqueId = (data) => {
  const ids = data.map((item) => item.id)
  while(true) {
    const id = generateRandomId()
    if(!ids.includes(id)) return id
  }
}

export default generateUniqueId