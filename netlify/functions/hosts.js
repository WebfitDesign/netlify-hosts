const handler = async () => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: "danielO".toUpperCase(),
  }
}

module.exports = { handler }
