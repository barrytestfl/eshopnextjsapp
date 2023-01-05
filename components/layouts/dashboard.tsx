type LayoutProps = {
    children: React.ReactNode,
  };

export default function DashboardLayout({ children }:LayoutProps) {
    return (
      <>
        <header>DashboardLayout</header>
        <main>{children}</main>
        <footer>&copy; Website</footer>
      </>
    );
  }