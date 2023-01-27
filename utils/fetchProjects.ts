import { Project } from "../typing";

export const fetchProjects = async()=>{
  const header =  {
    method: "GET",
    headers: {
      // update with your user-agent
      "User-Agent":
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
      Accept: "application/json; charset=UTF-8",
    },
  }
  const res =  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`, header)   
  const data = await res.json()
  const projects: Project[]= data.projects  
  return projects
}