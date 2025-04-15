export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-violet-500 to-indigo-600">
      {children}
    </div>
  );
}
