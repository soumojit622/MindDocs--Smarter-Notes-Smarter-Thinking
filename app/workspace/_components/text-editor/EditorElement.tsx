import { useAction, useMutation } from "convex/react";
import {
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  Italic,
  List,
  Sparkles,
  Strikethrough,
} from "lucide-react";
import { useParams } from "next/navigation";
import { api } from "../../../../convex/_generated/api";
import { chatSession } from "@/config/Gemini";
import { toast } from "sonner";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

const EditorElements = ({ editor }: { editor: any }) => {
  const { fileId } = useParams();
  const vectorSearch = useAction(api.myActions.search);
  const { user } = useUser();
  const addNotes = useMutation(api.notes.saveNotes);
  if (!editor) {
    return null;
  }

  const onAIAssist = async () => {
    toast("AI is generating your answer please wait...");
    const selectedText = editor.state.doc.textBetween(
      editor.state.selection.from,
      editor.state.selection.to,
      ""
    );

    const vectors = await vectorSearch({
      fileId: fileId as string,
      query: selectedText,
    });

    const jsonParsed = JSON.parse(vectors);
    let textContent = "";

    jsonParsed &&
      jsonParsed.forEach((d: any) => {
        textContent += d.pageContent;
      });

    const prompt = `For given question: ${selectedText} format the content: ${textContent} like an answer to the question in points and use bullets if necessary, give proper length answer based on the content provided Note: please give output in html format and give body section only also keep the answer to the point dont go out of the question's context`;
    const answer = await chatSession.sendMessage(prompt);
    const allText = editor.getHTML();
    const finalAns = answer.response
      .text()
      .replaceAll("```", "")
      .replaceAll("html", "");
    console.log(finalAns);
    editor.commands.setContent(allText + "<strong>Answer:</strong>" + finalAns);

    await addNotes({
      fileId: fileId as string,
      notes: editor.getHTML(),
      createdBy: user?.primaryEmailAddress?.emailAddress as string,
    });
  };

  return (
    <div className="w-full rounded-2xl bg-gradient-to-br from-[#7b2ff7]/20 to-[#40c9ff]/20 backdrop-blur-md border border-white/10 shadow-xl p-4 sm:p-6">
      <div className="flex flex-wrap gap-3 sm:gap-4 items-center justify-start">
        {[
          {
            icon: Heading1,
            action: () =>
              editor.chain().focus().toggleHeading({ level: 1 }).run(),
            active: editor.isActive("heading", { level: 1 }),
            label: "H1",
          },
          {
            icon: Heading2,
            action: () =>
              editor.chain().focus().toggleHeading({ level: 2 }).run(),
            active: editor.isActive("heading", { level: 2 }),
            label: "H2",
          },
          {
            icon: Heading3,
            action: () =>
              editor.chain().focus().toggleHeading({ level: 3 }).run(),
            active: editor.isActive("heading", { level: 3 }),
            label: "H3",
          },
          {
            icon: Bold,
            action: () => editor.chain().focus().toggleBold().run(),
            active: editor.isActive("bold"),
            label: "Bold",
          },
          {
            icon: Italic,
            action: () => editor.chain().focus().toggleItalic().run(),
            active: editor.isActive("italic"),
            label: "Italic",
          },
          {
            icon: Strikethrough,
            action: () => editor.chain().focus().toggleStrike().run(),
            active: editor.isActive("strike"),
            label: "Strike",
          },
          {
            icon: Highlighter,
            action: () => editor.chain().focus().toggleHighlight().run(),
            active: editor.isActive("highlight"),
            label: "Highlight",
          },
          {
            icon: List,
            action: () => editor.chain().focus().toggleBulletList().run(),
            active: editor.isActive("bulletList"),
            label: "Bullet List",
          },
          {
            icon: Code,
            action: () => editor.chain().focus().toggleCodeBlock().run(),
            active: editor.isActive("codeBlock"),
            label: "Code Block",
          },
        ].map(({ icon: Icon, action, active, label }, index) => (
          <button
            key={index}
            title={label}
            onClick={action}
            className={`p-2 sm:p-2.5 rounded-xl transition-all duration-300 flex items-center justify-center
        ${
          active
            ? "bg-gradient-to-tr from-purple-500 to-blue-500 text-white shadow-md shadow-purple-300"
            : "bg-white border border-gray-200 hover:bg-gray-100 text-gray-800 transition duration-200"
        }
`}
          >
            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        ))}

        <button
          title="AI Assist"
          onClick={onAIAssist}
          className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-indigo-500 text-white shadow-lg hover:scale-105 transform transition-all duration-300"
        >
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};
export default EditorElements;
