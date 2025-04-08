"use client";

import { useQuery } from "convex/react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { api } from "@/convex/_generated/api";
import { BsUpload } from "react-icons/bs";
import UploadPdfFile from "@/components/upload-pdf";
import { Plus } from "lucide-react";

const PDFMockup = () => (
  <div className="relative w-20 h-24 sm:w-[80px] sm:h-[100px] bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl shadow-xl flex items-center justify-center">
    <div className="absolute top-0 right-0 w-6 h-6 bg-white rounded-bl-xl text-xs font-bold text-purple-600 flex items-center justify-center">
      PDF
    </div>
    <div className="absolute bottom-3 left-3 w-12 h-2 bg-white/90 rounded-md" />
    <div className="absolute bottom-1 left-3 w-10 h-2 bg-white/70 rounded-md" />
  </div>
);

const EmptyMockup = () => (
  <div className="w-48 h-40 relative bg-gradient-to-tr from-indigo-50 to-purple-100 border-2 border-dashed border-indigo-300 rounded-lg shadow-inner flex flex-col items-center justify-center">
    <div className="w-24 h-20 bg-gradient-to-tr from-purple-300 to-blue-200 rounded-t-lg shadow-lg relative">
      <div className="absolute top-0 left-2 w-3 h-3 bg-white rounded-full" />
      <div className="absolute top-0 left-7 w-3 h-3 bg-white rounded-full" />
      <div className="absolute top-0 left-12 w-3 h-3 bg-white rounded-full" />
    </div>
    <div className="w-16 h-3 bg-purple-200 mt-3 rounded-sm" />
    <div className="w-12 h-2 bg-blue-200 mt-2 rounded-sm" />
  </div>
);

const Page = () => {
  const { user } = useUser();
  const userPdfs = useQuery(api.filestorage.getUserPdfs, {
    email: user?.primaryEmailAddress?.emailAddress as string,
  });

  const plan = useQuery(api.user.fetchUserPlan, {
    email: user?.primaryEmailAddress?.emailAddress as string,
  });
  const pdfFiles = useQuery(api.filestorage.getUserPdfs, {
    email: user?.primaryEmailAddress?.emailAddress as string,
  });

  const isLoading = pdfFiles === undefined;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 px-8 py-12">
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 text-center sm:text-left drop-shadow-lg">
        Your Smart Workspace
      </h2>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {/* Loading State */}
        {isLoading &&
          Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 backdrop-blur-md bg-white/70 border border-purple-200 shadow-lg animate-pulse flex flex-col items-center"
            >
              <div className="w-20 h-24 bg-indigo-200 rounded-md mb-4" />
              <div className="h-4 w-32 bg-purple-200 rounded-full" />
            </div>
          ))}

        {/* PDF Cards */}
        {!isLoading &&
          pdfFiles &&
          pdfFiles.length > 0 &&
          pdfFiles.map((pdfFile) => (
            <Link
              href={`/workspace/${pdfFile.fileId}`}
              key={pdfFile._id}
              className="group"
            >
              <div className="rounded-2xl p-5 bg-white shadow-lg border border-indigo-100 hover:shadow-2xl transition-transform transform hover:-translate-y-1 flex flex-col items-center gap-4">
                <PDFMockup />
                <p className="text-center text-lg font-semibold text-indigo-700 group-hover:text-purple-600 line-clamp-2">
                  {pdfFile.fileName}
                </p>
              </div>
            </Link>
          ))}

        {/* Empty State */}
        {!isLoading && pdfFiles && pdfFiles.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center mt-10 text-center space-y-6">
            <EmptyMockup />
            <h3 className="text-2xl font-semibold text-indigo-600">
              No Notes Yet
            </h3>
            <p className="text-indigo-500 max-w-lg">
              Upload your first PDF to start taking notes with the power of AI.
            </p>
            <UploadPdfFile
              limitReached={
                userPdfs && userPdfs?.length >= 5 && plan === "free"
                  ? true
                  : false
              }
            >
              <div className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl text-white  hover:brightness-90 transition-all">
                <Plus className="h-4 w-4" />
                Upload PDF
              </div>
            </UploadPdfFile>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
