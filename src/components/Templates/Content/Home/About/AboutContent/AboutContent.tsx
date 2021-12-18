import { FC } from "react";
import classes from "./AboutContent.module.css";

import SkaudasLogo from "../../../../../../images/skaudas-logo.svg";
import Button from "../../../../../UI/Button/Button";

const AboutContent: FC<{ about?: boolean }> = ({ about }) => {
  return (
    <div className={classes.aboutContent}>
      <div>
        <p>
          Existem quatro sabores básicos que nosso paladar pode sentir: doce,
          salgado, azedo e amargo. Mas estudos apontaram mais dois sabores,
          sendo identificado o quinto sabor em 1908 por um químico japonês, e só
          foi reconhecido oficialmente na década de 80. Nesse meio tempo, muitos
          pesquisadores estavam bastante céticos de que a língua pudesse
          detectar algo além do doce, salgado, amargo e azedo, mas eles estavam
          errados. O umami é o quinto sabor detectado por receptores que estão
          localizados na língua. Ele está presente em tomates, queijo parmesão,
          shoyu e cogumelos shiitake na forma de gltamato monossódico; este sal
          também é vendido pela Ajinomoto desde 1909. Alguns cientistas esperam
          que a história se repita com o sexto sabor kokumi.
        </p>
        <img src={SkaudasLogo} alt="Logo da Skaudas" />
      </div>
      {!about && (
        <div>
          <Button bgColor="#da291c" color="white" path="/sobre">
            Saiba mais
          </Button>
        </div>
      )}
    </div>
  );
};

AboutContent.defaultProps = {
  about: false,
};

export default AboutContent;
