"use strict";

// 변수
const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginForm = document.querySelector("#loginForm");

// 함수
const onClickLoginBtn = (e) => {
  e.preventDefault();
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
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.message);
      }
    })
    .catch((err) => {
      console.error("로그인 중 에러 발생");
    });
};

// 이벤트
loginForm.addEventListener("submit", onClickLoginBtn);
