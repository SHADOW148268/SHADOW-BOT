import axios from 'axios';
import cheerio from 'cheerio';

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `الرجاء إدخال كلمة مفتاحية بعد الأمر. مثال: .ميديافاير انستغرام`;

    const keyword = args[0].toLowerCase();
    const import axios from 'axios';
import cheerio from 'cheerio';

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `الرجاء إدخال كلمة مفتاحية بعد الأمر. مثال: .ميديافاير انستغرام`;

    const keyword = args[0].toLowerCase();
    const mediafireLinks = {
        'انستغرام': 'https://www.mediafire.com/file/your_instagram_file_link/file',
        'واتساب': 'https://www.mediafire.com/file/your_whatsapp_file_link/file',
        // أضف المزيد من الروابط والكلمات المفتاحية هنا
    };

    if (!mediafireLinks[keyword]) {
        throw `لم يتم العثور على رابط مرتبط بهذه الكلمة المفتاحية. الرجاء التحقق من الكلمة المفتاحية أو إضافة الرابط المناسب.`;
    }

    try {
        let res = await mediafireDl(mediafireLinks[keyword]);
        let { name, size, date, mime, link } = res;
        let caption = `
> ┃ 𓃠 *${gt} ${vs}* 
> ┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
> ┃ 💫 اسم الملف: ${name}
> ┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
> ┃ 💪 حجم الملف: ${size}
> ┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
> ┃ 🚀 نوع الملف: ${mime}`.trim();
        conn.reply(m.chat, caption, m, {
            contextInfo: {
                externalAdReply: {
                    mediaUrl: null,
                    mediaType: 1,
                    description: null,
                    title: wm,
                    body: 'Super Bot WhatsApp',
                    previewType: 0,
                    thumbnail: gataMenu,
                    sourceUrl: md
                }
            }
        });
        await conn.sendFile(m.chat, link, name, '', m, null, { mimetype: mime, asDocument: true });
    } catch (e) {
        await conn.reply(m.chat, `حدث خطأ أثناء محاولة تحميل الملف. الرجاء إعادة المحاولة لاحقاً أو الإبلاغ عن الخطأ باستخدام الأمر: ${usedPrefix + command}\n\n${wm}`, m);
        console.log(`❗❗ حدث خطأ أثناء محاولة تنفيذ الأمر: ${usedPrefix + command} ❗❗`);
        console.log(e);
        handler.limit = false;
    }
}

handler.help = ['mediafire'].map(v => v + ' <كلمة مفتاحية>');
handler.tags = ['downloader'];
handler.command = /^(mediafire|mediafiredl|dlmediafire|ميديافاير)$/i;
handler.register = false;
handler.limit = true;
handler.credits = 'تم صنع هذا الأمر بواسطة مايكي';
export default handler;

async function mediafireDl(url) {
    const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/', '')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`);
    const $ = cheerio.load(res.data);
    const link = $('#downloadButton').attr('href');
    const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ', '').replaceAll('\n', '');
    const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
    const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ', '');
    let mime = '';
    let rese = await axios.head(link);
    mime = rese.headers['content-type'];
    return { name, size, date, mime, link };
} = {
        'انستغرام': 'https://www.mediafire.com/file/your_instagram_file_link/file',
        'واتساب': 'https://www.mediafire.com/file/your_whatsapp_file_link/file',
        // أضف المزيد من الروابط والكلمات المفتاحية هنا
    };

    if (!mediafireLinks[keyword]) {
        throw `لم يتم العثور على رابط مرتبط بهذه الكلمة المفتاحية. الرجاء التحقق من الكلمة المفتاحية أو إضافة الرابط المناسب.`;
    }

    try {
        let res = await mediafireDl(mediafireLinks[keyword]);
        let { name, size, date, mime, link } = res;
        let caption = `
> ┃ 𓃠 *${gt} ${vs}* 
> ┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
> ┃ 💫 اسم الملف: ${name}
> ┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
> ┃ 💪 حجم الملف: ${size}
> ┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
> ┃ 🚀 نوع الملف: ${mime}`.trim();
        conn.reply(m.chat, caption, m, {
            contextInfo: {
                externalAdReply: {
                    mediaUrl: null,
                    mediaType: 1,
                    description: null,
                    title: wm,
                    body: 'Super Bot WhatsApp',
                    previewType: 0,
                    thumbnail: gataMenu,
                    sourceUrl: md
                }
            }
        });
        await conn.sendFile(m.chat, link, name, '', m, null, { mimetype: mime, asDocument: true });
    } catch (e) {
        await conn.reply(m.chat, `حدث خطأ أثناء محاولة تحميل الملف. الرجاء إعادة المحاولة لاحقاً أو الإبلاغ عن الخطأ باستخدام الأمر: ${usedPrefix + command}\n\n${wm}`, m);
        console.log(`❗❗ حدث خطأ أثناء محاولة تنفيذ الأمر: ${usedPrefix + command} ❗❗`);
        console.log(e);
        handler.limit = false;
    }
}

handler.help = ['mediafire'].map(v => v + ' <كلمة مفتاحية>');
handler.tags = ['downloader'];
handler.command = /^(mediafire|mediafiredl|dlmediafire|ميديا)$/i;
handler.register = true;
handler.limit = true;
handler.credits = 'تم صنع هذا الأمر بواسطة مايكي';
export default handler;

async function mediafireDl(url) {
    const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/', '')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`);
    const $ = cheerio.load(res.data);
    const link = $('#downloadButton').attr('href');
    const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ', '').replaceAll('\n', '');
    const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
    const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ', '');
    let mime = '';
    let rese = await axios.head(link);
    mime = rese.headers['content-type'];
    return { name, size, date, mime, link };
  }
