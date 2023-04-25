import { getQuery, readBody } from "h3";
import { del } from "../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    // const { col } = getQuery(event);
    // const id = 'HXKtHzwtXsRG0W7ztPAp'
    // const col = 'pages'
    const body = await readBody(event);
    console.log('HEHEHEHEH', body)
    await del(body.col, body.id);

    return { result: id }
  } catch (error) {
    return { error: error.message }
  }
});