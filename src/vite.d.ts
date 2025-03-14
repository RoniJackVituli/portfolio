/// <reference types="vite/client" />

declare module "*.module.css";
declare module "*.scss";
declare module "*.svg";
declare module "*.mp4";
declare module "*.webm";
declare module "*.mov";
declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.gif";

declare module "react-animated-css" {
  export interface AnimatedProps {
    children: ReactNode;
  }
}