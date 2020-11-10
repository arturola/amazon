import { Link } from "react-router-dom";
import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <Link to="https://www.amazon.es/music/unlimited?ref_=nav_swm_dmm_gw_es_regular_0722">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Amazon Banner"
        />
      </Link>
      <div className="home__row">
        <Product
          id="12346"
          title="Qazi Watch: If you want to measure the time you need to become a master programmer!"
          price={89.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />

        <Product
          id="12345"
          title="Altavoz inteligente Google Nest Mini 2ª Generación Carbón
          GOOGLE. MODELO: GA00781-ESa"
          price={99.99}
          rating={5}
          image="https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201910/17/00128645802621____1__640x640.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123410"
          title="iPad: Tu próximo ordenador no es un ordenador."
          price={478.2}
          rating={5}
          image="https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202003/23/00115217008125____1__640x640.jpg"
        />
        <Product
          id="12345"
          title="Echo Plus (2.ª generación) - Sonido de alta calidad y controlador de Hogar digital integrado, tela de color antracita"
          price={189.99}
          rating={4}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />

        <Product
          id="12345"
          title="Rasera MasterChef: Conviertete en el auténtico cocinillas de tu casa!"
          price={18.99}
          rating={5}
          image="https://cdn.shopify.com/s/files/1/0191/9978/products/espatula-rasera-acero-inox-wmf_16de42d5-287b-4b14-b084-52ab9d5643cf.jpg?v=1595873580"
        />
      </div>
      <div className="home__row">
        <Product
          id="123409"
          title='LG Monitor: Monitor PC 73,66 cm (29") LG 29WK600-W Full HD IPS LED Ultrapanorámico'
          price={215}
          rating={5}
          image="https://www.worten.es/i/409068b2bc34cd8b742441c8ffd45379c2cb2125.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
