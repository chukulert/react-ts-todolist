type Props = {
  children?: React.ReactNode;
};

const PageContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-center items-center w-full min-h-full p-2">
      {children}
    </div>
  );
};

export default PageContainer;
