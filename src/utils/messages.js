const generateMessage = (username, text, bgColor = '#e0abe0') => {
  return {
    username,
    text,
    createdAt: new Date().getTime(),
    bgColor,
  }
}

const generateLocationMessage = (username, url,bgColor='#e0abe0') => {
  return {
    username,
    url,
    createdAt: new Date().getTime(),
    bgColor,
  }
}

module.exports = { generateMessage, generateLocationMessage }
