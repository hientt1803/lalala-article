import { PrimaryButton } from '@/components/button/primary-button';
import dynamic from 'next/dynamic';

const ArticleEditor = dynamic(
  () =>
    import("@/components/richtext-editor/tiptap").then((mob) => mob.default), { ssr: false }
);

export const ArticleWriteComment = () => {
  return <div className='flex flex-col justify-end items-end gap-2 mb-6'>
    <ArticleEditor />
    <PrimaryButton variant='filled' color='black' className='w-fit mt-2'>
      Write a comment
    </PrimaryButton>
  </div>
}