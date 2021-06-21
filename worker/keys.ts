type IKeys = {
	redisHost: string;
	redisPort: string;
};

const keys: IKeys = {
	redisHost: process.env.REDIS_HOST,
	redisPort: process.env.REDIS_PORT,
};

export default keys;
