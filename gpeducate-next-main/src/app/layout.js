import { Header, ThemeContext } from "@/core";
import { robotoFonts } from "@/config/fonts.config";
import { Providers } from "@/store/Providers";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export const metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoFonts.className}>
        <AppRouterCacheProvider>
          <Providers>
            <ThemeContext options={{ key: "mui" }}>
              <>
                <header>
                  <Header />
                </header>
                {children}
              </>
            </ThemeContext>
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
