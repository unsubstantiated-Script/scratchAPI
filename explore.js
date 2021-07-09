const Twilio = require("twilio");

const client = new Twilio(
	"ACdc80a664ee6b162edd77e47da05420d4",
	"2f71f3d89daf22bdd625468b8ccf396d",
);

client.messages
	.list()
	.then((messages) =>
		console.log(`The most recent message is ${messages[0].body}`),
	)
	.catch((err) => console.error(err));

(async () => {
	try {
		let response = await client.messages.list();
		console.log(response[0].body);
	} catch (error) {
		console.log(error.message);
	}
})();

console.log("gathering the message");
