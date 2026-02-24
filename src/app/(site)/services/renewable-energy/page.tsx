import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/Services/ServiceDetailTemplate";
import { serviceDetails } from "@/data/serviceDetails";

export const metadata: Metadata = {
  title: "Renewable Energy | Cubicso",
};

const RenewableEnergyPage = () => {
  return <ServiceDetailTemplate service={serviceDetails["renewable-energy"]} />;
};

export default RenewableEnergyPage;
