"use client";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Loader2Icon } from "lucide-react";

const PdfViewer = ({ fileId }: { fileId: string }) => {
  // Agar fileId undefined ya null hai to useQuery mat chalao
  const pdfRecord = useQuery(
    api.filestorage.getPdfRecord,
    fileId ? { fileId } : "skip"
  );

  if (!fileId) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">File ID missing 😥</p>
      </div>
    );
  }

  return (
    <div>
      {pdfRecord === undefined ? (
        <div className="flex justify-center items-center h-screen">
          <Loader2Icon className="animate-spin" />
        </div>
      ) : (
        <iframe
          src={pdfRecord![0].fileUrl + "#toolbar=0"}
          width={"100%"}
          className="h-screen"
        />
      )}
    </div>
  );
};
export default PdfViewer;
