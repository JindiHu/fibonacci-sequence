import keys from "./keys";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Pool } from "pg";
import redis from "redis";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pgClient = new Pool({
	host: keys.pgHost,
	port: keys.pgPort,
	database: keys.pgDatabase,
	user: keys.pgUser,
	password: keys.pgPassword,
});

pgClient.on("error", () => console.log("Lost PG connection"));
pgClient.query("CREATE TABLE IF NOT EXISTS values (number INT)").catch((err: any) => console.log(err));

const redisClient = redis.createClient({
	host: keys.redisHost,
	port: keys.redisPort,
	retry_strategy: () => 1000,
});

const publisher = redisClient.duplicate();

app.get("/", (req: any, res: any) => {
	res.send("Hi");
});

app.get("/values/all", async (req: any, res: any) => {
	const values = await pgClient.query("SELECT * FROM values");
	res.send(values.rows);
});

app.get("/values/current", async (req: any, res: any) => {
	redisClient.hgetall("values", (err: any, values: number) => {
		res.send(values);
	});
});

app.post("/values", async (req: any, res: any) => {
	const index = req.body.index;
	if (parseInt(index) > 40) {
		return res.status(422).send("Index too hight");
	}
	redisClient.hset("values", index, "Nothing yet!");
	publisher.publish("insert", index);
	pgClient.query("INSERT INTO values(number) VALUES ($1)", [index]);
	res.send({ working: true });
});

app.listen(5000, (err) => {
	console.log("Listening");
});
