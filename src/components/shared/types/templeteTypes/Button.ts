export interface ButtonType {
    children: React.ReactNode;
    bgColor?: string;
    HandleClick?: () => void;
    fontFamily?:
      | "font-custom"
      | "font-manrope"
      | "Inter-regular"
      | "Inter-medium"
      | "Inter-bold"
      | "Poppins-medium"
      | "Poppins-regular";
    size?: "large" | "extralarge" | "small" | "extrasmall";
    fontSize?: "large" | "medium" | "small" | "extralarge";
    color?: string;
    rounded?: "full" | "medium" | "null" | "normal";
    border?: "black" | "white";
    hoverBg?: "white" | "black" | "primary" | "secondaryPurple" | "";
    hoverText?: "white" | "black" | "primary" | "secondaryPurple";
    className?: string;
  }