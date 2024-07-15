import MensKurta from "../model/fashion.model.js";
import mongoose from "mongoose";
export const getfashion= async(req,res)=> {
    try {
        const menskurta= await MensKurta.find();
        res.status(200).json(menskurta);
        
    } catch (error) {
        console.log("Error:",error);
        res.status(500).json(error);
        
    }
}

// export const getProductById = async (req, res) => {
//     const { id } = req.params;
//     try {
//         console.log("Received ID:", id);
//         const product = await MensKurta.findById(id);
//         if (!product) {
//             return res.status(404).json({ message: "Product not found" });
//         }
//         res.status(200).json(product);
//     } catch (error) {
//         console.log("Error:", error);
//         res.status(500).json(error);
//     }
// }
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    const product = await MensKurta.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};