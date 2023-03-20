//对所有API进行统一管理
import requests from "@/api/requests";
import mockRequests from "@/api/mockRequests";

export const reqCategoryList = () => requests.get("/product/getBaseCategoryList"); //获取商品分类列表
export const reqBanners = () => mockRequests.get("/banners");
export const reqFloors = () => mockRequests.get("/floors");

console.log("测试能否正确访问到mock数据-banners: ", reqBanners())
console.log("测试能否正确访问到mock数据:-floors ", reqFloors())