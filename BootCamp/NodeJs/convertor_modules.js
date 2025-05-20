function convert(nrs){
    if (typeof nrs !== 'number' || nrs < 0) {
        throw new Error('Invalid NRS amount');
  }
    euro = nrs*0.006522;
    return euro;
}

module.exports= {convert};
