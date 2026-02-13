export default function Head() {
  return (
    <>
      <link
        rel="preconnect"
        href="https://www.mindfultalk.in"
        crossOrigin="anonymous"
      />
      <link
        rel="preconnect"
        href="https://www.googletagmanager.com"
        crossOrigin="anonymous"
      />

      <link
        rel="preload"
        href="/fonts/inter.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      <style>{`
        body {
          background-attachment: fixed;
          background-image:
            radial-gradient(circle at 20% 80%, rgba(244, 140, 4, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(8, 148, 180, 0.05) 0%, transparent 50%);
        }
      `}</style>
    </>
  )
}
