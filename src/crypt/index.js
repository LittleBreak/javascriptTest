var CryptoJS = require("crypto-js");
function encryptByDES(message, key) {

  var keyHex = CryptoJS.enc.Utf8.parse(key);

  var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
  });
 
  return encrypted.toString();
}

function decryptByDES(ciphertext, key) {
  var keyHex = CryptoJS.enc.Utf8.parse(key);
  // direct decrypt ciphertext
  var decrypted = CryptoJS.DES.decrypt({
      ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
  }, keyHex, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}

for (var index = 0; index < 10; index++) {
  var message = 'Message';
  var key = 'abcd1234';
  var ciphertext = encryptByDES(message, key);
  // ciphertext: 8dKft9vkZ4I=
  console.info('ciphertext:', ciphertext);
  var plaintext = decryptByDES(ciphertext, key);
  // plaintext : Message
  console.info('plaintext :', plaintext);
}