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
import ManageSectionHeader from "./components/section_manage/ManageSectionHeader";
import ManageProjectOverview from "./components/section_manage/ManageProjectOverview";
import ManageProjectUpdates from "./components/section_manage/ManageProjectUpdates";
import Footer from "./components/main_frame/Footer";


const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
       {/* section-linear */}
      <div className="container mx-auto px-8 md:px-16 py-16 flex flex-col md:flex-row items-center">
        {/* Left: Title and Buttons */}
        <div className="flex-1">
          <HeroTitle />
          <ButtonGroup />
        </div>

        {/* Right: Preview Image */}
        <div className="flex-1">
          <PreviewImage />
        </div>
      </div>
       {/* section-powering */}
      <div className="bg-black py-16">
        <HeaderText />
        <LogoGrid />
      </div>
      {/* section-made */}
      <div className="bg-black py-16 px-8">
        <div className="container mx-auto">
          <FeatureHeaderText />
          <FeatureGrid />
        </div>
      </div>
      {/* section-set */}
      <div className="bg-black py-16 px-6">
        <div className="container mx-auto">
          {/* 标题部分 */}
          <SectionHeader />
        </div>
      </div>
      {/* section-Manage */}
      <div className="bg-black py-16 px-6">
      <div className="container mx-auto">
        {/* 两列布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 左侧列：标题 + 概览 */}
          <div className="space-y-8">
              <ManageSectionHeader
                title="Manage projects end-to-end"
                description="Consolidate specs, milestones, tasks, and other documentation in one centralized location."
              />
              <ManageProjectOverview />
          </div>

          {/* 右侧列：项目更新 */}
          <div className="space-y-8">
              <ManageSectionHeader
                title="Project updates"
                description="Communicate progress and project health with built-in project updates."
              />
              <ManageProjectUpdates />
          </div>
          
          </div>
        </div>
      </div>
      {/* 右侧列：项目更新 */}
      
      <Footer />
       
    </div>
    
    
  );
};

export default App;