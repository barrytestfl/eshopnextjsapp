import { NextApiRequest, NextApiResponse  } from "next";
import axios from "axios";
export default async function   GetProducts(req: NextApiRequest, res: NextApiResponse<any>){
    //filetrProducts/:id
    //filterAttributes/:id
    //showcart
    //addcart
    //removecart/:id
    //pruchas
    try {
        const response = await axios.get('http://localhost:5000/filetrProducts/1');
       // console.log(response);
        res.status(200).json(response.data);
      } catch (error) {
        console.error(error);
        res.status(200).json({});
      }
}