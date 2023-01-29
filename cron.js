const cron = require("node-cron");
const snkrBot = require("./bot");

// Scheduled to run at 9:00 AM when Nike Europe usually drops a shoe.
cron.schedule("0 9 * * *", () => {
	snkrBot();
});
