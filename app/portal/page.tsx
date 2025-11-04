import PortalHero from "../../components/portal/PortalHero";
import PortalAbout from "../../components/portal/PortalAbout";
import PortalProjects from "../../components/portal/PortalProjects";
import PortalProcess from "../../components/portal/PortalProcess";
import PortalFooter from "../../components/portal/PortalFooter";

export default function Portal() {
  return (
    <div className="bg-black text-white min-h-screen">
      <PortalHero />
      <PortalAbout />
      <PortalProjects />
      <PortalProcess />
      <PortalFooter />
    </div>
  );
}