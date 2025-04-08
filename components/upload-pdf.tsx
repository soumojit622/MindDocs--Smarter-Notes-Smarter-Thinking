"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useAction, useMutation } from "convex/react";
import { ChangeEvent, useRef, useState } from "react";
import { FileUp, Loader2, Loader2Icon, X } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api";

const UploadPdfFile = ({
  children,
  limitReached,
}: {
  children: React.ReactNode;
  limitReached: boolean;
}) => {
  const generateUploadUrl = useMutation(api.filestorage.generateUploadUrl);
  const insertToDB = useMutation(api.filestorage.insertFileToDB);
  const getFileUrl = useMutation(api.filestorage.getFileUrl);
  const embedDocument = useAction(api.myActions.ingest);

  const { user } = useUser();
  const [file, setFile] = useState<File | null>(null);
  const [filename, setFilename] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const onFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const onUpload = async () => {
    setLoading(true);
    //post url from convex similar as presigned url
    const postUrl = await generateUploadUrl();

    const result = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": file!.type },
      body: file,
    });

    const { storageId } = await result.json();
    const fileId = uuidv4();
    const fileUrl = await getFileUrl({ storageId });

    //insert storage id to db
    await insertToDB({
      fileId: fileId,
      fileName: filename == "" ? "Untitled File" : filename,
      fileUrl: fileUrl!,
      createdBy: user?.primaryEmailAddress?.emailAddress!,
      storageId: storageId,
    });

    const response = await axios.get("/api/pdf-loader?pdfUrl=" + fileUrl);

    await embedDocument({
      splitText: response.data.result,
      fileId: fileId,
    });

    setLoading(false);
    setOpen(false);
    setFile(null);
    setFilename("");
    inputRef.current!.value = "";
    toast("file is ready for note taking!!");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="mx-2">
        <Button
          className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-5 py-2 rounded-xl shadow-lg hover:brightness-105 transition-all duration-200 ease-in-out"
          // disabled={limitReached}
        >
          {children}
        </Button>
      </DialogTrigger>

      <DialogContent className="w-[95vw] max-w-lg mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 p-5 sm:p-7 md:w-[85vw]">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl font-bold text-gray-800">
            <FileUp className="w-5 h-5 mr-2 text-purple-600" />
            Upload PDF
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-5 mt-5">
          <p className="text-sm text-gray-600">Choose a PDF file to upload.</p>

          <div>
            <input
              type="file"
              ref={inputRef}
              accept="application/pdf"
              onChange={(e) => onFileSelect(e)}
              className="w-full text-sm file:mr-4 file:py-2 file:px-5 file:rounded-full file:border-0 file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 transition"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="filename"
              className="text-sm text-gray-700 font-medium"
            >
              File Name
            </Label>
            <Input
              id="filename"
              placeholder="Enter file name"
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
              className="h-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none text-sm px-3"
            />
          </div>

          <div className="flex justify-end gap-3">
            <DialogClose asChild>
              <Button
                variant="outline"
                className="flex items-center text-sm text-gray-700 px-4 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
              >
                <X className="w-4 h-4 mr-1" />
                Cancel
              </Button>
            </DialogClose>

            <Button
              onClick={onUpload}
              disabled={loading}
              className="flex items-center bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm px-5 py-1.5 rounded-lg hover:brightness-105 transition"
            >
              {loading ? (
                <Loader2 className="animate-spin h-4 w-4" />
              ) : (
                <>
                  <FileUp className="w-4 h-4 mr-1" />
                  Upload
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default UploadPdfFile;
