import { Container } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
    return (
        <Container size="lg" className='min-h-[80vh] w-full flex flex-col justify-center items-center gap-2'>
            <h1 className='text-5xl max-w-[37.5rem] font-bold text-center'>{`Oops! The article you're looking for doesn't exist.`}</h1>
            <h3 className='text-2xl max-w-[45rem] text-center mt-10'>Explore other insightful articles or return to our homepage to discover more content.</h3>
            <Link href="/">
                <div
                    className="transition-all mt-5 btn-hover-blur px-6 py-2 w-fit shadow-lg border text-[0.75rem] font-semibold cursor-pointer"
                >
                    Return to Homepage
                </div>
            </Link>
        </Container>
    )
}

export default NotFoundPage