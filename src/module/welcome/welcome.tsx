type Props = {}

export default function Welcome({ }: Props) {
    return (
        <div className="w-full mt-6 px-4 ">
            <div className="md:flex w-full p-4 items-center justify-between relative">
                <img src="/image/pancake.png" alt="" className="mt-[142px]" />
                <div className="flex flex-col items-center justify-center mt-[343px] text-center ml-[50px]">
                <p className="text-[#7EDAFF] font-bold text-[45px] leading-tight">
                    Добро пожаловать в <span className="text-[64px]">Fluffy!</span>
                </p>
                <p className="text-[#7EDAFF] font-bold text-[45px] leading-tight">
                    Вы когда-нибудь пробовали
                </p>
                <p className="text-[#7EDAFF] font-bold text-[45px] leading-tight">
                    десерт, который тает, как облако?
                </p> 
                </div>
            </div>
        </div>
    )
}