export default function handler(req, res) {
  const { uid } = req.query;
  if (!uid) return res.status(400).json({ error: "UID missing" });

  res.status(200).json({
    uid,
    region: "INDIA",
    message: "API working fine 🚀"
  });
}