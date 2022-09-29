import bemCssModules from 'bem-css-modules';
import { default as ImageStyles } from "./Image.module.scss";

type ImageType = {
    imageSrc: string,
    imageAlt:string,
}

const style = bemCssModules(ImageStyles);

const Image = ({imageSrc, imageAlt }: ImageType) => {

    return <img className={style()} src={imageSrc} alt={imageAlt} />
}

export default Image