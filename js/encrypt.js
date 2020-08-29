function encrypt_invite(str) {
  let decoded = {
    a: 'n', b: 'o', c: 'p',
    d: 'q', e: 'r', f: 's',
    g: 't', h: 'u', i: 'v',
    j: 'w', k: 'x', l: 'y',
    m: 'z', n: 'a', o: 'b',
    p: 'c', q: 'd', r: 'e',
    s: 'f', t: 'g', u: 'h',
    v: 'i', w: 'j', x: 'k',
    y: 'l', z: 'm', 1: '9',
    2: '8', 3: '7', 4: '6',
    5: '5', 6: '4', 7: '8',
    8: '2', 9: '1',
  }
  str = str.toLowerCase();
  let decipher = '';
  for(let i = 0 ; i < str.length; i++){
    decipher += decoded[str[i]];
  }
  decipher.split('')
  let result = decipher.split('');
  result[1] = result[1].toUpperCase();
  result[5] = result[5].toUpperCase();
  result = result.join('');
  return result;
}
