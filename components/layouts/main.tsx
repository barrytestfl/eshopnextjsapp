type LayoutProps = {
    children: React.ReactNode,
  };

export default function Layout({ children }:LayoutProps) {
    return (
      <>
      <title>eshop</title>
        <header>Website</header>
        <main>{children}</main>
        <footer>&copy; Website</footer>
      </>
    );
  }