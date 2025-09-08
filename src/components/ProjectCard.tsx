import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  photo,
  webLink,
  time,
  techStack,
}: {
  title: string;
  description: string;
  photo: string;
  webLink?: string;
  time: string;
  techStack?: string;
}) {
  return (
    <div className="w-full h-100 flex items-center px-11 py-10 bg-julee-blue rounded-4xl gap-19">
      <Image
        src={photo}
        alt={title}
        width={600}
        height={600}
        className="w-[468px] h-full object-scale-down"
      />

      <div className="w-full flex flex-col gap-3">
        <div>
          <div className="flex justify-between items-baseline">
            <h1 className="text-3xl font-bold text-white">{title}</h1>
            <p className="text-xl text-white">{time}</p>
          </div>
          <h2 className="text-white">{techStack}</h2>
        </div>

        <div className="text-white">{description}</div>

        {webLink && (
          <a
            href={webLink}
            target="_blank"
            className="text-blue-500 underline w-fit"
          >
            Visit Website
          </a>
        )}
      </div>
    </div>
  );
}
