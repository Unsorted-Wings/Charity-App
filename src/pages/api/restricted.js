import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
import { useRouter } from 'next/router'

export default async (req, res) => {
  const session = await getServerSession(req, res, authOptions)
  const router = useRouter()

  if (session) {
    res.send({
      content:
        "This is protected content. You can access this content because you are signed in.",
    })
  } else {
    res.send({
      error: "You must be signed in to view the protected content on this page.",
    });
    route.push('../pages/Login1')

  }
}