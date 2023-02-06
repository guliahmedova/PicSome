import { useContext } from "react";
import Image from "../components/Image"
import { Context } from "../Context";
import { getClass } from "../utils/index.js";

function Photos() {

    const { allPhotos } = useContext(Context);

    const imageElement = allPhotos.map((img, index) => (
        <Image key={img.id} img={img} index={getClass(index)} />
    ))

    return (
        <main className="row">
            {imageElement}
        </main>
    )
}

export default Photos   