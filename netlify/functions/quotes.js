// Proxy server-side a Finnhub: la API key nunca se expone al navegador.
// Requiere la variable de entorno FINNHUB_API_KEY configurada en Netlify
// (Site configuration > Environment variables), nunca commiteada al repo.
exports.handler = async (event) => {
  const apiKey = process.env.FINNHUB_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "FINNHUB_API_KEY no está configurada en Netlify." }),
    };
  }

  const symbolsParam = event.queryStringParameters && event.queryStringParameters.symbols;
  if (!symbolsParam) {
    return { statusCode: 400, body: JSON.stringify({ error: "Falta el parámetro 'symbols'." }) };
  }

  const symbols = symbolsParam
    .split(",")
    .map((s) => s.trim().toUpperCase())
    .filter(Boolean);

  const results = {};
  await Promise.all(
    symbols.map(async (symbol) => {
      try {
        const resp = await fetch(
          `https://finnhub.io/api/v1/quote?symbol=${encodeURIComponent(symbol)}&token=${apiKey}`
        );
        const data = await resp.json();
        results[symbol] = { c: data.c, pc: data.pc };
      } catch (err) {
        results[symbol] = { error: true };
      }
    })
  );

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=25",
    },
    body: JSON.stringify(results),
  };
};
