import bemCssModules from 'bem-css-modules';
import { default as ImageStyles } from "./Image.module.scss";

type ImageType = {
    imageSrc: string,
    imageAlt:string,
}

const style = bemCssModules(ImageStyles);

const Image = ({imageSrc, imageAlt }: ImageType) => {

    return(
    <div className={style()}>
        <img className={style('image')} src={imageSrc} alt={imageAlt} />
    </div>
    
)
}

export default Image