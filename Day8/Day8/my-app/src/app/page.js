import CategoryHighlights from "@/components/home/ CategoryHighlights";
import PayementGateway from "@/components/home/ PyamentGateway";
import CartHeader from "@/components/home/CartHeader";
import RecommendedProductsSection from "@/components/home/RecommendedProductsSection";
import Drawer from "@/components/header/Drawer";
import { Section } from "lucide";
 export default function Home() {
  return (
    <div className="w-full   bg-white  mx-auto ">
      <CartHeader />
<div className="w-full grid grid-cols-1 lg:grid-cols-2 px-2 py-2 ">
  <CategoryHighlights />
  <PayementGateway />
</div>

         
      <RecommendedProductsSection />
     </div>

  );
}
