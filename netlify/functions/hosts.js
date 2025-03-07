const handler = async () => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: "daniel".toUpperCase(),
  }
}

module.exports = { handler }
