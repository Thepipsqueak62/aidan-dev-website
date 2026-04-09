import { createClient } from"next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url"; // ✅

export const client = createClient({
    apiVersion: '2023-05-03',
    dataset: 'production',
    projectId: 'f2l0aru3',
    useCdn: false,
});


const builder = createImageUrlBuilder(client);

export function urlFor(source:any){
    return builder.image(source);
}
