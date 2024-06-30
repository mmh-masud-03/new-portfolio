import Image from "next/image";

const ToolIcon = ({ name, src }) => {
  return (
    <div className="flex flex-col items-center p-2 m-2 md:w-1/4 hover:scale-105 text-xl">
      <Image src={src} alt={name} width={70} height={70} />
      <span className="text-sm">{name}</span>
    </div>
  );
};
export default ToolIcon;
