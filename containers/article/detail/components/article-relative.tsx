import { ArticleCard } from '@/components/card'
import { RelatedPost } from '@/stores/features/posts'
import { Container } from '@mantine/core'
import React from 'react'

export const ArticleRelative = ({ relatiedArticle }: { relatiedArticle: RelatedPost[] }) => {
    return (
        <Container size={"lg"}>
            <div className='text-3xl font-bold text-start mb-2 mt-16 mx-0'>
                Relative Article
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
                {
                    relatiedArticle?.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))
                }
            </div>
        </Container >
    )
}