export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-emerald-400 to-cyan-400">
      {children}
    </div>
  );
}
