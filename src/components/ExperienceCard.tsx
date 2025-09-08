import Image from "next/image";

export default function ExperienceCard({
  position,
  company,
  time,
  description,
  photo,
  webLink,
}: {
  position: string;
  company: string;
  time: string;
  description: string;
  photo: string;
  webLink?: string;
}) {
  return (
    <div className="w-full h-100 flex items-center px-11 py-10 bg-white rounded-4xl gap-19">
      <Image
        src={photo}
        alt={company}
        width={600}
        height={600}
        className="w-[468px] h-full rounded-lg object-scale-down"
      />

      <div className="w-full flex flex-col gap-3">
        <div>
          <div className="flex justify-between items-baseline">
            <h1 className="text-3xl font-bold text-black">{position}</h1>
            <p className="text-xl text-julee-grey">{time}</p>
          </div>
          <h2 className="text-julee-grey">{company}</h2>
        </div>

        <div className="text-black">{description}</div>

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
