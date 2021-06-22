import keys from "./keys";
import redis from "redis";

const publisher: any = redis.createClient({
	host: keys.redisHost,
	port: keys.redisPort,
	retry_strategy: () => 1000,
});

const subscriber: any = publisher.duplicate();

const fib = (index: number): number => {
	if (index < 2) return 1;
	return fib(index - 1) + fib(index - 2);
};

subscriber.on("message", (channel: any, message: any) => {
	publisher.hset("values", message, fib(parseInt(message)));
});

subscriber.subscribe("insert");
