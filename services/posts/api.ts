import 'server-only'
import { ArticleResponse, IArticleDetailType } from "@/stores/features/posts";
import { CHANNEL_ID, API_URL, POST_TYPE, USER_ID } from "@/utils"
import { notFound } from "next/navigation"

export const preLoadGetListArticle = ()=>{
    void getListArticle();
}

export const getListArticle = async ()=>{
    const res = await fetch(`${API_URL}/content/search?user_id=${USER_ID}
        &channel_id=${CHANNEL_ID}&post_type=${POST_TYPE}`);

    const listArticle:ArticleResponse = await res.json()
    
    if (!listArticle) {
        notFound();
    }
    
    return listArticle.data.data;
}

export const preLoadGetArticleById = (id:string)=>{
    void getArticleById(id);
}

export const getArticleById = async (id:string)=>{
    if (!id) {
        notFound();
    }

    const res = await fetch(`${API_URL}/content/${id}`);

    const listArticle:IArticleDetailType = await res.json()

    if (!listArticle) {
        notFound();
    }
    
    return listArticle.result.data;
}