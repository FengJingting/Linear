import React from "react";

const SectionIdeate: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-12 bg-black p-12">
      {/* 左侧内容 */}
      <div className="flex flex-col space-y-4">
        {/* 主标题 */}
        <h2 className="text-white text-4xl font-bold">
          Ideate and specify what to build next
        </h2>

        {/* 列表 */}
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <div className="w-1 h-6 bg-green-400"></div>
            <span className="text-white font-medium">Collaborative documents</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1 h-6 bg-transparent"></div>
            <span className="text-gray-400">Inline comments</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1 h-6 bg-transparent"></div>
            <span className="text-gray-400">Text-to-issue commands</span>
          </li>
        </ul>
      </div>

      {/* 右侧内容 */}
      <div className="flex flex-col bg-gray-900 rounded-lg p-6 w-full max-w-lg">
        {/* 文档标题栏 */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-500 text-sm">Spice harvester › Project specs</span>
          <span className="text-gray-500 text-lg">...</span>
        </div>

        {/* 文档内容 */}
        <div className="flex flex-col space-y-4">
          {/* 图标和标题 */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
              <span className="text-black font-bold">👥</span>
            </div>
            <h3 className="text-green-400 font-bold text-lg">Collaborate on ideas</h3>
          </div>

          {/* 文本内容 */}
          <p className="text-gray-400">
            Write down product ideas and work together on feature specs in realtime, multiplayer project documents. Add <strong className="text-white">**style**</strong> and <strong className="text-white">##structure</strong> with rich-text formatting options.
          </p>

          {/* 高亮文本 */}
          <div className="flex items-center gap-2">
            <span className="bg-green-400 text-black px-2 py-1 rounded text-xs">zoe</span>
            <span className="bg-blue-400 text-black px-2 py-1 rounded text-xs">quinn</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionIdeate;