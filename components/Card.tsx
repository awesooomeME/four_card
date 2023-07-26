import Image from "next/image";

type CardProps = {
    title: string,
    desc: string,
    icon: any,
    icon_alt: string,
    index: number
}

const Card = ({title, desc, icon, icon_alt, index}: CardProps) => {
    return (
        <div className={`bg-white rounded-lg p-5 shadow-xl grid gap-1
            border-t-2 ${index==0 ? 'border-t-red' : ''}
            ${index==1 ? 'border-t-cyan' : ''} ${index==2 ? 'border-t-orange' : ''}
            ${index==3 ? 'border-t-blue' : ''}
            desktop:row-span-2 ${(index==0 || index==3)? 'desktop:row-start-2' : ''}
            ${index==3? 'desktop:col-start-3' : ''}`}>
            <h2 className="font-heavy text-lg text-very_dark_blue">
                {title}
            </h2>
            <p>
                {desc}
            </p>
            <div className="flex justify-end mt-3">
                <Image src={icon} alt={icon_alt} width={45}/>
            </div>
        </div>
    )
}

export default Card;