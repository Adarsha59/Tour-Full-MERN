import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";

export default function TiptapEditor({ value, onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: true,
      }),
      Underline,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      BulletList,
      OrderedList,
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  const button =
    "px-3 py-1 rounded text-sm border border-gray300 dark:border-gray600 hover:bg-gray200 dark:hover:bg-gray700 transition";

  return (
    <div className="w-full">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 mb-3 p-3 rounded border border-gray300 dark:border-gray700 bg-[#f9f9f9] dark:bg-[#2b2b2b]">
        <button
          className={button}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          Bold
        </button>

        <button
          className={button}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          Italic
        </button>

        <button
          className={button}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          Underline
        </button>

        <button
          className={button}
          onClick={() => editor.chain().focus().setHeading({ level: 1 }).run()}
        >
          H1
        </button>

        <button
          className={button}
          onClick={() => editor.chain().focus().setHeading({ level: 2 }).run()}
        >
          H2
        </button>

        <button
          className={button}
          onClick={() => editor.chain().focus().setHeading({ level: 3 }).run()}
        >
          H3
        </button>

        <button
          className={button}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          Bullet List
        </button>

        <button
          className={button}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          Number List
        </button>

        <button
          className={button}
          onClick={() => editor.chain().focus().undo().run()}
        >
          Undo
        </button>

        <button
          className={button}
          onClick={() => editor.chain().focus().redo().run()}
        >
          Redo
        </button>
      </div>

      {/* Editor */}
      <div className="border border-gray300 dark:border-gray700 rounded-lg p-3 bg-white dark:bg-[#242424] min-h-[200px]">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
