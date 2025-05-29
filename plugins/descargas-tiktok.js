import TikTokScraper from 'tiktok-scraper';
import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import os from 'os';
import fetch from 'node-fetch';

const streamPipeline = promisify(pipeline);

var handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `مثال: \n ${usedPrefix}${command} #tag أو @username`;

  let videos;
  try {
    const searchResults = await TikTokScraper.user(text, { number: 1 });
    videos = searchResults.collector;
  } catch (err) {
    throw 'لم يتم العثور على الفيديو، جرب عنوان آخر أو تحقق من صحة الوسم/المستخدم';
  }

  if (!videos.length) throw 'لم يتم العثور على الفيديو، جرب عنوان آخر أو تحقق من صحة الوسم/المستخدم';
  
  let vid = videos[0];
  let { text: title, videoUrl, covers, authorMeta } = vid;
  let wm = '𝑺𝐻𝐴𝐷𝛩𝑊 𝐵𝛩𝑇'; // ضع اسم بوتك هنا

  let captvid = `💝 جاري التحميل ♥`;

  conn.sendMessage(m.chat, { image: { url: covers.default }, caption: captvid, footer: wm }, { quoted: m });

  const response = await fetch(videoUrl);
  if (!response.ok) throw new Error(`Failed to download video: ${response.statusText}`);

  const tmpDir = os.tmpdir();
  const filePath = `${tmpDir}/${title}.mp4`;

  const writableStream = fs.createWriteStream(filePath);

  try {
    await streamPipeline(response.body, writableStream);

    let doc = {
      video: { url: filePath },
      mimetype: 'video/mp4',
      fileName: `${title}.mp4`,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          mediaType: 2,
          mediaUrl: videoUrl,
          title: title,
          body: wm,
          sourceUrl: videoUrl,
          thumbnail: await (await conn.getFile(covers.default)).data
        }
      }
    };

    await conn.sendMessage(m.chat, doc, { quoted: m });

  } catch (err) {
    console.error('Failed to download and send video:', err);
    throw 'حدث خطأ أثناء تحميل الفيديو';
  } finally {
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(`Failed to delete video file: ${err}`);
      } else {
        console.log(`Deleted video file: ${filePath}`);
      }
    });
  }
};

handler.help = ['tiktok'].map((v) => v + ' <query>');
handler.tags = ['downloader'];
handler.command = ['tiktok', 'tiktokvideo', 'ttdl'];

handler.exp = 0;
handler.diamond = false;

export default handler;
