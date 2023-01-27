interface SanityBody {
    _createdAt: string,
    _id:string,
    _rev:string,
    _updatedAt: string,
}
interface Image {
 type:"image";
 asset: {
    ref:string,
    type:"reference"
 }
}

export interface Social extends SanityBody {
    type: string,
    title: string,
    url: string,
}

export interface PageInfo extends SanityBody {
    type: 'pageInfo',
    address: string,
    backgroundInformation:string,
    email: string,
    role: string,
    heroImage: Image,
    name: string,
    phoneNumber: string,
    profilePic: string,
}


export interface Technology extends SanityBody {
  type: "skill",
  image: Image,
  progress: number,
  title: string,
}


export interface Skill extends SanityBody {
    type: "technology",
    image: Image,
    progress: number,
    title: string,
}

export interface Experience extends SanityBody {
    type: "experience",
    company: string,
    companyImage: Image,
    dateStarted: Date,
    dateEnded: Date,
    isCurrentWorkingHere: boolean,
    jobTitle: string,
    points: string[],
    technologies: Technology[]
}

export interface Project extends SanityBody {
    title: string,
    type: "project",
    image: Image,
    linkToBuild: string,
    summary: string,
    technologies: Technology[]
}