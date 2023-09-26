(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = [];
  myDynamicVar = {};
  myDynamicVar = '';

  myDynamicVar = 'hola';
  // myDynamicVar. => there are not help.
  // can make a casting:
  const rta = (myDynamicVar as string).toLowerCase();

  myDynamicVar = 123;
  const rta2 = (<number>myDynamicVar).toFixed();
})();
