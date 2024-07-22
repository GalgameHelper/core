export default {
  type: ['Bow', 'Catalyst', 'Claymore', 'Polearm', 'Sword'],
  langs: ['zh_CN', 'en_US'],
  path(type, lang){
    return `../../../database/weapon/${type}/${lang}.html`
  },
  imgOutput(name){
    return `../../../database/img/weapon/${name}.webp`
  },
  output: '../../../database/weapon/weapon.json',
  getImgUrl: 'https://gensh.honeyhunterworld.com'
}
