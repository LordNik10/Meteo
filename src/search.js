import nuvoloso from './img/nuvoloso.png';
import nubisparse from './img/nubi-sparse1.gif';
import sole from './img/sole1.gif';
import pioggia from './img/pioggia1.gif';
import termometro from './img/termometro.png'

const search = () =>{
    let apiKey = '20f5958910e09812a97911d595ec0c3b'
        let x = document.getElementById('city').value;
        let requestUrl ='http://api.openweathermap.org/data/2.5/weather?q='+x+'&appid='+apiKey;

        var request = new XMLHttpRequest();
        request.open('GET', requestUrl, true);
        request.onload = function(){
            var data = JSON.parse(this.response);
            var temperatura = data.main.temp;
            temperatura = parseInt(temperatura)-273;
            document.getElementById('citybdy').textContent=document.getElementById('city').value;
            var clima = data.weather[0].description;
            var im = document.getElementById('img1');
            switch (clima){
                case ('scattered clouds'):
                    im.src=nubisparse;
                    break;
                case ('clear sky'):
                    im.src=sole;
                    break;
                case ('broken clouds'):
                    im.src=pioggia;
                    
                    break;
                case ('overcast clouds'):
                    im.src=nuvoloso;
                    
                    break;
                case ('mist'):
                    im.src=nubisparse;
                        
                    break;
                case ('few clouds'):
                    im.src=nubisparse;
                            
                    break;
            }
            var lb = document.getElementById('lb1');
            lb.textContent=temperatura+'°';
            document.getElementById('img2').src=termometro;
            var today = new Date();
            var day = today.getDate();
            var month = today.getMonth();
            switch (month){
                case 0:
                    month="Gennaio";
                    break;
                case 1:
                    month="Febbraio";
                    break;
                case 2:
                    month="Marzo";
                    break;
                case 3:
                    month="Aprile";
                    break;
                case 4:
                    month="Maggio";
                    break;
                case 5:
                    month="Giugno";
                    break;
                case 6:
                    month="Luglio";
                    break;
                case 7:
                    month="Agosto";
                    break;
                case 8:
                    month="Settembre";
                    break;
                case 9:
                    month="Ottobe";
                    break;
                case 10:
                    month="Novembre";
                    break;
                case 11:
                    month="Dicembre";
                    break;
                }

            document.getElementById('date').textContent=day+' '+month;
        }
        request.send(); 

        let requestUrl2 ='http://api.openweathermap.org/data/2.5/forecast?q='+x+'&appid='+apiKey;
        var request2 = new XMLHttpRequest();
        request2.open('GET', requestUrl2, true);
        request2.onload = function(){
            var data2 = JSON.parse(this.response);
            console.log(data2);
        }
        request2.send(); 

        //+8

}

export default search;