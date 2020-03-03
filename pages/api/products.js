import Product from "../../models/Product";
import connectDb from "../../utils/connectDb";

connectDb();

export default async (req, res) => {
  const { page } = req.query;
  // Convert querystring values to numbers
  const pageNum = Number(page);
  const pageSize = 9;
  const totalDocs = await Product.countDocuments();
  const totalPages = Math.ceil(totalDocs / pageSize);
  if (pageNum === 1) {
    let products = await Product.find().limit(pageSize);
    res.status(200).json({ products, totalPages });
  } else {
    const skips = pageSize * (pageNum - 1);
    let products = await Product.find()
      .skip(skips)
      .limit(pageSize);
    res.status(200).json({ products, totalPages });
  }
};
