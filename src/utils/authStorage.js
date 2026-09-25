const USERS_STORAGE_KEY = 'bookmark-manager-users'
const SESSION_STORAGE_KEY = 'bookmark-manager-session'

export const DEMO_ACCOUNT = {
  id: 'demo-user',
  name: 'Demo User',
  email: 'demo@bookmark.app',
  password: 'Demo123!',
}

function normalizeEmail(email) {
  return email.trim().toLowerCase()
}

function readUsers() {
  try {
    const savedUsers = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) ?? '[]')
    const users = Array.isArray(savedUsers) ? savedUsers : []
    if (!users.some((user) => user.email === DEMO_ACCOUNT.email)) {
      users.push(DEMO_ACCOUNT)
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users))
    }
    return users
  } catch {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify([DEMO_ACCOUNT]))
    return [DEMO_ACCOUNT]
  }
}

function saveSession(user) {
  const session = { id: user.id, name: user.name, email: user.email }
  localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session))
  return session
}

export function getSession() {
  try {
    const session = JSON.parse(localStorage.getItem(SESSION_STORAGE_KEY))
    return session?.email ? session : null
  } catch {
    return null
  }
}

export function signUp({ name, email, password }) {
  const users = readUsers()
  const normalizedEmail = normalizeEmail(email)
  if (users.some((user) => user.email === normalizedEmail)) {
    throw new Error('An account with this email already exists.')
  }
  const user = {
    id: globalThis.crypto?.randomUUID?.() ?? String(Date.now()),
    name: name.trim(), email: normalizedEmail, password,
  }
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify([...users, user]))
  return saveSession(user)
}

export function signIn({ email, password }) {
  const normalizedEmail = normalizeEmail(email)
  const user = readUsers().find((candidate) => (
    candidate.email === normalizedEmail && candidate.password === password
  ))
  if (!user) throw new Error('Email or password is incorrect.')
  return saveSession(user)
}

export function resetPassword({ email, password }) {
  const normalizedEmail = normalizeEmail(email)
  const users = readUsers()
  const userIndex = users.findIndex((user) => user.email === normalizedEmail)
  if (userIndex === -1) throw new Error('No account was found with this email.')
  users[userIndex] = { ...users[userIndex], password }
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users))
}

export function signOut() {
  localStorage.removeItem(SESSION_STORAGE_KEY)
}
