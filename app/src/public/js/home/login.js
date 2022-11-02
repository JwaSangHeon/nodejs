"use strict";

// 변수
const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#loginBtn");

// 함수
const onClickLoginBtn = () => {
  const req = {
    id: id.value,
    password: password.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then(console.log);
};

// 이벤트
loginBtn.addEventListener("click", onClickLoginBtn);
