import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*

*Owner :*\nwa.me/212710725533

*My Group:* *https://chat.whatsapp.com/H7iwUtSGtFZI8q0Xf4tbpz*

*Number bot:*\nwa.me/212633378152

> *SASUKE TECH* ❤️😄

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
