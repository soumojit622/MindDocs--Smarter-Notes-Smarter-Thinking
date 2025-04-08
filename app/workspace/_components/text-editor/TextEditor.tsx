"use client";

import Placeholder from "@tiptap/extension-placeholder";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useUser } from "@clerk/nextjs";
import EditorElements from "./EditorElement";

const TextEditor = () => {
  const { fileId } = useParams();
  const addNotes = useMutation(api.notes.saveNotes);
  const { user } = useUser();
  const notes = useQuery(
    api.notes.getNotes,
    fileId ? { fileId: fileId as string } : "skip"
  ) as string | undefined;

  // Ensure client-only rendering
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Write here...",
      }),
      Highlight,
    ],
    editorProps: {
      attributes: {
        class:
          "focus:outline-none h-screen p-5 w-full scrollbar-hide overflow-y-auto",
      },
    },
    content: "",
    autofocus: true,
    parseOptions: { preserveWhitespace: "full" },
    injectCSS: true,
    immediatelyRender: false, // ✅ SSR fix
  });

  // Set content once both editor and notes are available
  useEffect(() => {
    if (editor && notes) {
      editor.commands.setContent(notes);
    }
  }, [editor, notes]);

  // Save on Ctrl+S
  useEffect(() => {
    const handleSave = async (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        if (!editor || !user?.primaryEmailAddress?.emailAddress) return;

        try {
          await addNotes({
            fileId: fileId as string,
            notes: editor.getHTML(),
            createdBy: user.primaryEmailAddress.emailAddress,
          });
          toast.success("Notes saved successfully ✨");
        } catch (error) {
          toast.error("Failed to save notes ❌");
          console.error(error);
        }
      }
    };

    document.addEventListener("keydown", handleSave);
    return () => document.removeEventListener("keydown", handleSave);
  }, [editor, fileId, user, addNotes]);

  // ✅ Render nothing until client-side is confirmed
  if (!isClient || !editor) return null;

  return (
    <div className="scrollbar-hide">
      <EditorElements editor={editor} />
      <div className="h-[88vh] overflow-y-auto scrollbar-hide">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TextEditor;
