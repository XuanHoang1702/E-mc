interface MainContentProps {
  children?: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return <main className="flex-grow px-5 mt-14">{children}</main>;
};

export default MainContent;
