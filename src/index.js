import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, compose} from "redux";
import reducer from "./reducers"
import App from '../src/routes/App';

const initialState = {
    "productSearch":[],
    "contacts":[
      {
        "id": "223c2323ucd",
        "name": "José Martín Serna Valdeolivar",
        "profession": "Software Enginner",
        "number": 3141435050,
        "img":"data:image/jpeg;base64,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",
        "instagram": "none"
      },
      {
        "id": "caeuq8q8823v283",
        "name": "Martín Serna Díaz",
        "profession": "Student",
        "number": 3143386885,
        "img":"https://instagram.fgdl5-2.fna.fbcdn.net/v/t51.2885-19/s150x150/163199942_186329019738131_7797190304723991424_n.jpg?tp=1&_nc_ht=instagram.fgdl5-2.fna.fbcdn.net&_nc_ohc=InmcqaQMnTMAX8tEeeG&edm=ABfd0MgAAAAA&ccb=7-4&oh=50d242d8334564c0faf08996a9340331&oe=60A31D33&_nc_sid=7bff83",
        "instagram": "https://www.instagram.com/mserna10/?hl=es-la"
      }
    ],
    "items":[
      {
        "id": "12asd323124242sad4242423fdfasd4425657",
        "title": "¿Donde nos encontramos?",
        "img":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2850497721156!2d-104.31763598562353!3d19.051200857703396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8424d509f90cb583%3A0x84426d814f53a2fe!2sCiber%20Aeromax%20computadoras!5e0!3m2!1ses!2smx!4v1618252227662!5m2!1ses!2smx",
        "buttonTitle": "Ir a Google Maps",
        "direction": "https://www.google.com.mx/maps/place/Ciber+Aeromax+computadoras/@19.0512009,-104.317636,17z/data=!3m1!4b1!4m5!3m4!1s0x8424d509f90cb583:0x84426d814f53a2fe!8m2!3d19.0511958!4d-104.3154473"
      },
      {
        "id":"Wfd72asd323124242sad4242423fdfasd4425657",
        "title": "Producto del día",
        "img":"https://image.freepik.com/vector-gratis/banner-promocion-2x1_52683-50845.jpg",
        "buttonTitle": "Ir a verlo",
        "direction": "/Catalogo",
      },
    ],
    "memorys":[
      {
        "id": "1MADS2asd32312ad4242423fdfasd44asa25657",
        "name": "Memoria 16gb sandisk",
        "price": 80,
        "type": "MEMORIAS",
        "img": "https://www.radioshack.com.mx/medias/67221.gif-1200ftw?context=bWFzdGVyfHJvb3R8MTI2NTg0fGltYWdlL2dpZnxoOGUvaGQ3Lzg3OTY1OTMyMjU3NTguZ2lmfDQzYWQ2ODk2NDc0ODBmYzU3NWMwNTYzNDQ4MThhMjdhNGY1MGFhMjI0NzZkMjMwYjJiYmE1YmNkMjM1MDg3YzE",
        "pieces": 13
      },
      {
        "id": "POASMADS2asd32312ad4242423fdfasd44asa25657",
        "name": "Memoria 32gb sandisk",
        "type":"MEMORIAS",
        "price": 125,
        "img": "https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/619659171797.jpg",
        "pieces": 15
      },
      {
        "id": "Pmas2132193Nkasksdm",
        "name": "Memoria 64gb sandisk",
        "type":"MEMORIAS",
        "price": 200,
        "img": "https://resources.claroshop.com/medios-plazavip/mkt/5fcaa1b93026f_sandisk-negrajpg.jpg",
        "pieces": 8
      },
      {
        "id": "poqs28312saSadd",
        "name": "Memoria 128gb sandisk",
        "type":"MEMORIAS",
        "price": 300,
        "img": "https://images-na.ssl-images-amazon.com/images/I/91Ny9ZobhhL._AC_SY741_.jpg",
        "pieces": 8
      },
      {
        "id": "Dasl231231290masdlasdk2",
        "name": "Memoria 16gb sandisk",
        "price": 80,
        "type": "MEMORIAS",
        "img": "https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/619659134648.jpg",
        "pieces": 23
      },
      {
        "id": "msdoasdo1283219nsadsa",
        "name": "Memoria 32gb sandisk",
        "type":"MEMORIAS",
        "price": 125,
        "img": "https://cdn1.coppel.com/images/catalog/pm/2827193-1.jpg",
        "pieces": 11
      },
      {
        "id": "ñasdaskasdjasd213213",
        "name": "Memoria 64gb sandisk",
        "type":"MEMORIAS",
        "price": 200,
        "img": "https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/619659134846.jpg",
        "pieces": 10
      },
      {
        "id": "SAKkskdas2332042301",
        "name": "Memoria 128gb sandisk",
        "type":"MEMORIAS",
        "price": 300,
        "img": "https://www.cyberpuerta.mx/img/product/L/CP-SANDISK-SDSQUAR-128G-GN6MA-10.jpg",
        "pieces": 8
      }
      
    ],
    "keyboards":[
      {
        "id":"asdasd928392321312",
        "name": "Teclado Vorago 102",
        "price": 125,
        "type": "TECLADOS",
        "img": "https://http2.mlstatic.com/D_NQ_NP_961359-MLM31222080882_062019-O.jpg",
        "pieces": 3
      }
    ],
    "headphones":[
      {
        "id":"kasdj49324239402394",
        "name": "Gettech GH-3000N synergy",
        "price": 149,
        "type": "AUDIFONOS",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71qgIO%2B03tL._AC_SY355_.jpg",
        "pieces": 4
      }
    ]
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const store = createStore(reducer, initialState,composeEnhancers());

ReactDOM.render( 
  <Provider store={store}>
      <App /> 
  </Provider>
  , 
  document.getElementById('app')
);