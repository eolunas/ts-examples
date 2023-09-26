(() => {
  let userId: string | number;
  userId = 'eolunas';
  userId = 1055;

  function gretting(myText: string | number) {
    //TS recognoize the data type in each case of if
    if(typeof myText === 'string'){
      myText.split('');
    }else{
      myText.toFixed(1);
    }
  }

  gretting(1235);
  gretting('eolunas');
})();
