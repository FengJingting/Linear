import React from "react";

const PreviewImage: React.FC = () => {
  return (
    <div className="mt-10 md:mt-0">
      <img
        src="preview-image.png" // 替换为实际图片路径
        alt="Preview"
        className="w-full rounded-lg shadow-lg"
      />
    </div>
  );
};

export default PreviewImage;