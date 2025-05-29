import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command, text }) => {
if (!text) throw `*نسيت تكتب الحاجه ال انت عاوز تبحث عنها يحب*\n\n*—◉ مثال:*\n*${usedPrefix + command} سورة البقرة*`
try {
const { video } = await youtubeSearch(text)
const listSections = []
let teks = [...video ].map(v => {
switch (v.type) {
case 'video': {
listSections.push([`${v.title}`, [
['فديو 🎥', `${usedPrefix}ytmp4 ${v.url}`, `اختيار: ${v.title} (${v.url})`],
['فديو 🎥', `${usedPrefix}ytmp4doc ${v.url}`, `اختيار: ${v.title} (${v.url})`],    
['صوت 🎧', `${usedPrefix}ytmp3 ${v.url}`, `اختيار: ${v.title} (${v.url})`],
['صوت 🎧', `${usedPrefix}ytmp3doc ${v.url}`, `اختيار: ${v.title} (${v.url})`]
]])
}}}).filter(v => v).join('\n\n========================\n\n')
conn.sendList(m.chat, ' 『 𝐒𝐇𝐀𝐃𝐎𝐖 - 𝐁𝐎𝐓 』', `*نتائج ذات صلة*: ${args.join(" ")}`, 'اختارال انت عاوزه واعمل ارسال', '[♦ النتائج ♦]', listSections, m)
} catch {
await m.reply('*[❗ خطأ ❗] حاول مرة اخري باسم قائمة تشغيل اخري*')
}}
handler.command = /^قائمة|playlist2|قائمة-يوتيوب$/i
export default handler
