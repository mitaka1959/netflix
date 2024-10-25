import useCurrentUser from "@/hoocks/useCurrentUser";
import { NextPageContext } from "next"
import { getSession } from "next-auth/react"
import Navbar from "@/components/navbar";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if(!session){
    return {
      redirect: {
        destination: '/auth',
        parmanent: false,
      }
    }
  }
  return {
    props: {}
  }
}

export default function Home() {
  const { data: user } = useCurrentUser();
  return (
    <>
      <Navbar/>
    </>
  )
}