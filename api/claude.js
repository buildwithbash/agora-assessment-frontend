module.exports = async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://assessment.agoraconsulting.us');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  // Simple test first
  res.json({ 
    message: 'Claude proxy is working!', 
    timestamp: new Date().toISOString(),
    hasApiKey: !!process.env.ANTHROPIC_API_KEY
  });
};
