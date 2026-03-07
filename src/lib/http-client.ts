export async function parseJsonSafe<T>(res: Response): Promise<T | null> {
  const contentType = res.headers.get("content-type") ?? ""
  const bodyText = await res.text()

  if (!bodyText.trim()) return null

  if (!contentType.includes("application/json")) {
    return null
  }

  try {
    return JSON.parse(bodyText) as T
  } catch {
    return null
  }
}
