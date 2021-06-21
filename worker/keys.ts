interface IKeys {
	redisHost: string;
	redisPort: number;
}

const keys: IKeys = {
	redisHost: process.env.REDIS_HOST || "",
	redisPort: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT) : 0,
};

export default keys;
