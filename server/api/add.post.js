import { getQuery, readBody } from "h3";
import { set } from "../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    console.log('EVENT', event)
      const query = getQuery(event);
      console.log('QUERY', query)
      const body = await readBody(event);
    const docRef = await set('pages', body);
    return { result: docRef };
  } catch (error) {
    return { error: error.message }
  } 
});