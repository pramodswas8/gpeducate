export const metadata = {
  title: "About",
};

export default function AboutLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <nav>about nav</nav>

      {children}
    </section>
  );
}
