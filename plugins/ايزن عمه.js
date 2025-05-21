const dir = [
'https://s19.aconvert.com/convert/p3r68-cdx67/om5rv-1y5cm.mp3',

];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['بانكاي'] 

export default handler