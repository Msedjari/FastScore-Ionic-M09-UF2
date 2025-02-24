<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>News</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Latest News</ion-title>
          </ion-toolbar>
        </ion-header>

        <div class="container mt-4">
          <div class="row">
            <div class="col-md-12">
              <div class="card-deck">
                <ion-item v-for="newsItem in newsItems" :key="newsItem.id" class="news-item card" @click="openNews(newsItem)">
                  <img :src="newsItem.image" alt="News Image" class="news-image" />
                  <div class="card-body">
                    <h5 class="news-title card-title">{{ newsItem.title }}</h5>
                    <p class="modal-date"><small class="text-muted">{{ selectedNews.date }}</small></p>
                  </div>
                </ion-item>
              </div>
            </div>
          </div>
        </div>

        <ion-modal v-if="selectedNews" @didDismiss="selectedNews = null" is-open="selectedNews !== null" class="custom-modal">
          <ion-header>
            <ion-toolbar>
              <ion-title>{{ selectedNews.title }}</ion-title>
              <ion-buttons slot="end">
                <ion-button @click="selectedNews = null" color="danger">Cerrar</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content class="modal-content">
            <img :src="selectedNews.image" alt="News Image" class="modal-image-large" />
            <p class="modal-text">{{ selectedNews.text }}</p>
            <p class="modal-date"><small class="text-muted">{{ selectedNews.date }}</small></p>
          </ion-content>
        </ion-modal>
      </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonModal } from '@ionic/vue';

const newsItems = ref([
    { id: 1, title: 'El Real Madrid alcanza los 54 puntos tras vencer al Girona', text: 'Con la victoria, el Real Madrid alcanzó los 54 puntos tras 25 partidos y rompió una racha de tres encuentros sin ganar, asegurando su persecución del título de LaLiga. El equipo de Ancelotti está empatado a puntos con el Barcelona, pero va por detrás por la diferencia de goles. El Atlético de Madrid es tercero con 53 puntos. El técnico italiano se mostró satisfecho con el rendimiento ante el Girona, a pesar de que no alcanzó el nivel exhibido en la victoria por 3-1 ante el Manchester City en la Liga de Campeones el pasado miércoles. "Suele ocurrir que cuando controlas bien un partido y no marcas más de 1-0, el empate es posible. Tuvieron la oportunidad de empatar en un contragolpe tras un saque de esquina. El segundo gol mató el partido. Se podía haber hecho antes, pero el equipo jugó bien. No era fácil repetir el compromiso del partido del miércoles, pero con este horario, me gustó la actitud. Aunque no estuviera al nivel del partido contra el City", dijo. El Real Madrid se enfrentará el miércoles a la Real Sociedad en la ida de las semifinales de la Copa del Rey, antes de visitar al Real Betis para disputar un partido de Liga el 1 de marzo.', image: 'image1.avif', date: '2025-02-23' },
    { id: 2, title: 'Guardiola confía en "un buen futuro" para el City pese a su crisis', text: 'El Manchester City está actualmente "lejos" del nivel del Liverpool, pero tiene "un buen futuro", estimó este domingo el entrenador del City, Pep Guardiola (54), después de la derrota por 0-2 sufrida en casa ante el líder de la Premier League. Los vigentes cuádruples campeones de Inglaterra son apenas cuartos en la actual edición y esta misma semana quedaron eliminados en el play-off de la Liga de Campeones europea, sin ni siquiera alcanzar los octavos de final. "Lo que hicimos las temporadas anteriores está bien, pero ahora estamos lejos de ellos", declaró Guardiola, preguntado por Sky Sports. Las bajas están siendo uno de los grandes problemas para el técnico catalán esta temporada. Este domingo faltaban por ejemplo el defensa John Stones y, sobre todo, el atacante Erling Haaland, además del lesionado de larga duración Rodri. "Incluso con el número de bajas que tenemos, hemos jugado muy bien", consideró. "Si hay que perder, hay que perder como hemos perdido hoy. He visto muchas cosas que muestran que este club tiene un buen futuro con los jugadores que tenemos", declaró. "A excepción de Kevin (De Bruyne) y quizás Nathan (Ake), todos los jugadores son muy, muy jóvenes. Hay un buen futuro para este club en los próximos años", insistió.', image: 'image2.avif', date: '2023-10-02' },
    { id: 3, title: 'El PSG se lleva los tres puntos del estadio del Lyon (2-3)', text: 'El París Saint-Germain se llevó los tres puntos del estadio del Lyon (2-3), este domingo 23 de febrero en el partido que bajó el telón de la 23ª jornada de la Ligue 1, para encadenar así una octava victoria seguida entre todas las competiciones y seguir invicto en liga. Sólido en el primer tiempo, los locales terminaron por ceder a la vuelta de vestuarios con los goles del lateral marroquí Achraf Hakimi (53\', 85\') y de Ousmane Dembélé (59), que marcó su 17º gol en el campeonato francés esta temporada. Los goles de Rayan Cherki (83) y Corentin Tolisso (90+2) resultaron a la postre estériles para un Lyon que pasará la semana en sexta posición.', image: 'image3.avif', date: '2025-02-23' },    
    { id: 4, title: 'El Bayern se impone al Eintracht (4-0)', text: 'El Bayern de Múnich se impuso en el Allianz Arena al Eintracht Fráncfort (4-0) este domingo en la 23ª jornada de la Bundesliga, lo que le permite conservar un confortable colchón al frente del campeonato alemán. A 11 jornadas para el final, los hombres de Vincent Kompany cuentan con ocho puntos de ventaja sobre el Bayer Leverkusen con una diferencia general de goles favorable (+50 por +24), que decantaría el título a su favor en caso de hipotético empate a puntos en la 34ª y última etapa. Los goles bávaros de este domingo fueron obra del francés Michael Olise (45+3), el japonés Hiroki Ito (61), y de los alemanes Jamal Musiala (83) y Serge Gnabry (90+2). El Bayern visitará el viernes al Stuttgart mientras que el Leverkusen también jugará fuera, en Fráncfort el sábado. Los dos equipos que pelean por la Bundesliga se volverán a ver las caras en el Allianz Arena el miércoles 5 de marzo en la ida de octavos de final de la Champions.', image: 'image4.avif', date: '2025-02-23' },
    { 
        id: 5, 
        title: 'La UEFA anuncia fechas y horarios de los octavos de final de la Champions League', 
        text: 'La UEFA ha dado a conocer pocas horas después del sorteo de los octavos de final de la Champions League las fechas y horarios de todos los partidos de esa eliminatoria, tanto en sus duelos de ida como de vuelta. Será el martes 4 de marzo a las 21 horas cuando el Bernabéu vuelva a abrir sus puertas para acoger su competición fetiche y recibir a su vecino y rival más encarnizado. Un problema para LaLiga, que ya había colocado el partido del Real Madrid contra el Real Betis para el domingo, y que lo ha tenido que modificar para cumplir con el descanso oportuno de los blancos. De este modo, ese choque se jugará el sábado 1 de marzo a las 18.30 horas. Y de paso, se ha programado el Barcelona-Real Sociedad para el domingo a las 16.15 horas. La vuelta en el Metropolitano, donde se decidirá qué equipo madrileño pasa a cuartos, está prevista el 12 de marzo a las 21 horas. Mientras, el miércoles 5 de marzo a esa misma hora, el Barcelona volverá a visitar el estadio Da Luz para medirse de nuevo, como ya hiciera en la fase Liga, al Benfica. Una semana después será el cuadro culé el que abra los encuentros de vuelta. En Montjuïc se celebrará el enfrentamiento entre culés y lisboetas a las 18:45 horas del día 11 de marzo.', 
        image: 'image5.avif', 
        date: '2025-02-23' 
    },
    { 
        id: 6, 
        title: 'FINAL | El Real Madrid aprueba el examen ante el Girona y vuelve a ser colíder', 
        text: `Real Madrid y Girona se han enfrentado en el Santiago Bernabéu con motivo de la jornada 25 de LaLiga EA Sports, un partido que era muy importante para ambos conjuntos y que has podido seguir al detalle en este artículo. 
        Sigue aquí el Real Madrid-Girona en directo con narración, comentarios y estadísticas. 
        Goles: 
        1-0, min. 41: Luka Modric. 
        2-0, min. 32: Vinicius Júnior. 
        Lee la crónica del partido en este enlace. 
        Datos estadísticos y curiosos, por Opta: 
        - Fede Valverde ha dado 10 asistencias en sus últimas dos temporadas en LaLiga con el Real Madrid (61 partidos), solo una menos que en sus 138 encuentros restantes para el conjunto blanco en la competición (11). 
        - Cristhian Stuani ha anotado siete goles en 16 partidos en LaLiga ante el Real Madrid, y solo ante el Getafe (ocho en 17 encuentros) ha marcado más en la competición. Desde su llegada al Girona, en la 2017/18, Luis Suárez (seis) es el único que ha anotado más goles ante los blancos en la máxima categoría. 
        - El Real Madrid ha sufrido tres expulsiones en 24 partidos en LaLiga 24/25, su cifra más alta a estas alturas de campaña en la competición desde la 2019/20 (un total de cuatro). 
        - El Girona ha perdido en cinco de sus últimas seis visitas a equipos de la Comunidad de Madrid en LaLiga (un triunfo), tantas derrotas como en sus primeros 14 encuentros a domicilio ante estos equipos en la máxima categoría (4V, 5E y 5D). 
        Alineaciones: 
        Real Madrid: Thibaut Courtois; Lucas Vázquez, Raúl Asencio, David Alaba, Ferland Mendy; Aurelien Tchouaméni, Luka Modric, Brahim Díaz; Rodrygo Goes, Kylian Mbappé, Vinícius Júnior. 
        Girona: Paulo Gazzaniga; Arnau Martínez, David López, Ladislav Krejčí, Daley Blind, Miguel Gutiérrez; Oriol Romeu, Iván Martín, Van de Beek; Viktor Tsygankov y Danjuma.`, 
        image: 'image6.avif', 
        date: '2025-02-23' 
    },
    { 
        id: 7, 
        title: 'El Liverpool se ha impuesto por 0-2 al Manchester City en la Premier League', 
        text: `El Liverpool se ha impuesto por 0-2 al Manchester City en la Premier League hundiendo más aún el proyecto de Pep Guardiola. Los cityzens, en una semana horrible, eliminados por el Real Madrid de la Champions, le sirven en bandeja de oro a los Reds el título de la Premier League. Salah, máximo goleador de la liga inglesa, y Szoboszlai, fueron los ejecutores de los Skyblues.
        
        Centro de datos del partido. La derrota del Arsenal ante el West Ham el sábado fue motivo de celebración en Merseyside, pero Arne Slot sabía que para sacar el máximo partido su equipo necesitaba ganar en un estadio donde sólo lo había hecho una vez en los últimos 15 intentos. Sin embargo, no era el mismo City de los últimos años, y el Etihad se convirtió en un pandemónium al cuarto de hora, cuando Dominik Szoboszlai envió un saque de esquina de Alexis Mac Allister al punto de penalti. Allí esperaba el mejor jugador de la Premier, Mohamed Salah, para rematar a la red con un poco de ayuda de Aké y poner el 0-1.
        
        Los locales, que no pudieron contar de nuevo con Haaland por una lesión de rodilla, reaccionaron bien llegando incluso a cantar el empate... pero tuvieron la mala suerte de que el remate de Omar Marmoush fuera anulado por fuera de juego tras un pase de Phil Foden. En cualquier caso, el Liverpool era demasiado fuerte y estaba preparado para defender y contragolpear, ejecutando esa táctica a la perfección para doblar su ventaja. Trent Alexander-Arnold cedió un balón a Salah, que se internó por la banda derecha hasta el área y cedió para Szoboszlai, que remató raso.
        
        Dos de las tres últimas veces que el City había ido perdiendo por 0-2 en el descanso en la Premier acabaron ganando por 4-2, pero aquí había pocos signos de ese tipo de resurgimiento. De hecho, el Liverpool vio cómo se le anulaba un gol de Curtis Jones por fuera de juego, antes de que Ederson tuviera que emplearse a fondo para despejar con la palma un disparo con efecto de Luis Díaz. El City no tenía suerte en el otro extremo, y cada pase y cada toque parecían escapársele a medida que la lluvia empezaba a arreciar.
        
        Sólo la afición de los Reds se hizo oír durante los 10 minutos finales, ya que su equipo no tuvo dificultades para conservar los tres puntos. Tras el 2-0 logrado en Anfield en diciembre, este resultado supone para el Liverpool su tercer doblete en la liga inglesa sobre el City, y le otorga su mayor ventaja hasta la fecha sobre el Arsenal, segundo.
        
        Los Reds tienen por delante la final de la Copa de la Liga y un duelo de la Liga de Campeones de la UEFA contra el París Saint-Germain, mientras que Pep Guardiola sólo puede aspirar a terminar entre los cuatro primeros y a participar en la Copa de Inglaterra.`, 
        image: 'image7.avif', 
        date: '2025-02-23' 
    },
]);

