let = ask = prompt("Введіть пароль");
while (ask === "logos") {
  alert("Запрошуємо на сайт!");
}
while (ask != "logos") {
  let = ask = prompt("У вас залишилось 4 спроби");
  while (ask === "logos") {
    alert("Запрошуємо на сайт!");
  }
  while (ask != "logos") {
    let = ask = prompt("У вас залишилось 3 спроби");
    while (ask === "logos") {
      alert("Запрошуємо на сайт!");
    }
    while (ask != "logos") {
      let = ask = prompt("У вас залишилось 2 спроби");
      while (ask === "logos") {
        alert("Запрошуємо на сайт!");
      }
      while (ask != "logos") {
        let = ask = prompt("У вас залишилась 1 спроба");
        while (ask === "logos") {
          alert("Запрошуємо на сайт!");
        }
        while (ask != "logos") {
          alert("Будь ласка спробуйте пізніше!");
        }
      }
    }
  }
}
