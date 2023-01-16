import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("circles");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let myGroup = await db.collection("groups").insertOne(bodyObject);
      res.json(myGroup.ops[0]);
      break;
    case "GET":
      const allGroups = await db.collection("groups").find({}).toArray();
      res.json({ status: 200, data: allGroups });
      break;
  }
}