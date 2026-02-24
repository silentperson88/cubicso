import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/Services/ServiceDetailTemplate";
import { serviceDetails } from "@/data/serviceDetails";

export const metadata: Metadata = {
  title: "Wealth Management | Cubicso",
};

const WealthManagementPage = () => {
  return <ServiceDetailTemplate service={serviceDetails["wealth-management"]} />;
};

export default WealthManagementPage;
