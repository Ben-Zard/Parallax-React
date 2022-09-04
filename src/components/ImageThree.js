import { Parallax } from 'react-parallax';
import three from '../img/three.jpg'
const ImageThree = () => (
    <Parallax className='image' blur={0} bgImage={three} strength={900} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">Find love in Nature</span>
        </div>
    </Parallax>
);

export default ImageThree