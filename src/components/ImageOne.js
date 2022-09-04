import { Parallax } from 'react-parallax';
import one from '../img/one.jpg'
const ImageOne = () => (
    <Parallax className='image' blur={0} bgImage={one} strength={600} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">Find love in Nature</span>
        </div>
    </Parallax>
);

export default ImageOne