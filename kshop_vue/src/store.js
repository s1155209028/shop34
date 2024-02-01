import { createApp } from 'vue';
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import img1 from '@/assets/1.jpg';
import img2 from '@/assets/2.jpg';
import img3 from '@/assets/3.png';
import img4 from '@/assets/4.png';
import img5 from '@/assets/5.jpg';
import img6 from '@/assets/6.jpg';
import img7 from '@/assets/7.png';
import img8 from '@/assets/8.jpg';
import img9 from '@/assets/9.png';
import img10 from '@/assets/10.png';
import img11 from '@/assets/11.jpg';
import img12 from '@/assets/12.png';


export default createStore({
  state: {
    infoPage:[],
    cartItems:[],
    items: [
      {
        id:0,
        img: img1,
        title: 'THE BOYZ - 2nd Album [[PHANTASY]',
        price: 15.16,
        type: 'Album'
      }, {
        id:1,
        img: img2,
        title: 'IU - 6th Mini Album [The Winning]',
        price: 44.76,
        type: 'Album'
      }, {
        id:2,
        img: img3,
        title: 'NCT 127 - BALL CAP SET',
        price: 35.71,
        type: 'Others'
      }, {
        id:3,
        img: img4,
        title: 'NCT 127 - RANDOM TRADING CARD SET_A (SIDE VER.)',
        price: 5.23,
        type: 'PhotoCard'
      }, {
        id:4,
        img: img5,
        title: 'YENA - 3rd Mini Album [GOOD MORNING]',
        price: 19.16,
        type: 'Album'
      }, {
        id:5,
        img: img6,
        title: 'Key - SHAKER KEY RING',
        price: 13.94,
        type: 'Others'
      }, 
      {
        id:6,
        img: img7,
        title: 'aespa - OFFICIAL LIGHT STICK',
        price: 34.13,
        type: 'LightStick'
      }, 
      {
        id:7,
        img: img8,
        title: 'Stray Kids - OFFICIAL MD OFFICIAL LIGHT STICK ver.2',
        price: 45.5,
        type: 'LightStick'
      }, 
      {
        id:8,
        img: img9,
        title: 'RIIZE - RANDOM TRADING CARD SET (B ver.)',
        price: 5.25,
        type: 'PhotoCard'
      }, 
      {
        id:9,
        img: img10,
        title: 'n.SSign - 2nd MINI ALBUM [Happy &] (Random ver.)',
        price: 16.19,
        type: 'Album'
      }, 
      {
        id:10,
        img: img11,
        title: 'aespa - The 4th Mini Album [Drama] (Giant Ver.) (Random Ver.)',
        price: 17.59,
        type: 'Album'
      }, 
      {
        id:11,
        img: img12,
        title: '(G)I-DLE - OFFICIAL LIGHT STICK Ver.2',
        price: 27.98,
        type: 'LightStick'
      }, 
    ]
  },
  plugins: [createPersistedState()],
  getters: {
    itemsNumber(state){  // Cart Component
      return state.cartItems.length
    },
    totalPrice(state) { // Cart Component
      if (state.cartItems.length != 0){
       return state.cartItems.reduce((a, b) => {
         return (b.price == null ) ? a : a + b.price
       }, 0)
      }
    },
    infoLength(state) { // Info Component
      if(state.infoPage.length > 0) {
        return state.infoPage.splice(0, 1)
      }
    }
  },
  mutations: {
    inCart(state, n) { // Cart Component
      return state.cartItems.push(n)
    },
    outCart(state, n) { // Cart Component
      let index = state.cartItems.findIndex(x => x.id === n)
      return state.cartItems.splice(index, 1)
    },
    addtoInfo(state, n) { // Info Component
       return state.infoPage.push(n)
    }
  },

})

