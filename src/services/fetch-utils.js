import { client } from '../client';

export async function getBears(){
  const response = await client
    .from ('bears')
    .select('*');
  return response.body;
}

export async function getCandies(){
  const response = await client
    .from('candies')
    .select('*');
  return response.body;
}
