import dotenv from "dotenv";

dotenv.config();

export async function verifyCredentials(credentials) {
  const storedUsername = process.env.NEXTAUTH_USERNAME;
  const storedPassword = process.env.NEXTAUTH_PASSWORD;

  // Compare the stored credentials with the provided credentials
  return (
    credentials.username === storedUsername &&
    credentials.password === storedPassword
  );
}
