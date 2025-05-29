import axios from 'axios';

const handler = async (m, { conn, text }) => {
  if (!text) {
    throw `قم بكتابة سؤالك\n\nمثال: .شادو كيف حالك؟`;
  }

  try {
    const response = await axios.get(`https://api.simsimi.net/v2/?text=${encodeURIComponent(text)}`);
    const data = response.data;

    if (data.success == 1) {
      const answer = data.message;
      conn.reply(m.chat, answer, m);
    } else {
      throw "حدث خطأ أثناء معالجة الطلب.";
    }
  } catch (error) {
    throw "حدث خطأ أثناء معالجة الطلب.";
  }
};

handler.command = /^(شادو)$/i;
handler.tags = ['ai'];

export default handler;
