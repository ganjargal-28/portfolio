export const SkillBox = ({ iconComponent, text }) => {
  return (
    <div className="h-[100px] w-[88px] flex flex-col items-center gap-2">
      {iconComponent}
      <p>{text}</p>
    </div>
  );
};
export const Box = (color) => {
  color = "red";
  return (
    <div className={`${color === "red" ? "text-red-500" : "text-blue-500"}`}>
      text
    </div>
  );
};
