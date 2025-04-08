"use client";

import OnboardingSteps from "./OnboardingSteps";
import PdfViewer from "./PdfViewer";
import TextEditor from "./text-editor/TextEditor";

interface WorkspaceContentProps {
  fileId: string;
}

const WorkspaceContent = ({ fileId }: WorkspaceContentProps) => {
  return (
    <>
      <OnboardingSteps />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <TextEditor />
        </div>
        <div>
          <PdfViewer fileId={fileId} />
        </div>
      </div>
    </>
  );
};

export default WorkspaceContent;
