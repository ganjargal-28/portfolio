export const Image = ({ image, text }) => {
  return (
    <div className="h-[100px] w-[88px] flex flex-col items-center gap-2">
      {image}
      <p>{text}</p>
    </div>
  );
};
