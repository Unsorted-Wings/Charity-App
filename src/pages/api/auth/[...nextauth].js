import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  // Configure one or more authentication providers
    session : {
        strategy : 'jwt'
    },
    provder : [CredentialsProvider({
        type : 'credentials',
        credentials : {},
        authorize(credentials, req){
            const {email, password } = credentials
        
        if (email != 'lovingworld@gmail.com' || password != '1234' ){
            return (null)
        }
        
        }
    })]
}

export default NextAuth(authOptions)