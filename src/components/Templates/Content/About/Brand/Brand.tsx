import Container from "../../../../UI/Container/Container";
import classes from "./Brand.module.css";

import acidityBitter from "../../../../../images/acidez-e-amargo.png";
import candy from "../../../../../images/doce.png";
import kokumi from "../../../../../images/kokumi.png";
import flavour from "../../../../../images/sabores.png";
import salt from "../../../../../images/salgado.png";
import umami from "../../../../../images/umami.png";
import BrandInd from "./BrandInd/BrandInd";

const SixthFlavour = () => {
  return (
    <div className={classes.sixthFlavour}>
      <h3>Um sexto sabor</h3>
      <div>
        <p>
          O kokumi vem sendo pesquisado no Japão desde os anos 80; acredita-se
          que o sabor ocorra naturalmente no alho, cebola e vieiras. Ele seria
          causado por um grupo de compostos químicos chamados peptídeos
          gama-glutamil. O kokumi é ainda mais difícil de descrever que o umami:
          com ele, a comida parece ser mais substanciosa, e satisfazer o
          apetite. E por isso, ele pode dar mais sabor a alimentos com pouca
          gordura. Em um estudo no periódico Flavour, o cientista Motonaka
          Kuroda e seus colegas testaram substâncias que teriam sabor kokumi, e
          os resultados foram animadores. Ou seja, ao acrescentar a substância
          do kokumi, alimentos com baixo teor de gordura podem ficar mais
          palatáveis. É algo semelhante ao umami: o glutamato monossódico é
          acrescentado a alimentos com baixo teor de sal para deixá-los mais
          gostosos.
        </p>
        <div>
          <BrandInd
            srcImage={flavour}
            altText="primeiro S da logo (representa sabores)"
            text="abores"
          />
          <BrandInd
            srcImage={kokumi}
            altText="K da logo (representa kokumi)"
            text="okumi"
          />
          <BrandInd
            srcImage={acidityBitter}
            altText="primeiro A da logo (representa ácidez)"
            text="cidez"
          />
          <BrandInd
            srcImage={umami}
            altText="U da logo (representa umami)"
            text="mami"
          />
          <BrandInd
            srcImage={candy}
            altText="D da logo (representa doce)"
            text="oce"
          />
          <BrandInd
            srcImage={acidityBitter}
            altText="segundo A da logo (representa amargo)"
            text="margo"
          />
          <BrandInd
            srcImage={salt}
            altText="segundo S da logo (representa salgado)"
            text="algado"
          />
        </div>
      </div>
    </div>
  );
};

export default SixthFlavour;
