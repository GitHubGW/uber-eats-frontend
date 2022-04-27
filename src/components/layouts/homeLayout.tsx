import PageTitle from "../pageTitle";

interface HomeLayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const HomeLayout = ({ pageTitle, children }: HomeLayoutProps) => {
  return (
    <div className="">
      <PageTitle title={pageTitle} />
      {children}
    </div>
  );
};

export default HomeLayout;
