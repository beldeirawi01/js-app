function searchForProduct() {
    if (str.trim().length === 0) console.log('Product name is not provided')
    console.log(`${str} is searched!`);
}


searchForProduct('Book');
searchForProduct('');
searchForProduct('   ');