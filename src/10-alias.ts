(() => {
  type UserID = string | number | boolean;

  let userID: UserID;


  //Literal types:
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';

  function gretting(myText: UserID, size: Sizes) {
    //TS recognoize the data type in each case of if
    if (typeof myText === 'string') {
      myText.split('');
    }
  }

})();
