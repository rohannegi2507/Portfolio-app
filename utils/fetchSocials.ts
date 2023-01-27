import { Social } from "../typing";

export const fetchSocials = async()=>{
    debugger
  const res =  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)   
  console.log(res)
  const data = await res.json()
  const socials: Social[]= data.socials  
  return socials
}