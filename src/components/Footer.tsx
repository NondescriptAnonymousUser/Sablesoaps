export default function Footer() {
  return (
    <footer className="border-t border-fg/10">
      <div className="container-narrow py-10 text-sm text-sub flex flex-col sm:flex-row gap-4 items-center justify-between">
        <p>© {new Date().getFullYear()} {process.env.NEXT_PUBLIC_BRAND_NAME || "Project Soap"}</p>
        <div className="flex gap-6">
          <a className="hover:opacity-80" href="/privacy">Privacy</a>
          <a className="hover:opacity-80" href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}
