import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

// REMOVE CLASS FROM items ARRAY
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoPage:[],
    cartItems:[],
    items: [
      {
        id:0,
        img: require('@/assets/1.jpg'),
        title: 'THE BOYZ - 2nd Album [[PHANTASY]',
        price: 15.16,
        type: 'Album'
      }, {
        id:1,
        img: require('@/assets/2.jpg'),
        title: 'IU - 6th Mini Album [The Winning]',
        price: 44.76,
        type: 'Album'
      }, {
        id:2,
        img: require('@/assets/3.png'),
        title: 'NCT 127 - BALL CAP SET',
        price: 35.71,
        type: 'Others'
      }, {
        id:3,
        img: require('@/assets/4.png'),
        title: 'NCT 127 - RANDOM TRADING CARD SET_A (SIDE VER.)',
        price: 5.23,
        type: 'PhotoCard'
      }, {
        id:4,
        img: require('@/assets/5.jpg'),
        title: 'YENA - 3rd Mini Album [GOOD MORNING]',
        price: 19.16,
        type: 'Album'
      }, {
        id:5,
        img: require('@/assets/6.jpg'),
        title: 'Key - SHAKER KEY RING',
        price: 13.94,
        type: 'Others'
      }, 
      {
        id:6,
        img: require('@/assets/7.png'),
        title: 'aespa - OFFICIAL LIGHT STICK',
        price: 34.13,
        type: 'LightStick'
      }, 
      {
        id:7,
        img: require('@/assets/8.jpg'),
        title: 'Stray Kids - OFFICIAL MD OFFICIAL LIGHT STICK ver.2',
        price: 45.5,
        type: 'LightStick'
      }, 
      {
        id:8,
        img: require('@/assets/9.png'),
        title: 'RIIZE - RANDOM TRADING CARD SET (B ver.)',
        price: 5.25,
        type: 'PhotoCard'
      }, 
      {
        id:9,
        img: require('@/assets/10.png'),
        title: 'n.SSign - 2nd MINI ALBUM [Happy &] (Random ver.)',
        price: 16.19,
        type: 'Album'
      }, 
      {
        id:10,
        img: require('@/assets/11.jpg'),
        title: 'aespa - The 4th Mini Album [Drama] (Giant Ver.) (Random Ver.)',
        price: 17.59,
        type: 'Album'
      }, 
      {
        id:11,
        img: require('@/assets/12.png'),
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
