import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          require: true,
          placeholder: "Your email",
        },
        password: {
          label: "Password",
          type: "password",
          require: true,
          placeholder: "Your password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!credentials) {
          return null;
        }
        if (email) {
          const currentUser = users.find((user) => user.email === email);
          if (currentUser) {
            if (currentUser.password === password) {
              return currentUser;
            }
          }
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.type = user.type;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.type = token.type;
      return session;
    },
  },
};
const handler = NextAuth(authOptions);

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    type: "admin",
    password: "password",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
    type: "moderator",
    password: "password",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "Masud",
    email: "masud@gmail.com",
    type: "user",
    password: "password",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    name: "Rana",
    email: "rana@gmail.com",
    type: "user",
    password: "password",
    image: "https://picsum.photos/200/300",
  },
];

export { handler as GET, handler as POST };
