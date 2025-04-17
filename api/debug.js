
export default function handler(req, res) {
  res.status(200).json({
    keyLoaded: !!process.env.OPENAI_API_KEY,
    keyPreview: process.env.OPENAI_API_KEY?.slice(0, 12) || null
  });
}
