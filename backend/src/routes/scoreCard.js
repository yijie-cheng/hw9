import { Router } from "express";
import ScoreCard from "../models/ScoreCard";
const router = Router();
router.delete("/cards", (req, res) => {
    deleteCard(res);
    // res.send({message:'Database cleared'});
});

router.post("/card", async (req, res) => {
    const message = await saveCard(req.body.name, req.body.subject, req.body.score)
    const card = true;
    // console.log("ppppp", message);
    res.send({message, card})
    // res.send({req.body.name, req.body.subject, req.body.score});
});

router.get("/cards", (req, res) => {
    findCard(req.query.type, req.query.queryString, res)
});

export default router;

const saveCard = async (name, subject, score) => {
    const existing = await ScoreCard.findOne({name, subject});
    if (existing) {
        try {
            // ScoreCard.deleteOne({'name':name, 'subject':subject});
            await ScoreCard.deleteOne({name, subject});
            const newCard = new ScoreCard({ name, subject, score });
            newCard.save();
            console.log("Updated card", newCard);
            // return "j"
            return "Updating (" + name + ", " + subject + ", " + score +")";
        } catch (e) { throw new Error("Card creation error: " + e); }
    }
    else {
        try {
            const newCard = new ScoreCard({ name, subject, score });
            newCard.save();
            console.log("Created card", newCard);
            // return "l"
            return "Adding (" + name + ", " + subject + ", " + score +")";
        } catch (e) { throw new Error("Card creation error: " + e); }
    }
};

const findCard = async (type, queryString, res) => {
    let mess = new Array(); //String("");
    let mes = new String("");
    if (type==='name') {
        const existing = await ScoreCard.find({'name':queryString});
        if (existing[0]) {
            //let mess = new String("");
            for (let i = 0; i < existing.length; i++) {
                // if (i!==0) mess += "\n";
                mess.push("Found card with name: (" + existing[i].name + ", " + existing[i].subject + ", " + existing[i].score + ")");
            }
            console.log(mess);
        }
        else {
            //let mes = new String("");
            mes += "Name (" + queryString + ") not found!";
            // mess.push("Name (" + queryString + ") not found!")
            console.log(mes);
        }
    }
    else {
        const existing = await ScoreCard.find({'subject':queryString});
        if (existing[0]) {
            //let mess = new String("");
            for (let i = 0; i < existing.length; i++) {
                // if (i!==0) mess += "\n";
                mess.push("Found card with subject: (" + existing[i].name + ", " + existing[i].subject + ", " + existing[i].score + ")");
            }
            console.log(mess);
        }
        else {
            //let mes = new String("");
            mes += "Subject (" + queryString + ") not found!";
            // mess.push("Subject (" + queryString + ") not found!")
            console.log(mes);
        }
    }
    if (mess.length == 0) mess = null;
    res.send({messages:mess, message:mes});
};

const deleteCard = async (res) => {
    try {
      await ScoreCard.deleteMany({});
      console.log("ScoreCard deleted");
      res.send({message:'Database cleared'});
    } catch (e) { throw new Error("ScoreCard deletion failed"); }
};