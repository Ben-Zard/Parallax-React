import { Parallax } from 'react-parallax';
import two from '../img/two.jpg'

const ImageTwo = () => (
    <Parallax className='image' blur={0} bgImage={two} strength={800} bgImageStyle={{minHeight:"100%"}}>
        <div className='content'>
            <span className="img-txt">Find love in Nature</span>
        </div>
    </Parallax>
);

export default ImageTwo