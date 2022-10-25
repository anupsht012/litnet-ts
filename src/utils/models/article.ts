
export interface IArticle { 
    id:number;
    title:String;
    createdDate: String;
    createdBy: number;
    shortDescription: string;
    content:string;
    tags:string;
    rating: number;
    featured: boolean;
}


export interface IComment{
    id: number;
    user: number;
    article: number;
    comment: string;
    createdAt: string;
    rating:number;
}

export interface ITag{
    id: number,
    title: string;
}