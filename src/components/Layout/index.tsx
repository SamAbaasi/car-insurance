import { FC, ReactElement } from "react";
import Car from '../../assets/icons/car-green.svg'
import Navbar from "../Navbar";
import './layout.css'
interface Props {
    children: ReactElement
}
const Layout: FC<Props> = ({children}) => {
  return (
    <div className="layout">
        <Navbar />
        <div className="children">
            {children}
        </div>
        <img src={Car} alt='car' className='car' id="animation-car" />
        <div className='surface'></div>
    </div>
  )
}
export default Layout;
