import Image from "next/image";

export default function Title() {
  return (
    <Image
      src="/assets/title.png"
      alt="Thoughts.io"
      className="absolute top-0 left-1/2 transform -translate-x-1/2"
      width={300}
      height={300}
    />
  )
}
