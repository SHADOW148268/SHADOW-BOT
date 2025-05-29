const dir = [
'https://telegra.ph/file/2d692d315587805dde1a9.jpg',
'https://telegra.ph/file/e51a3c070b031ccefb801.jpg',
'https://telegra.ph/file/a0a8e70592a5b2ccd2987.jpg',
'https://telegra.ph/file/5e1fc88c8803a0fc31523.jpg',
'https://telegra.ph/file/1f54bdd48b568aa05d593.jpg',
'https://telegra.ph/file/62ac12702441491e0c73b.jpg',
'https://telegra.ph/file/fa537428bb58b297e3ed3.jpg',
'https://telegra.ph/file/3155c1dc08fa26970d858.jpg',
'https://telegra.ph/file/e926a13e06728028d860d.jpg',
'https://telegra.ph/file/71e8a40317d9dd6dce50f.jpg',
'https://telegra.ph/file/1c9f11a44ac8ed88e073e.jpg',
'https://telegra.ph/file/271155de61db260ef09ba.jpg',
'https://telegra.ph/file/d898b26a10495e8c6792b.jpg',
'https://telegra.ph/file/f6b71e125dd4971253c39.jpg',
'https://telegra.ph/file/73e9f8a1692c470e63d04.jpg',
'https://telegra.ph/file/6c72d75cbb596fd757aba.jpg',
'https://telegra.ph/file/ede1c654d4c218c0b263b.jpg',
'https://telegra.ph/file/078671b7aee6dd8c4ae09.jpg',
'https://telegra.ph/file/04f6a1c2c271e3d0d9b08.jpg',
'https://telegra.ph/file/e1f3bc35cb2b201ec12e4.jpg',
'https://telegra.ph/file/0d6fb4189e171d90505f8.jpg',
'https://telegra.ph/file/efa364c3e60769ba75743.jpg',
'https://telegra.ph/file/65bf5dbc42b5c43fc5d2f.jpg',
'https://telegra.ph/file/03fd2e33eef17aa189e5a.jpg',
'https://telegra.ph/file/03fd2e33eef17aa189e5a.jpg',
'https://telegra.ph/file/855054f8f233540b8bdc7.jpg',
'https://telegra.ph/file/3163840ef4963ae700398.jpg','https://telegra.ph/file/8388fbc55128e6c9ce015.jpg','https://telegra.ph/file/ec8270754018384897f11.jpg','https://telegra.ph/file/4b6ec278921c2582fb1c3.jpg','https://telegra.ph/file/56bf82597eccd98227b4b.jpg','https://telegra.ph/file/bad83dc70d5075830577f.jpg','https://telegra.ph/file/3f01a3730053cd146d3b9.jpg','https://telegra.ph/file/6b55a1fd7b7409923622b.jpg', 
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['ميمز', 'dados'] 

export default handler