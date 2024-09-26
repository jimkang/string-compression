var pako = require('pako');
var { fromUint8Array, toUint8Array } = require('js-base64');

function compress(input) {
  // Encode from string to byte array.
  const data = new TextEncoder().encode(input);
  // console.log('Encoded uncompressed', data);
  // Compress array.
  const compressedArray = pako.deflate(data, {
    level: 9,
  });
  // console.log('Compressed array', compressedArray);
  // // Encode compressed array as string.
  return fromUint8Array(compressedArray, true);
}

function decompress(input) {
  // Convert from string to compressed byte array.
  const compressedStringConvertedToArray = toUint8Array(input);
  // Decompress byte array.
  const decompressed = pako.inflate(compressedStringConvertedToArray);
  // Decode array to string.
  return new TextDecoder().decode(decompressed);
}

module.exports = { compress, decompress };
