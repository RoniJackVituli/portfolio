import React from "react";

type RolesProps = {
  className?: string;
};

const Roles = ({ className }: RolesProps) => {
  return (
    <div className={className}>
      <span>Full Stack Developer • </span>
      <span>YouTuber Creator • </span>
      <span>Software Engineer</span>
    </div>
  );
};

export default Roles;
