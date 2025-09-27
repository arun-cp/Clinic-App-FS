import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Replace with DB lookup or API call
        if (credentials.username === "admin" && credentials.password === "1234") {
          return { id: "9457", name: "asterci", email: "admin@example.com" };
        }
        else if (credentials.username === "admin1" && credentials.password === "9876") {
          return { id: "9745", name: "apollohp", email: "admin1@example.com" };
        }
        return null;
      }
    })
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
export const authOptions = handler.authOptions;
