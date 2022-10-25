import { IArticle, IComment, ITag } from "../models/article";
import { getAllUserDetails } from "./user";

export const ARTICLES: IArticle[] = [
    {id:1, title:'Article 1', featured:true, shortDescription:'Short Description',content:'Content',createdBy:1, createdDate:'2022/01/02', rating:3, tags:'Scifi'},
    {id:2, title:'Article 2', featured:true, shortDescription:'Growing up with Several Passions',content:'As I was growing up, I found myself indulging in all sorts of things. From arts to music ...',createdBy:1, createdDate:'2022/01/02', rating:5, tags:'Comedy Action'},
    {id:3, title:'Article 3', featured:true, shortDescription:'Short Description',content:'Content',createdBy:1, createdDate:'2022/01/02', rating:3, tags:'Action'},
    {id:4, title:'Article 4', featured:true, shortDescription:'Short Description',content:'Content',createdBy:1, createdDate:'2022/01/02', rating:3, tags:'Comedy'},
    {id:5, title:'Article 5', featured:true, shortDescription:'Short Description',content:'Content',createdBy:1, createdDate:'2022/01/02', rating:3, tags:'Comedy'},
    {id:6, title:'Article 6', featured:true, shortDescription:'Short Description',content:'Content',createdBy:1, createdDate:'2022/01/02', rating:3, tags:'Comedy'},

]

export const COMMENTS: IComment[] = [
    {id: 1, article:1, user:1, rating:3, comment:'this is comment', createdAt: '2022/01/03'},
    {id: 2, article:2, user:1, rating:3, comment:'this is comment', createdAt: '2022/01/03'},
    {id: 3, article:2, user:1, rating:3, comment:'this is comment', createdAt: '2022/01/03'},
    {id: 4, article:3, user:1, rating:3, comment:'this is comment', createdAt: '2022/01/03'},
    {id: 5, article:4, user:1, rating:3, comment:'this is comment', createdAt: '2022/01/03'},
    {id: 6, article:1, user:1, rating:3, comment:'this is comment', createdAt: '2022/01/03'},
    {id: 7, article:2, user:1, rating:3, comment:'this is comment', createdAt: '2022/01/03'},
];

export const TAGS: ITag[]= [
    {id:1,title:'Scifi'},
    {id:2,title:'Comedy'},
    {id:3,title:'Romance'},
    {id:4,title:'Action'},
]

export const getArticleDetails = (id: number)=>{
    return ARTICLES.find(v=> v.id === id);
}

export const getUserArticles = (id: number)=>{
    return ARTICLES.filter(v=> v.createdBy === id)
}

export const getCommentOfArticles = (id: number)=>{
    return COMMENTS.filter(v=> v.article === id)
}


export const getArticleByTag = (tag:string)=>{
    return ARTICLES.filter(v=> v.tags.toLowerCase().includes(tag.toLowerCase()));
}

export const getFeaturedArticles = ()=>{
    return ARTICLES.filter(v=>v.featured === true).map(v=>({
        ...v,
        createdBy: getAllUserDetails(v.createdBy)
    }));
}