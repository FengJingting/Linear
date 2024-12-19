import React from "react";
import Navbar from "./components/main_frame/Navbar";
import HeroTitle from "./components/section_linear/HeroTitle";
import ButtonGroup from "./components/section_linear/ButtonGroup";
import PreviewImage from "./components/section_linear/PreviewImage";
import HeaderText from "./components/section_powering/HeaderText";
import LogoGrid from "./components/section_powering/LogoGrid";
import FeatureHeaderText from "./components/section_made/FeatureHeaderText";
import FeatureGrid from "./components/section_made/FeatureGrid";
import SectionHeader from "./components/section_set/SectionHeader";
import ManageSection from "./components/section_manage/ManageSection";
import Footer from "./components/main_frame/Footer";
import SectionIdeate from "./components/section_ideate/SectionIdeate";
import SectionInit from "./components/section_init/SectionInit";
import CollaborationSection from "./components/section_collaborate/CollaborationSection";
import SectionPlan from "./components/section_plan/SectionPlan";
import SectionBuilt from "./components/section_built/SectionBuilt";

const App: React.FC = () => {
  return (
    <div className="flex justify-center bg-black min-h-screen">
      {/* section-linear */}
      <div className="w-full max-w-screen-lg bg-gray-100 p-4 h-full">
        <Navbar/>
        {/* section-linear */}
          <div className="flex-1 bg-blue-500 mt-40">
            <HeroTitle />
            <ButtonGroup />
            <PreviewImage />
          </div>
        {/* section-powering */}
          <div className="flex-1 bg-green-500 mt-20">
            <HeaderText />
            <LogoGrid />
          </div>
        {/* section-made */}
          <div className="flex-1 bg-red-500 mt-20">
            <FeatureHeaderText />
            <FeatureGrid />
          </div>
        {/* section-set */}
          <div className="flex-1 bg-yellow-500 mt-20">
            <SectionHeader />
          </div>
        {/* section-manage */}
        <ManageSection
          leftTitle="Manage projects end-to-end"
          leftDescription="Consolidate specs, milestones, tasks, and other documentation in one centralized location."
          rightTitle="Project updates"
          rightDescription="Communicate progress and project health with built-in project updates."
        />
        <div className="flex-1 bg-yellow-500 mt-20">
          <SectionIdeate />
        </div>
        <SectionInit />

        <div className="flex-1 bg-yellow-500 mt-20">
          <SectionHeader />
        </div>
        <ManageSection
          leftTitle="Manage projects end-to-end"
          leftDescription="Consolidate specs, milestones, tasks, and other documentation in one centralized location."
          rightTitle="Project updates"
          rightDescription="Communicate progress and project health with built-in project updates."
        />
        <SectionInit />
        <div className="flex-1 bg-yellow-500 mt-20">
          <CollaborationSection />
        </div>
        <div className="flex-1 bg-yellow-500 mt-20">
          <SectionBuilt />
        </div>
          
        
        <SectionPlan />
        
        <Footer />
      </div>
      
    </div>
  );
};

export default App;