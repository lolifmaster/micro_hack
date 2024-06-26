import NavBar from "@/components/NavBar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col">
      <NavBar />
      <div className="max-w-4xl mx-auto px-2">{children}</div>
    </main>
  );
};

export default MainLayout;
