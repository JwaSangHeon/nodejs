"use strict";

// 변수
const id = document.querySelector("#id");
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const signupForm = document.querySelector("#signupForm");

// 함수
const onSubmitSignupBtn = (e) => {
  e.preventDefault();
  const req = {
    id: id.value,
    name: name.value,
    password: password.value,
    confirmPassword: password.value,
  };

  fetch("/signup", {
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
      console.error("회원가입 중 에러 발생");
    });
};

// 이벤트
signupForm.addEventListener("submit", onSubmitSignupBtn);
