import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
 let name = conn.getName(m.sender)
  if (!text) throw `Hola 👋 ${name} Soy turbito bot, tu bebesito, quieres chat? 😏 \nResponde con ${usedPrefix + command} (tu mensaje) \n\n🤖 Ejemplo : ${usedPrefix + command} Hola turbito`
  m.react('🗣️') 
  //let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(m.text), lc: "es" }, ''))
  let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=es`)
  let json = await res.json()
  if (json.success) m.reply(json.success.replace('simsimi', 'Turbo').replace('Simsimi', 'Turbo').replace('sim simi', 'Turbo'))
  else throw json
}
handler.help = ['bot']
handler.tags = ['fun']
handler.command = ['bot', 'simi'] 

export default handler
