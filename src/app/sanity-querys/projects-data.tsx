import {client} from "@/lib/sanity";


async function getData(): Promise<ProjectDataInterface[]> {
    const query = `*[_type == 'projects']{
    projectTitle,
    slug,
    ProjectDescription,
    tags,
    github,
    live,
    featured,
    projectImage
}`;

    return await client.fetch(query);
}


export default async function ProjectsData() {
    try {
        return await getData();
    } catch (error) {
        console.error("Error fetching guide data:", error);
        return [];
    }
}