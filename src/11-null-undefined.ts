(() => {
  let myNumber: number;
  let myString: string;

  let myNull = null; //any
  let myUndefined = undefined; //any

  let myRNull: null;
  let myRUndefined: undefined;

  // specific cases for developer:
  let myNum: number | null = null;
  myNum = 123;

  let myText: string | undefined = undefined;
  myText = 'hello';

  // function hi(name: string | null) {
  //   let hello = 'Hola ';
  //   if (name) hello += name;
  //   else hello += 'nobody';
  //   console.log(hello);
  // }

  function hi(name: string | null) {
    let hello = 'Hola ';
    hello += name?.toLocaleLowerCase() || 'nobody';
    console.log(hello);
  }
})();
