const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();
app.set("port", process.env.PORT || 3000);

app.use(morgan("dev")); // 추가적으로 콘솔에 로그를 찍어준다. 인수로, dev, combined, common, shotrt, tiny 등이 들어갈 수 있다. (개발 - dev, 배포 - combined)
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);
app.use((req, res, next) => {
  console.log("모든 요청에 다 실행된다.");
  next();
});

app.get(
  "/",
  (req, res, next) => {
    console.log("GET / 요청에서만 실행된다.");
    next();
  },
  (req, res) => {
    throw new Error("에러는 에러 처리 미들웨어로 간다.");
  }
);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중....");
});
