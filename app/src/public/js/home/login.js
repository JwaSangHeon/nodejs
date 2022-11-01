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
  console.log(req);
};

// 이벤트
loginBtn.addEventListener("click", onClickLoginBtn);
