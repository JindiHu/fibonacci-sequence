type IKeys = {
	redisHost: string;
	redisPort: string;
	pgHost: string;
	pgPort: string;
	pgUser: string;
	pgDatabase: string;
	pgPassword: string;
};

const keys: IKeys = {
	redisHost: process.env.REDIS_HOST,
	redisPort: process.env.REDIS_PORT,
	pgHost: process.env.PG_HOST,
	pgPort: process.env.PG_PORT,
	pgUser: process.env.PG_USER,
	pgDatabase: process.env.PG_DATABASE,
	pgPassword: process.env.PG_PORT,
};

export default keys;
