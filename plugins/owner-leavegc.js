let handler = async (m, { conn, args, command }) => {
await m.reply('*سلام يا زنوج ما تستاهلو اجلس معاكم👾 (T＿T) *') 
await  conn.groupLeave(m.chat)}
handler.command = /^(out|leavegc|اخرج|برا)$/i
handler.group = true
handler.rowner = true
export default handler
