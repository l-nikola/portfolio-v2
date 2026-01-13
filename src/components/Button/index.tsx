import { Send, Download } from "lucide-react";

type IconName = "download" | "submit";

interface ButtonProps {
  label: string;
  icon?: IconName;
  mode: "download" | "submit";
}

const icons = {
  download: Download,
  submit: Send,
};

export default function Button({ label, icon, mode }: ButtonProps) {
  const Icon = icon ? icons[icon] : null;
  // TODO: Action on click
  const handleClick = () => {
    if (mode === "download") {
      console.log("Download");
    }

    if (mode === "submit") {
      console.log("Submit");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="border-gradient-solid flex items-center gap-1.5 rounded-full px-2.5 py-1 md:py-1.5 lg:px-5"
    >
      {Icon && (
        <Icon
          strokeWidth={1}
          className="h-3.5 w-3.5 md:h-4 md:w-4 lg:h-5 lg:w-5"
        />
      )}
      <span className="text-xs md:text-sm lg:text-base">{label}</span>
    </button>
  );
}
