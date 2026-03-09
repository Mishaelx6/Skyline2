import bcrypt from "bcrypt";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  passwordHash: string;
}

// naive in-memory store; replace with real database later
const users: Record<string, User> = {};

export async function createUser(name: string, email: string, password: string, role: string) {
  const id = crypto.randomUUID();
  const passwordHash = await bcrypt.hash(password, 10);
  const user: User = { id, name, email, role, passwordHash };
  users[email.toLowerCase()] = user;
  return user;
}

export async function findUserByEmail(email: string) {
  return users[email.toLowerCase()];
}

export async function verifyPassword(email: string, password: string) {
  const user = await findUserByEmail(email);
  if (!user) return null;
  const match = await bcrypt.compare(password, user.passwordHash);
  return match ? user : null;
}
