import { client } from './index.js';

export async function Posterdelete(id) {
    return await client.db("socialmedia")
        .collection("poster").deleteOne({ id: id });
}
export async function Posterget(id) {
    return await client.db("socialmedia")
        .collection("poster").find({ id: id }).toArray();
}
export async function Posterpost(data) {
    return await client.db("socialmedia")
        .collection("poster").insertMany(data);
}
export async function Posterput(id, updateData) {
    return await client.db("socialmedia")
        .collection("poster").updateOne({ id: id }, { $set: updateData });
}
