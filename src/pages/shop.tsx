import ShopHeader from "../module/shop_components/header/header"
import About from "../module/shop_components/about/about"
import Menu from "../module/shop_components/menu/menu"

type Props = {}

export default function ShopPage({}: Props) {
  return (
    <div className="w-full max-w-[1543px] m-auto">
      <ShopHeader />
      <About/>
      <Menu/>
    </div>
  )
} 