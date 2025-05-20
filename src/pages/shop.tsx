import ShopHeader from "../module/shop_components/header/header"
import About from "../module/shop_components/about/about"
import Menu from "../module/shop_components/menu/menu"
import Chessee from "../module/shop_components/cheasecake/chessee"

type Props = {}

export default function ShopPage({}: Props) {
  return (
    <div className="w-full  m-auto">
      <ShopHeader />
      <About/>
      <Menu/>
      <Chessee/>
    </div>
  )
} 