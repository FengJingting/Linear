import React from "react";
import Navbar from "./components/main_frame/Navbar";
import HeroTitle from "./components/section_linear/HeroTitle";
import ButtonGroup from "./components/section_linear/ButtonGroup";
import PreviewImage from "./components/section_linear/PreviewImage";
import HeaderText from "./components/section_powering/HeaderText";
import LogoGrid from "./components/section_powering/LogoGrid";
import FeatureHeaderText from "./components/section_made/FeatureHeaderText";
import FeatureGrid from "./components/section_made/FeatureGrid";
import ManageSection from "./components/section_manage/ManageSection";
import Footer from "./components/main_frame/Footer";
import SectionIdeate from "./components/section_ideate/SectionIdeate";
import SectionInit from "./components/section_init/SectionInit";
import CollaborationSection from "./components/section_collaborate/CollaborationSection";
import SectionPlan from "./components/section_plan/SectionPlan";
import SectionBuilt from "./components/section_built/SectionBuilt";
import SectionZero from "./components/main_frame/SectionZero";
import InsightsSection from "./components/section_insight/InsightsSection";
import Scroll from "./components/section_collaborate/Scroll";

const App: React.FC = () => {
  return (
    <div className="flex flex-col justify-center bg-black min-h-screen">
      {/* section-linear */}
        <div className="mx-[187px] px-[32px] max-w-[1088px] mt-40">
          <Navbar/>
        </div>
        
        {/* section-linear */}
        <div className="mx-[187px] px-[32px] max-w-[1088px] mt-10">
          <HeroTitle />
          <ButtonGroup />
          <PreviewImage />
        </div>
        {/* section-powering */}
          <div className="mx-[187px] px-[32px] max-w-[1088px] mt-60">
            <HeaderText />
            <LogoGrid />
          </div>
        {/* section-made */}
          <div className="mx-[187px] px-[32px] max-w-[1088px] mt-60">
            <FeatureHeaderText />
            <FeatureGrid />
          </div>
        {/* section-set */}
        <div className="mx-[187px] px-[32px] max-w-[1088px] mt-60">
          <SectionZero
              linkHref="#"
              linkText="Project and long-term planning"
              headingText={"Set the product direction"}
              subHeading="Align your team around a unified product timeline."
              description=" Plan, manage, and track all product initiatives with Linear’s visual planning tools."
              imageSrc="./public/section_set_0.png" // 替换为实际路径
              imageAlt="Section preview"
            />
        </div>
        
        {/* section-manage */}
        <div className="mx-[187px] px-[32px] max-w-[1088px] mt-60"><ManageSection
          leftTitle="Manage projects end-to-end"
          leftDescription="Consolidate specs, milestones, tasks, and other documentation in one centralized location."
          rightTitle="Project updates"
          rightDescription="Communicate progress and project health with built-in project updates."
        /></div>
        
        <div className="mx-[187px] px-[32px] max-w-[1088px] mt-60">
          <SectionIdeate />
        </div>
        
        <div className="mx-[187px] px-[32px] max-w-[1088px]">
          <SectionInit />
        </div>

        <div className="mx-[187px] px-[32px] max-w-[1088px] mt-60">
          <SectionZero
              linkHref="#"
              linkText="Task tracking and sprint planning"
              iconColor="rgb(212, 177, 68)"
              headingText={"Issue tracking you’ll enjoy using"}
              subHeading="Optimized for speed and efficiency. "
              description="Create tasks in seconds, discuss issues in context, and breeze through your work in views tailored to you and your team."
              imageSrc="./public/section_issue_0.png" // 替换为实际路径
              imageAlt="Section preview"
            />
        </div>
        <div className="mx-[187px] px-[32px] max-w-[1088px]">
        <ManageSection
          leftTitle="Build momentum with Cycles"
          leftDescription="Create healthy routines and focus your team on what work should happen next."
          rightTitle="Manage incoming work with Triage"
          rightDescription="Review and assign incoming bug reports, feature requests, and other unplanned work."
        />
        </div>

        <div className="mx-[187px] px-[32px] max-w-[1088px] mt-60">
          <InsightsSection />
        </div>
        
        <div className="mx-[187px] px-[32px] max-w-[1088px]">
          <SectionInit />
        </div>
        
        <div
          className="mx-[187px] px-[32px] max-w-[1088px] mt-60 "
        >
          <CollaborationSection />
        </div>
          {/* 滑动窗口部分 */}
          <div
          className="mx-[187px] px-[32px] max-w-[1088px] "
        >
          <Scroll />
        </div>
          

        <div className="mx-[187px] px-[32px] max-w-[1088px] mt-60 ">
          <SectionBuilt />
        </div>
          
        
        <SectionPlan />
        
        
      <Footer />
      
    </div>
  );
};

export default App;