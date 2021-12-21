import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Button from "../../../../UI/Button/Button";
import Container from "../../../../UI/Container/Container";
import classes from "./Contact.module.css";

const Contact = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD3OIlPJWAwZlqov8IpAKSTHdbRq0rBkbU",
  });

  return (
    <div className={classes.contact}>
      <Container>
        <div>
          <h3>Contato</h3>
          <p>
            Caso queira entrar em contato conosco, acesse o link abaixo ou
            navegue até a página de contato.
          </p>
          <div>
            <Button path="/contato" bgColor="#da291c" color="white">
              Entre em contato
            </Button>
          </div>
        </div>
        <div>
          <h3>Onde estamos?</h3>
          {isLoaded && (
            <GoogleMap
              mapContainerClassName={classes.map}
              center={{
                lat: -23.5069202,
                lng: -46.6685639,
              }}
              zoom={15}
            >
              <Marker
                position={{
                  lat: -23.5069202,
                  lng: -46.6685639,
                }}
              />
            </GoogleMap>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Contact;
