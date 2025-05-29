import axios from 'axios';

const handler = async (m, { conn }) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || q.mediaType || '';
  if (!/image/g.test(mime)) throw 'من فضلك، قم بإرسال صورة لأقوم بتحويلها إلى صورة أنمي.';

  m.reply('جاري تحويل الصورة إلى صورة أنمي...');

  try {
    const data = await q.download();
    const response = await axios.post('https://api.deepai.org/api/toonify', {
      image: data.toString('base64')
    }, {
      headers: {
        'Api-Key': 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K'
      }
    });

    const result = response.data;
    if (!result || !result.output_url) throw 'حدث خطأ أثناء تحويل الصورة.';

    await conn.sendFile(m.chat, result.output_url, 'anime.jpg', 'تمت عملية التحويل بنجاح!', m);
  } catch (error) {
    throw 'حدث خطأ أثناء تحويل الصورة. يرجى المحاولة مرة أخرى.';
  }
};

handler.help = ['لانمي'];
handler.tags = ['تعليمية'];
handler.command = /^(لانمي)$/i;

export default handler;
