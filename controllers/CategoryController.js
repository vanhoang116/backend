import {CategoryModel} from "../models/CategoryModel.js";
import expressAsyncHandler from "express-async-handler";
import {ProductModel} from "../models/ProductModel.js";
import {OrderModel} from "../models/OrderModel.js";
import {UserModel} from "../models/UserModel.js";

export const getAllCategory = expressAsyncHandler(async (req, res) => {
    const category = await CategoryModel.find({});
    if (category) {
        res.send(category);
    } else {
        res.send({message: 'Không có danh mục'});
    }
})

export const getProductByCategory = expressAsyncHandler(async (req, res) => {
    const product = await ProductModel.find({category_id: req.params.id});
    if (product) {
        res.send(product);
    } else {
        res.send({message: 'Không có sản phẩm'});
    }
})

export const getDashboard = expressAsyncHandler(async (req, res) => {
    const categoryList = await CategoryModel.find({});
    const productList = await ProductModel.find({});
    const userList = await UserModel.find({});
    const orderList = await OrderModel.find({});
    const orderPaidList = orderList?.filter(item => item?.status == "paid")
    let totalPayment = 0;
    orderPaidList?.forEach(item => {
        totalPayment += item?.totalPrice
    });
    const result = {
        total_category: categoryList?.length,
        total_product: productList?.length,
        total_user: userList?.length,
        total_order: orderPaidList?.length,
        total_revenue: totalPayment,
    };
    res.send(result);
})