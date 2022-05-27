import { client } from './index.js';

export async function Userput(id, updateData) {
    return await client.db("socialmedia")
        .collection("user").updateOne({ id: id }, { $set: updateData });
}
export async function Userdelete(id) {
    return await client.db("socialmedia")
        .collection("user").deleteOne({ id: id });
}
export function Userget(id) {
    return client.db("socialmedia")
        .collection("user").find({ id: id }).toArray();
}
export async function Userpost(data) {
    return await client.db("socialmedia")
        .collection("user").insertMany(data);
}
