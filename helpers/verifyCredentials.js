import dotenv from "dotenv";

dotenv.config();

export async function verifyCredentials(credentials) {
  const storedEmail = process.env.NEXTAUTH_EMAIL;
  const storedPassword = process.env.NEXTAUTH_PASSWORD;
  const storedAccount = process.env.NEXTAUTH_ACCOUNT;

  // Compare the stored credentials with the provided credentials
  return (
    credentials.email === storedEmail &&
    credentials.password === storedPassword &&
    credentials.account === storedAccount
  );
}
