export type UserRole = "admin" | "user"

type HardcodedUser = {
  username: string
  password: string
  role: UserRole
  displayName: string
}

export type SessionPayload = {
  username: string
  role: UserRole
  displayName: string
}

export const SESSION_COOKIE = "tripon_session"

const HARDCODED_USERS: HardcodedUser[] = [
  {
    username: "admin@tripon.com",
    password: "Admin123*",
    role: "admin",
    displayName: "Admin Tripon",
  },
  {
    username: "user@tripon.com",
    password: "User123*",
    role: "user",
    displayName: "Usuario Tripon",
  },
]

export function validateCredentials(username: string, password: string) {
  const user = HARDCODED_USERS.find((u) => u.username === username && u.password === password)
  if (!user) return null

  const session: SessionPayload = {
    username: user.username,
    role: user.role,
    displayName: user.displayName,
  }

  return session
}

export function encodeSession(session: SessionPayload) {
  return encodeURIComponent(JSON.stringify(session))
}

export function decodeSession(value: string | undefined | null) {
  if (!value) return null

  try {
    const parsed = JSON.parse(decodeURIComponent(value)) as unknown
    if (!parsed || typeof parsed !== "object") return null

    const raw = parsed as Partial<SessionPayload>
    if (raw.role !== "admin" && raw.role !== "user") return null
    if (typeof raw.username !== "string" || typeof raw.displayName !== "string") return null

    const session: SessionPayload = {
      role: raw.role,
      username: raw.username,
      displayName: raw.displayName,
    }

    return session
  } catch {
    return null
  }
}