const selectedNews = ref(null);

function openNews(newsItem) {
    selectedNews.value = newsItem;
}
</script>

<style scoped>
.news-item {
    margin: 10px 0;
    transition: transform 0.2s;
    display: flex;
    align-items: center;
}

.news-item:hover {
    transform: scale(1.02);
}

.card {
    border: none;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.news-image {
    width: 500px; /* Adjust size as needed */
    height: auto;
    justify-content: left;
    border-radius: 10px;
}

.news-title {
    font-weight: bold;
    color: #cacaca; /* Changed to dark gray for better visibility */
    font-size: 1.5em;
    text-align: left;
    margin-left: 10px;
}
.news-date {
    font-size: 0.9em;
    color: #999;
    text-align: right;
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    justify-content: right;
}
.custom-modal {
    --background: #ffffff; /* White background for the modal */
    border-radius: 15px; /* Rounded corners */
    padding: 20px; /* Padding for the modal content */
}

.modal-image-large {
    width: 100%; /* Full width for modal */
    height: auto;
    border-radius: 10px; /* Rounded corners for the image */
}

.modal-text {
    padding: 10px;
    font-size: 1.1em; /* Increased font size for better readability */
    color: #e2dddd; /* Darker text color */
}

.modal-date {
    font-size: 0.9em;
    color: #999;
    text-align: right; /* Align date to the right */
}
</style>
