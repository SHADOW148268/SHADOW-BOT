import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[❗] متنساش تضيف العنوان يحب او السيرش يحب*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*[❗] متنساش تضيف العنوان او السيرش يحب*'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
conn.sendHydrated(m.chat, `
📌 *العنوان:* ${title}
📇 *الوصف:* ${description}
📆 *منذ:* ${publishedTime}
⌚ *مدة الفديو:* ${durationH}
👀 *المشاهدات:* ${viewH}
`.trim(), author, thumbnail, `${url}`, '𝚄𝚁𝙻', null, null, [
['الصوت 🔊', `${usedPrefix}yta ${url}`],
['الفديو 🎥', `${usedPrefix}ytv ${url}`],
['غيره 💫', `${usedPrefix}playlist ${text}`]  
], m)
}catch(e){
m.reply('*خطأ ، يرجى المحاولة مرة أخرى*')
console.log(e)
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?|يوتيوب$/i
export default handler
