import { client } from './client';

export async function getBears(){
  const response = await client
    .from ('bears')
    .select('*');
  return response.body;
}

