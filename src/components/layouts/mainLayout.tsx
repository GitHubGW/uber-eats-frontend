import PageTitle from "../pageTitle";

interface MainLayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const MainLayout = ({ pageTitle, children }: MainLayoutProps) => {
  return (
    <div className="wrapper">
      <PageTitle title={pageTitle} />
      {children}
    </div>
  );
};

export default MainLayout;
