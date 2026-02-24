import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/Services/ServiceDetailTemplate";
import { serviceDetails } from "@/data/serviceDetails";

export const metadata: Metadata = {
  title: "Heavy Engineering | Cubicso",
};

const HeavyEngineeringPage = () => {
  return <ServiceDetailTemplate service={serviceDetails["heavy-engineering"]} />;
};

export default HeavyEngineeringPage;
