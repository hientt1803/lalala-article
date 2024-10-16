// GET ALL LIST POST

export interface ArticleResponse {
  data: ArticleListResponData
}

export interface ArticleListResponData {
  status: number
  data: IArticleType[]
}

export interface IArticleType {
  id: string
  post_name: string
  post_type: string
  post_content: string
  slug: string
  channel_id: string
  created_at: number
  user_id: string
  attachment: ArticleListAttachment[]
  directus_postmeta: ArticleListDirectusPostmeum[]
  taxonomy: Taxonomy[]
}

export interface ArticleListAttachment {
  url_file: string
  id: number
}

export interface ArticleListDirectusPostmeum {
  meta_id: string
  meta_key: string
  meta_value: string
}

export interface Taxonomy {
  slug: string
  taxonomy_id: string
  taxonomy_name: string
  terms: Term[]
}

export interface Term {
  name: string
  slug: string
  term_id: string
}


// GET DETAIL POST
export interface IArticleDetailType {
  result: Result
}

export interface Result {
  message: string
  data: Data
}

export interface Data {
  post: Post
  relatedPosts: RelatedPost[]
}

export interface Post {
  attachment: Attachment[]
  channel_id: string
  created_at: number
  directus_postmeta: DirectusPostmeum[]
  id: string
  post_content: string
  post_name: string
  post_type: string
  slug: string
  taxonomy: Taxonomy[]
  user_id: string
}

export interface Attachment {
  id: number
  url_file: string
}

export interface DirectusPostmeum {
  meta_id: string
  meta_key: string
  meta_value: string
}

export interface RelatedPost {
  attachment: Attachment2[]
  channel_id: string
  created_at: number
  directus_postmeta: DirectusPostmeum2[]
  id: string
  post_content: string
  post_name: string
  post_type: string
  slug: string
  taxonomy: Taxonomy2[]
  user_id: string
}

export interface Attachment2 {
  id: number
  url_file: string
}

export interface DirectusPostmeum2 {
  meta_id: string
  meta_key: string
  meta_value: string
}

export interface Taxonomy2 {
  slug: string
  taxonomy_id: string
  taxonomy_name: string
  terms: Term2[]
  count: any
  description: any
  parent: any
}

export interface Term2 {
  name: string
  slug: string
  term_id: string
}
