export interface Post{
    _id:string;
    _createdAt:string;
    title:string;
    description:string;
    mainImage:{
        assets:{
            url:string;
        };
    };
    slug:{
        current:string;
    };
    body:[object];
}