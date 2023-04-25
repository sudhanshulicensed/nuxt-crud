import { getQuery } from "h3";
import { queryByCollection } from "../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    // console.log('EVENT', event.node.req)
    const query = getQuery(event);
    console.log('QUERY', query)
    const docs = await queryByCollection(query.col);
    console.log('DOCS', docs);
    return { result: docs };
    // return 'Hello World';
  } catch (error) {
    return { result: [], error: error.message };
  } 
}); 