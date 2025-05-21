import Guest from "../module/profile/guest"
import History from "../module/profile/history"


type Props = {}

export default function Profile({}: Props) {
  return (
    <div className="max-w-[1543px] m-auto ">
      <Guest />
      <History />
    </div>
  )
}