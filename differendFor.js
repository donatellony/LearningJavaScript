let codes = {
    "+7": "Россия",
    "+38": "Украина",
    "+1": "США",
    mycodes:{
        bg: 'Black',
        fg: 'Red'
    },
    makeTest: function(){
        console.log("test");
    }
  };

  const {bg, fg} = codes.mycodes; // деструктуризация
  console.log(bg);
  
  codes.makeTest();
  
  for (let code in codes) { //также можно сделать (for of, но оно не работает с объектами)
    let value = codes[code];
    code = +code; // ..если нам нужно именно число, преобразуем: "+7" -> 7
  
    alert( code + ": " + value ); // 7, 38, 1 во всех браузерах
  }
  //FOREACH


  // Урок 1.20
