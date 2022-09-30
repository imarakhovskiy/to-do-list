import { Header, PageContentWrapper } from "./components";
import { StyledLayout } from "./styled";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayout>
      <Header />
      <PageContentWrapper>{children}</PageContentWrapper>
    </StyledLayout>
  );
};
