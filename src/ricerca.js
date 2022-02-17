import React, {useState} from "react";
import meteo from './meteo';
import nuvoloso from './img/nuvoloso1.png';
import nubisparse from './img/nubi-sparse1.gif';
import sole from './img/sole1.gif';
import pioggia from './img/pioggia1.gif';
import termometro from './img/termometro.png'
import Citta from "./citta";



const Ricerca = () => {

const [gradi1, setGradi1] = useState("");
const [giorno1, setGiorno1] = useState("");
const [nome1, setNome1] = useState("");
const [img1, setImg1] = useState("");
const [img21, setImg21] = useState("");

const [gradi2, setGradi2] = useState("");
const [giorno2, setGiorno2] = useState("");
const [nome2, setNome2] = useState("");
const [img2, setImg2] = useState("");
const [img22, setImg22] = useState("");

const [gradi3, setGradi3] = useState("");
const [giorno3, setGiorno3] = useState("");
const [nome3, setNome3] = useState("");
const [img3, setImg3] = useState("");
const [img23, setImg23] = useState("");


const search2 = () => {
  console.log('Inizio search');
  let apiKey = '20f5958910e09812a97911d595ec0c3b';
  let x = document.getElementById('city').value;
  let requestUrl ='https://api.openweathermap.org/data/2.5/forecast?q='+x+'&appid='+apiKey;
  var weather1;
  var weather2;
  var weather3;
  var temp1;
  var temp2;
  var temp3;


  var request = new XMLHttpRequest();
  request.open('GET', requestUrl, true);
  request.onload = function(){
      var data = JSON.parse(this.response);

      //Salvo meteo per il giorno 1-2-3
      weather1 = data.list[0].weather[0].description;
      weather2 = data.list[8].weather[0].description;
      weather3 = data.list[16].weather[0].description;

      //Salvo temperatura per il giorno 1-2-3
      temp1 = data.list[0].main.temp;
      temp1 = parseInt(temp1)-273;
      temp1 = data.list[0].main.temp;
      temp1 = parseInt(temp1)-273;
      temp1 = data.list[0].main.temp;
      temp1 = parseInt(temp1)-273;

      temp2 = data.list[0].main.temp;
      temp2 = parseInt(temp2)-273;
      temp2 = data.list[0].main.temp;
      temp2 = parseInt(temp2)-273;
      temp2 = data.list[0].main.temp;
      temp2 = parseInt(temp2)-273;

      temp3 = data.list[0].main.temp;
      temp3 = parseInt(temp3)-273;
      temp3 = data.list[0].main.temp;
      temp3 = parseInt(temp3)-273;
      temp3 = data.list[0].main.temp;
      temp3 = parseInt(temp3)-273;
 
      //Ricavo la data
      //Giorno 1
      var dataeora1 = data.list[0].dt_txt;
      var datacompleta1 = dataeora1.split(' ');
      var mesegiorno1 = datacompleta1[0].split('-');

      mesegiorno1[0] = parseInt(mesegiorno1[0]);
      mesegiorno1[1] = parseInt(mesegiorno1[1]);
      mesegiorno1[2] = parseInt(mesegiorno1[2]);

      //Giorno 2
      var dataeora2 = data.list[8].dt_txt;
      var datacompleta2 = dataeora2.split(' ');
      var mesegiorno2 = datacompleta2[0].split('-');

      mesegiorno2[0] = parseInt(mesegiorno2[0]);
      mesegiorno2[1] = parseInt(mesegiorno2[1]);
      mesegiorno2[2] = parseInt(mesegiorno2[2]);

      //Giorno 3
      var dataeora3 = data.list[16].dt_txt;
      var datacompleta3 = dataeora3.split(' ');
      var mesegiorno3 = datacompleta3[0].split('-');

      mesegiorno3[0] = parseInt(mesegiorno3[0]);
      mesegiorno3[1] = parseInt(mesegiorno3[1]);
      mesegiorno3[2] = parseInt(mesegiorno3[2]);

      //Ricavo il mese del tempo meteorologico
      //Mese 1
          var month1;
          switch (mesegiorno1[1]){
              case 1:
                  month1="Gennaio";
                  break;
              case 2:
                  month1="Febbraio";
                  break;
              case 3:
                  month1="Marzo";
                  break;
              case 4:
                  month1="Aprile";
                  break;
              case 5:
                  month1="Maggio";
                  break;
              case 6:
                  month1="Giugno";
                  break;
              case 7:
                  month1="Luglio";
                  break;
              case 8:
                  month1="Agosto";
                  break;
              case 9:
                  month1="Settembre";
                  break;
              case 10:
                  month1="Ottobe";
                  break;
              case 11:
                  month1="Novembre";
                  break;
              case 12:
                  month1="Dicembre";
                  break;
              default:
                  month1="";
              }

      //Mese 2
      var month2;
      switch (mesegiorno2[1]) {
          case 1:
              month2 = "Gennaio";
              break;
          case 2:
              month2 = "Febbraio";
              break;
          case 3:
              month2 = "Marzo";
              break;
          case 4:
              month2 = "Aprile";
              break;
          case 5:
              month2 = "Maggio";
              break;
          case 6:
              month2 = "Giugno";
              break;
          case 7:
              month2 = "Luglio";
              break;
          case 8:
              month2 = "Agosto";
              break;
          case 9:
              month2 = "Settembre";
              break;
          case 10:
              month2 = "Ottobe";
              break;
          case 11:
              month2 = "Novembre";
              break;
          case 12:
              month2 = "Dicembre";
              break;
          default:
              month2 = "";
      }

      //Mese 3
      var month3;
      switch (mesegiorno3[1]) {
          case 1:
              month3 = "Gennaio";
              break;
          case 2:
              month3 = "Febbraio";
              break;
          case 3:
              month3 = "Marzo";
              break;
          case 4:
              month3 = "Aprile";
              break;
          case 5:
              month3 = "Maggio";
              break;
          case 6:
              month3 = "Giugno";
              break;
          case 7:
              month3 = "Luglio";
              break;
          case 8:
              month3 = "Agosto";
              break;
          case 9:
              month3 = "Settembre";
              break;
          case 10:
              month3 = "Ottobe";
              break;
          case 11:
              month3 = "Novembre";
              break;
          case 12:
              month3 = "Dicembre";
              break;
          default:
              month3 = "";
      }

          //Ricavo le immagini del tempo meteorologico
          //Giorno 1
          var im1;
          var im2;
          var im3;
          switch (weather1){
              case ('scattered clouds'):
                  im1=nubisparse;
                  break;
              case ('clear sky'):
                  im1=sole;
                  break;
              case ('broken clouds'):
                  im1=pioggia;
                  
                  break;
              case ('overcast clouds'):
                  im1=nuvoloso;
                  
                  break;
              case ('mist'):
                  im1=nubisparse;
                      
                  break;
              case ('few clouds'):
                  im1=nubisparse;          
                  break;
              case ('light rain'):
                  im1 = pioggia;
                  break;
              default:
                  im1 = "";
              }

          //Giorno 2
          switch (weather2){
              case ('scattered clouds'):
                  im2=nubisparse;
                  break;
              case ('clear sky'):
                  im2=sole;
                  break;
              case ('broken clouds'):
                  im2=pioggia; 
                  break;
              case ('overcast clouds'):
                  im2=nuvoloso;
                  break;
              case ('mist'):
                  im2=nubisparse;    
                  break;
              case ('few clouds'):
                  im2=nubisparse;            
                  break;
              case ('light rain'):
                  im2 = pioggia;
                  break;
              default:
                  im2= "";
              }

          //Giorno 3
          switch (weather3){
              case ('scattered clouds'):
                  im3=nubisparse;
                  break;
              case ('clear sky'):
                  im3=sole;
                  break;
              case ('broken clouds'):
                  im3=pioggia; 
                  break;
              case ('overcast clouds'):
                  im3=nuvoloso;
                  break;
              case ('mist'):
                  im3=nubisparse;    
                  break;
              case ('few clouds'):
                  im3=nubisparse;            
                  break;
              case ('light rain'):
                  im3 = pioggia;
                  break;
              default:
                  im3 = "";
              }

      console.log('tempi1: '+temp1);
      meteo[0].id=0;
      meteo[0].gradi=temp1+'°';
      meteo[0].giorno=mesegiorno1[2]+' '+month1;
      meteo[0].nome=x;
      meteo[0].img=im1;
      meteo[0].img2=termometro; 
      console.log('Meteo gradi: '+meteo[0].gradi);
      meteo[1].id=1;
      meteo[1].gradi=temp2+'°';
      meteo[1].giorno=mesegiorno2[2]+' '+month2;
      meteo[1].nome=x;
      meteo[1].img=im2;
      meteo[1].img2=termometro; 

      meteo[2].id=2;
      meteo[2].gradi=temp3+'°';
      meteo[2].giorno=mesegiorno3[2]+' '+month3;
      meteo[2].nome=x;
      meteo[2].img=im3;
      meteo[2].img2=termometro; 

      //Aggiornamento
  //Giorno 1
  var gradi1 = meteo[0].gradi;
  var giorno1 = meteo[0].giorno;
  var nome1 = meteo[0].nome;
  var img1 = meteo[0].img;
  var img21 = meteo[0].img2;

  setGradi1(gradi1);
  setGiorno1(giorno1);
  setNome1(nome1);
  setImg1(img1);
  setImg21(img21);
  console.log('gradi1: '+gradi1);
  //Giorno 2
  var gradi2 = meteo[1].gradi;
  var giorno2 = meteo[1].giorno;
  var nome2 = meteo[1].nome;
  var img2 = meteo[1].img;
  var img22 = meteo[1].img2;

  setGradi2(gradi2);
  setGiorno2(giorno2);
  setNome2(nome2);
  setImg2(img2);
  setImg22(img22);

  //Giorno 3
  var gradi3 = meteo[2].gradi;
  var giorno3 = meteo[2].giorno;
  var nome3 = meteo[2].nome;
  var img3 = meteo[2].img;
  var img23 = meteo[2].img2;

  setGradi3(gradi3);
  setGiorno3(giorno3);
  setNome3(nome3);
  setImg3(img3);
  setImg23(img23);
  }
  request.send();
  


};
const key = (event) =>{
  if (event.key === 'Enter') 
    document.getElementById('btnsearch').click(); 
  }


  return <>
    <div id='mainbdy'>
              <input type='text' id='city' placeholder='inserire una città'  onKeyPress={key}/>
              <button type='button' className='btn btn-primary' id='btnsearch' onClick={search2} >Cerca</button>
    </div>;
    <div id="meteogiorni">
      <Citta nome={nome1} giorno={giorno1} img={img1} gradi={gradi1} img2={img21} />
      <Citta nome={nome2} giorno={giorno2} img={img2} gradi={gradi2} img2={img22} />
      <Citta nome={nome3} giorno={giorno3} img={img3} gradi={gradi3} img2={img23} />
    </div>
    
  </>
};

export default Ricerca;
