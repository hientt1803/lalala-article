import { ArrowDownUp, ChevronDown } from 'lucide-react';
import dynamic from 'next/dynamic';
import { ArticleWriteComment } from './article-write-comment';
import { Select } from '@mantine/core';

const MainScrollArea = dynamic(
  () =>
    import("@/components/scroll-area").then((mob) => mob.MainScrollArea), { ssr: false }
);
const ArticleComment = dynamic(
  () =>
    import("./article-comment").then((mob) => mob.ArticleComment)
);

export const ArticleListComment = () => {
  return (
    <div className="container min-w-full w-full min-h-full h-full mt-10">
      <ArticleWriteComment />

      <div className="mt-5 md:mt-0">
        <div className="w-full h-[43.75rem]">
          <div className="flex justify-between items-center pl-5">
            <h5 className='font-medium text-md'>Comments (25)</h5>
            <div className='flex gap-2 items-center'>
              <Select
                leftSection={<ArrowDownUp className='w-4 h-4' />}
                rightSection={<ChevronDown className='w-4 h-4' />}
                value={
                  "Most recent"
                }
                searchable
                clearable
                defaultValue={"Most recent"}
                data={["Most recent", 'Newest', 'Oldest', 'Best reviews', 'Bad reviews']}
                className='text-sm font-medium'
                classNames={{
                  input: "border-none w-fit max-w-[150px]"
                }}
              />
            </div>
          </div>
          <MainScrollArea className="w-full min-h-full h-full" type="always" scrollbarSize={2}>
            <div className="w-full flex flex-col">
              {
                Array(10).fill(1).map((_, index) => (
                  <ArticleComment key={index} />
                ))
              }
            </div>
          </MainScrollArea>
        </div>
      </div>
    </div>
  )
}
