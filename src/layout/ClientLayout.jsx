import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

export default function ClientLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-darkbg dark:bg-lightbg transition-colors duration-500">
      <Header />
      <main className="flex-1 w-full overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
