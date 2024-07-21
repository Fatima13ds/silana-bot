let handler = async (m, { conn, usedPrefix, command }) => {
		
			await conn.sendMessage(m.chat, { video: { url: dir[Math.floor(Math.random() * dir.length)] }, caption: `إنضم إلى مجموعتي الخاصة`
https://chat.whatsapp.com/H7iwUtSGtFZI8q0Xf4tbpz }, { quoted: m })
	}

handler.help = ['intro']
handler.tags = ['tools']
handler.command = /^(intro)$/i
handler.limit = false

export default handler

const dir = [
'https://telegra.ph/file/36798b631d09cb2056ff9.mp4',
]
