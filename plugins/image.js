import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
const prohibited = ['caca', 'polla', 'porno', 'porn', 'gore', 'cum', 'semen', 'puta', 'puto', 'ميسي', 'ليونيل', 'messi','missi', 'hentai', 'pene', 'po rno', 'asesinato', 'zoofilia', 'mia khalifa', 'desnudo', 'desnuda', 'بورنو', 'سكس', 'muertos', 'pornhub', 'xnxx', 'xvideos', 'teta', 'vagina', 'marsha may', 'misha cross', 'sexmex', 'furry', 'furro', 'furra', 'xxx', 'rule34', 'panocha', 'pedofilia', 'necrofilia', 'pinga', 'horny', 'ass', 'nude', 'popo', 'nsfw', 'femdom', 'futanari', 'erofeet', 'sexo', 'sex', 'yuri', 'ero', 'ecchi', 'blowjob', 'anal', 'ahegao', 'pija', 'verga', 'sex', '+18', 'violacion', 'akhna', 'cachonda', '+18', 'cp', 'mia marin', 'lana rhoades', 'cepesito', 'hot', 'buceta', 'xxx']
if (prohibited.some(word => m.text.toLowerCase().includes(word))) return conn.reply(m.chat, '🔖 *لن أعطي نتائج لطلبك* 🙅🏻', m, )

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) throw `*تحميل صور من غوغل*\nمثــــال :\n*.صورة* ساسكي اوتشيها`

const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendFile(m.chat, link, 'error.jpg', `> *SASUKE TECH ☑️*` , m) 
}
handler.help = ['image']
handler.tags = ['downloader']
handler.command = /^(صورة)$/i

export default handler
