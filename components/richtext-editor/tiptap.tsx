"use client"

import React, { useCallback, useState } from 'react'
import { cn } from '@/lib'

import { Code as CodeIcon, List, ListOrdered, MessageSquareQuote, Redo, RemoveFormatting, Trash2, Undo, WrapText } from 'lucide-react'

import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import BulletList from '@tiptap/extension-bullet-list'
import Paragraph from '@tiptap/extension-paragraph'
import OrderedList from '@tiptap/extension-ordered-list'
import ListItem from '@tiptap/extension-list-item'
import Text from '@tiptap/extension-text'
import Document from '@tiptap/extension-document'
import Blockquote from '@tiptap/extension-blockquote'
import Code from '@tiptap/extension-code'
import Highlight from '@tiptap/extension-highlight'
import Link from '@tiptap/extension-link'
import Underline from '@tiptap/extension-underline'
import Strike from '@tiptap/extension-strike'

import { Editor, EditorContent, useEditor } from '@tiptap/react'

const MenuBar = ({ editor }: { editor: Editor }) => {
    const setLink = useCallback(() => {
        const previousUrl = editor.getAttributes('link').href
        const url = window.prompt('URL', previousUrl)

        // cancelled
        if (url === null) {
            return
        }

        // empty
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink()
                .run()

            return
        }

        // update link
        editor.chain().focus().extendMarkRange('link').setLink({ href: url })
            .run()
    }, [editor])


    if (!editor) {
        return null
    }

    return (
        <div className="control-group">
            <div className="button-group transition-all flex gap-3 text-sm font-medium flex-wrap p-1">
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={cn(editor.isActive('bold') ? 'is-active' : '', "")}
                >
                    B
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={cn(editor.isActive('italic') ? 'is-active' : '', "")}
                >
                    I
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={cn(editor.isActive('strike') ? 'is-active' : '', '')}
                >
                    U
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    className={cn(editor.isActive('code') ? 'is-active' : '', '')}
                >
                    <CodeIcon className='w-5 h-5' />
                </button>
                <div className='w-[0.0625rem] h-5 mt-auto bg-neutral-400' />
                <button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={cn(editor.isActive('paragraph') ? 'is-active' : '', '')}
                >
                    Paragraph
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={cn(editor.isActive('heading', { level: 1 }) ? 'is-active' : '', '')}
                >
                    H1
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={cn(editor.isActive('heading', { level: 2 }) ? 'is-active' : '', '')}
                >
                    H2
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={cn(editor.isActive('heading', { level: 3 }) ? 'is-active' : '', '')}
                >
                    H3
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                    className={cn(editor.isActive('heading', { level: 4 }) ? 'is-active' : '', '')}
                >
                    H4
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                    className={cn(editor.isActive('heading', { level: 5 }) ? 'is-active' : '', '')}
                >
                    H5
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                    className={cn(editor.isActive('heading', { level: 6 }) ? 'is-active' : '', '')}
                >
                    H6
                </button>
                <div className='w-[0.0625rem] h-5 mt-auto bg-neutral-400' />
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={cn(editor.isActive('bulletList') ? 'is-active' : '', '')}
                >
                    <List className='w-5 h-5' />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={cn(editor.isActive('orderedList') ? 'is-active' : '', '')}
                >
                    <ListOrdered className='w-5 h-5' />
                </button>
                <div className='w-[0.0625rem] h-5 mt-auto bg-neutral-400' />
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={cn(editor.isActive('blockquote') ? 'is-active' : '', '')}
                >
                    <MessageSquareQuote className='w-5 h-5' />
                </button>
                <button onClick={() => editor.chain().focus().setHardBreak().run()}>
                    <WrapText className='w-5 h-5' />
                </button>
                <button onClick={() => editor.chain().focus().undo().run()}>
                    <Undo className='w-5 h-5' />
                </button>
                <button onClick={() => editor.chain().focus().redo().run()}>
                    <Redo className='w-5 h-5' />
                </button>
                <div className='w-[0.0625rem] h-5 mt-auto bg-neutral-400' />
                <button onClick={setLink} className={editor.isActive('link') ? 'is-active' : ''}>
                    A
                </button>
                <button
                    onClick={() => editor.chain().focus().unsetLink().run()}
                    disabled={!editor.isActive('link')}
                    className='cursor-pointer'
                >
                    Unset link
                </button>
                <div className='w-[0.0625rem] h-5 mt-auto bg-neutral-400' />
                <button
                    onClick={() => editor.chain().focus().toggleHighlight().run()}
                    className={editor.isActive('highlight') ? 'is-active' : ''}
                >
                    Toggle highlight
                </button>
                <div className='w-[0.0625rem] h-5 mt-auto bg-neutral-400' />
                <button onClick={() => editor.chain().focus().unsetAllMarks().run()} className=''>
                    <RemoveFormatting className='w-5 h-5' />
                </button>
                <button onClick={() => editor.chain().focus().clearNodes().run()} className=''>
                    <Trash2 className='w-5 h-5' />
                </button>
            </div>
        </div>
    )
}

const ArticleEditor = () => {
    const [editorContent, setEditorContent] = useState("");

    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: 'Write something …',
            }),
            Document,
            Paragraph,
            Text,
            BulletList.configure({
                HTMLAttributes: {
                    class: "list-disc ml-2",
                },
            }),
            OrderedList.configure({
                HTMLAttributes: {
                    class: "list-decimal ml-2",
                },
            }),
            ListItem,
            Code,
            Blockquote,
            Highlight.configure({ multicolor: true }),
            Link.configure({
                openOnClick: false,
                autolink: true,
                defaultProtocol: 'https',
            }),
            Underline,
            Strike

        ],
        immediatelyRender: false,
        editorProps: {
            attributes: {
                spellcheck: 'true',
                class:
                    "shadow appearance-none min-h-[150px] border rounded w-full py-2 px-3 bg-white text-black text-sm mt-0 md:mt-3 leading-tight focus:outline-none focus:shadow-outline",
            },
        },
        content: editorContent,
        onUpdate: ({ editor }) => {
            setEditorContent(editor.getHTML());
        },
    })


    return (
        <React.Fragment>
            {
                editor && (
                    <div className='tiptap min-w-full w-full h-fit'>
                        <EditorContent editor={editor} />
                        <MenuBar editor={editor} />
                    </div>
                )
            }
        </React.Fragment>
    )
}

ArticleEditor.displayName = "ArticleEditor";

export default ArticleEditor;