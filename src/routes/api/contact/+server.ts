import type { RequestHandler } from "./$types";

export const POST:RequestHandler = async ({request})=>{
const {email,name,message}  = await request.json();

}