import {MongoClient} from 'mongodb';
// /api/new-meetup
// POST /api/new-metup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log(req);
    console.log(res);
   


    // const {title, image, address, description} = data;


    const client = await MongoClient.connect(
       'mongodb+srv://Seann85:Olabilir8@cluster0.n5kck.mongodb.net/?retryWrites=true&w=majority');
       const db = client.db();

       const meetupsCollection = db.collection('meetups');

       const result = await meetupsCollection.insertOne(data);

        console.log(result);
        

        client.close();

        res.status(201).json({message:'Meetup inserted!'});


  }
}

export default handler;
