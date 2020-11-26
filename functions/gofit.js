const telegraf = require("telegraf");
const fetch = require("node-fetch");

const API_URL = process.env.API_URL;
const bot = new telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.hears(/\/workout (.+)/, async (ctx) => {
  const [
    command,
    intensity,
    muscleGroup,
    disciplines,
    duration,
  ] = ctx.message.text.split(" ");
  const res = await (
    await fetch(
      API_URL +
        `/api/workout?intensity=${intensity}&muscle_group=${muscleGroup}&disciplines=${disciplines}&duration=${duration}`
    )
  ).json();
  bot.telegram.sendMessage(ctx.chat.id, res);
});

exports.handler = async (event, ctx, callback) => {
  await bot.handleUpdate(JSON.parse(event.body));
  return callback(null, { statusCode: 200 });
};
