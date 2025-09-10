export default function handler(req, res) {
  const fast_key = process.env.BOT_TOKEN;

  if (!fast_key) {
    return res.status(500).json({ error: 'Bot token not set' });
  }

  res.status(200).json({ fast_key });
}
