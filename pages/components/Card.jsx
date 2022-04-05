import Image from "next/image"
function Card({name, image, description}) {

  return (
    <div className="group w-full">
      <div className="relative overflow-hidden  rounded-3xl">
        <Image
        width={1250}
        height={850}
        src={image}
        alt={name}
        className="h-full"
        />
      <div className="absolute top-0 left-0 w-full h-full bg-focus opacity-0 hover:opacity-50 rounded-3xl ease-out duration-300 flex flex-col items-center justify-center">
          <p className="opacity-0 group-hover:opacity-100 text-2xl">{name}</p>
          <p className="opacity-0 group-hover:opacity-100 text-base">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
