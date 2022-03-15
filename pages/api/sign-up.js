export default async function handler(req, res) {
  res.status(423).json({ error: "no-places" });
  return;
}
