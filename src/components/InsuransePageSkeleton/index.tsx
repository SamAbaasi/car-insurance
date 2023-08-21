import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import './insuransePageSkeleton.scss'
import { FC } from "react";
interface Props {
    count?: number;
    lastStep?: boolean;
}
const InsuransePageSkeleton: FC<Props> = ({count, lastStep}) => {
    return (
        <div className="InsuransePageSkeleton">
                {Array(count).fill(0).map((_,i) => (
                    <Skeleton height={30} key={i} style={{width: '100%', marginBottom: '10px'}}  />
                ))}
                <div className={`InsuransePageSkeleton__buttons ${lastStep && 'InsuransePageSkeleton__buttons--last'}`}>
                    <Skeleton height={30} width={120} borderRadius={15}/>
                    {!lastStep && <Skeleton height={30} width={120} borderRadius={15}/>}
                </div>
        </div>
    )
}
export default InsuransePageSkeleton;