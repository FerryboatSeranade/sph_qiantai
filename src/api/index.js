//对所有API进行统一管理
import requests from "@/api/requests";

export const reqCategoryList = () => requests.get("/product/getBaseCategoryList"); //获取商品分类列表