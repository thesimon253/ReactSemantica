import { useState } from 'react'
import Corea from "../assets/corea.jpg"
import EAU from "../assets/eau.jpg"
import Japon from "../assets/japon.jpg"
import Tailandia from "../assets/tailandia.jpg"
import China from "../assets/china.jpg"
import Vietnam from "../assets/vietnam.jpg"
import '../css/Article.css'

function Article(){
  return (
    <>
  <main>
        <h1><b>Los 6 países más bellos del continente asiático.</b></h1>
        <section id="cuerpo">
            <article id="artcorea">
                <h2>1. Corea del Sur</h2>
                <figure>
                    <img src={Corea} alt="corea"/>
                </figure>
                <figcaption><i>Imagen 1: Torre Namsan, Seúl, Corea del Sur</i></figcaption>

                <p>Es uno de los países mas
                    populares de todo el continente asiático
                    y del mundo, debido a sus hermosos lugares
                    turísticos, además de su reconocida cultura
                    K-Pop, y sus bellos paisajes.
                    Es considerado uno de los países tecnológicamente más avanzados del mundo, con gran parte de su
                    economía focalizada en la vanguardia del desarrollo tecnológico. Aproximadamente la mitad de la
                    población del país vive en la capital, Seúl, o en su zona metropolitana.
                    La cultura coreana es rica, diversa y fascinante, con una historia que se remonta a miles de años.
                    Con una mezcla de tradiciones arraigadas y una influencia moderna, la cultura coreana ha cautivado a
                    personas de todo el mundo. Se destaca por su énfasis en el respeto, los valores familiares y la
                    jerarquía social.
                </p>
                <h3><b>Perspectiva en 4K:</b></h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/lrji-onh7fk?si=gBpjQoyub9tT-xvk"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </article>

            <article id="arteau">
                <h2>2. Emiratos Árabes Unidos</h2>
                <figure>
                    <img src={EAU} alt="eau"/>
                </figure>
                <figcaption><i>Imagen 2: BURJ Khalifa, Dubái, Emiratos Árabes Unidos</i></figcaption>
                <p> Es uno de los países mas icónicos del continente asiático
                    y de la región del Medio Oriente, famoso por lugares como el
                    BURJ Khalifa, el rascacielos más alto del mundo, localizado
                    en la ciudad de Dubái, junto con algunos otros lugares turísticos
                    en Abu Dhabi, su capital. Los Emiratos Árabes Unidos (E.A.U.) tienen una sociedad diversa y
                    pluricultural.1​ El acervo cultural homogéneo del país ha sido enriquecido y modificado en una
                    pequeña escala con la llegada de otros grupos étnicos y nacionales, primero por los iraníes a
                    inicios de la década de 1900 y más tarde por los hindúes y pakistaníes en la década de 1960.
                </p>
                <h3 class="subtitle"><b>Perspectiva en 4K:</b></h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/IdejM6wCkxA?si=EGpwAiQHsNCsKyEL"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </article>
            <article id="artjapon">
                <h2>3. Japón</h2>
                <figure>
                    <img src={Japon} alt="japon"/>
                </figure>
                <figcaption><i>Imagen 3: Pagoda Chureito, Monte Fuji, Japón.</i></figcaption>
                <p> Es uno de los países reconocidos a nivel mundial,
                    gracias a su diversa cultura y grandes templos,y otros
                    lugares turísticos e icónicos tales como el Monte Fuji,
                    la Pagoda Chureito, la torre de Tokio, etc...
                    La cultura de Japón, fuertemente influenciada por China en sus orígenes, tiene más de 2600 años de
                    antigüedad, y se caracteriza por tener una lengua propia, además de religiones y tradiciones
                    específicas, pero combinadas en un complejo proceso de sincretismo sucedido a lo largo de los
                    siglos.
                </p>
                <h3><b>Perspectiva en 4K:</b></h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/D48T0wNm96w?si=N6ogiRGLGZParGDi"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </article>
            <article id="arttailandia">
                <h2>4. Tailandia</h2>
                <figure>
                    <img src={Tailandia} alt="tailandia"/>
                </figure>
                <figcaption><i>Imagen 4: Playa Koh Phi Phi Leh, Isla Koh Phi Phi, Tailandia.</i></figcaption>
                <p>
                    Es un país que refleja las maravillas de la naturaleza,
                    resaltando las maravillas de la naturaleza, mediante
                    las mejores playas del sudeste asiático y también mediante
                    los lugares turísticos de su capital, Bangkok.
                    La cultura tailandesa tradicional se basa en la familia, en el respeto, la cooperación, y la ayuda
                    al prójimo. Si pasas el suficiente tiempo en Tailandia como para observarlo, verás como cuando
                    alguien tiene un problema, todos los que se encuentren alrededor se acercarán corriendo para ayudar.
                </p>
                <h3><b>Perspectiva en 4K:</b></h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/XnE_IG_aEsI?si=sdhGWVUGsEHPrMPb"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </article>
            <article id="artchina">
                <h2>5. China</h2>
                <figure>
                    <img src={China} alt="china"/>
                </figure>
                <figcaption><i>Imagen 5: Gran Muralla China, China</i></figcaption>
                <p>
                    Es uno de los países con una de las culturas
                    más antiguas de la historia, teniendo como ícono,
                    monumentos como La Gran Muralla, y lugares turísticos
                    famosos en sus ciudades más metropolitanas, tales
                    como Beijing o Pekin (Su capital), Shanghai, entre otros.
                    La cultura china fue a menudo de las más avanzadas del mundo antiguo, especialmente en el ámbito de
                    la tecnología y la innovación. Desde sus inicios fue una cultura inmensamente diversa, ya que cada
                    uno de los 58 pueblos que componían la nación albergaba una gastronomía, una lengua y unos ritos
                    particulares.
                </p>
                
                <h3 class="subtitle"><b>Perspectiva en 4K:</b></h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/AaBFLTX61Qg?si=CWgjLhIcLQMUcNS1"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </article>
            <article id="artvietnam">
                <h2>6. Vietnam</h2>
                <figure>
                    <img src={Vietnam} alt="vietnam"/>
                </figure>
                <figcaption><i>Imagen 6: Parque de las Manos, Da Nang, Vietnam.</i></figcaption>
                <p>
                    Es uno de los países más visitados del sudeste
                   asiático, junto con Tailandia, posee grandes paisajes
                    y lugares turísticos muy agradables para visitar,
                    tanto en Hanói, su capital, y en otras ciudades
                    metropolitanas, tales como Ho Chi Minh, entre otras.
                    La sociedad vietnamita es aun muy rural y familiar, dándole gran importancia a los valores
                    tradicionales y también al respeto a la familia y al amor y dedicación para los más pequeños.
                    Además, aunque fue la generación de los mayores la que vivió los horrores de la famosa Guerra de
                    Vietnam, este factor ha marcado (y lo sigue haciendo a día de hoy) el carácter de los vietnamitas,
                    que están orgullosos de ser un país que lucho y ganó a todas las potencias militares contra las que
                    se enfrentaba (franceses, americanos y chinos). Por otro lado, Vietnam también es un país joven con
                    ganas de vivir y adaptar-se a nuevos cambios sociales. Dando gran importancia a la educación y
                    creando grandes profesionales universitarios, cosa que hace que el país y la sociedad año tras año
                    se vaya modernizando.
                </p>
                <h3 class="subtitle"><b>Perspectiva en 4K:</b></h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/MbXLt7OwEXI?si=zsY3gjzRhitT-v98" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </article>

        </section>
    </main>
  
  </>
  )
}

export default Article