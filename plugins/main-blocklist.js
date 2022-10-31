
let handler = async (m, { conn }) => {
	
	await conn.fetchBlocklist().then(async data => {
		let txt = `☣ BLOQUEADOS️ ☣️\n\nTotal 👉🏻 ${data.length}\n\n╭═•⋆ঈ❥\n`
		for (let i of data) {
			txt += `᳆͜͡➣ @${i.split("@")[0]}\n`
		}
		txt += "╰•⋆҈͜͡.➣❂ᵗᵘʳᵇⁱᵗᵒ ᵇᵒᵗ❂◄⋆҈͜͡•╯"
		return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
	}).catch(err => {
		console.log(err);
		throw '🤖 No hay bloqueados'
	})
}

handler.help = ['blocklist']
handler.tags = ['main']
handler.command = ['blocklist', 'listblock'] 

export default handler
