function indexPrime(param1) {
  var angkaPrima = [];
  // var length = angkaPrima.length
  // console.log(length)
  var angka = 2;
  var index = 1;

  while (index < param1) {
    var prime = true;
    for (i = 2; i < angka; i++) {
      if (angka % i === 0) {
        prime = false;
      }
    }

    if (prime) {
      angkaPrima.push(angka);
    }
    angka++;
    index++;
  }
  console.log(angkaPrima);
  return angkaPrima.length;
}
console.log(indexPrime(10));
console.log(indexPrime(1000));
