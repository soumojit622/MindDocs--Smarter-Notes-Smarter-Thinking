import WorkspaceContent from "../_components/WorkspaceContent";
import WorkspaceHeader from "../_components/WorkspaceHeader";

interface ParamsTypes {
  params: {
    fileId: string;
  };
}

const Page = ({ params }: ParamsTypes) => {
  const { fileId } = params;

  return (
    <div>
      <WorkspaceHeader />
      <WorkspaceContent fileId={fileId} />
    </div>
  );
};

export default Page;
