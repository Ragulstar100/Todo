import dot from "dotenv"


dot.config()

export  const appConfig={
port:process.env.PORT || 3000,
jwt_key:process.env.JWT_SECRET || "JWT_SECRECT_KEY",
mongo_url:process.env.MONGO_URL,
db:process.env.DB
}