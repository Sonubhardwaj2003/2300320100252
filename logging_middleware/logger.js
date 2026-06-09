const BASE_URL = "http://4.224.186.213/evaluation-service/logs";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzb251LjIzYjAxMDExNDFAYWJlcy5hYy5pbiIsImV4cCI6MTc4MDk5MDU0OSwiaWF0IjoxNzgwOTg5NjQ5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiM2JkMThjMDItYzg4NS00ZmU4LWFkMDAtMTVmYzgwZDQ3YTE2IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic29udSAgIiwic3ViIjoiODhmZGE4MjMtNTVjYi00YzA4LWE0MzItMGViYjEzNjVmZmMxIn0sImVtYWlsIjoic29udS4yM2IwMTAxMTQxQGFiZXMuYWMuaW4iLCJuYW1lIjoic29udSAgIiwicm9sbE5vIjoiMjMwMDMyMDEwMDI1MiIsImFjY2Vzc0NvZGUiOiJjWHVxaHQiLCJjbGllbnRJRCI6Ijg4ZmRhODIzLTU1Y2ItNGMwOC1hNDMyLTBlYmIxMzY1ZmZjMSIsImNsaWVudFNlY3JldCI6Ik54QmhOS1RHR3hOR3RLYVMifQ.DMPmCg4MEJmc2FIhtgQRIq5nT22OWGz4erFy3oyozmM";

export async function Log(stack, level, packageName, message) {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + TOKEN,
      },
      body: JSON.stringify({
        stack,
        level,
        package: packageName,
        message,
      }),
    });

    const data = await response.json();
    console.log("Log Created:", data);
  } catch (error) {
    console.error("Logging Failed:", error);
  }
}
