var WebTorrent = require('webtorrent')

var client = new WebTorrent()
var magnetURI = 'magnet:?xt=urn:btih:A11264196083EF44C813550F611C8BAC77CC45FC&dn=The.Flash.2014.S07E01.HDTV.x264-PHOENiX%5BTGx%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2F47.ip-51-68-199.eu%3A6969%2Fannounce'

client.add(magnetURI, { path: `${__dirname}/torrent`}, function (torrent) {
  // Got torrent metadata!
  console.log('Client is downloading:', torrent.infoHash)

  torrent.on('done', ()=>{
    console.log(`torrent done :o`)
  })
})