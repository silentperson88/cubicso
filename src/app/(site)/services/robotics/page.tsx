import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/Services/ServiceDetailTemplate";
import { serviceDetails } from "@/data/serviceDetails";

export const metadata: Metadata = {
  title: "Robotics | Cubicso",
};

const RoboticsPage = () => {
  return <ServiceDetailTemplate service={serviceDetails.robotics} />;
};

export default RoboticsPage;
