<template>
  <div class="container grid">
    <div>
      <h1 class="pt-3 text-center">New arrivals</h1>
      <nav class="row justify-content-center" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a @click="reSet()">Home</a>
          </li>
          <li class="breadcrumb-item" aria-current="page">{{ sortName }}</li>
        </ol>
      </nav>
    </div>

    <div class="row col-6 flex-row-reverse">
      <div class="view-button">
        <div class="dropdown">
          <button class="btn btn-light dropdown-toggle d-block d-lg-none d-xl-none" role="button" id="MenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CATAGORIES</button>
          <div class="dropdown-menu" aria-labelledby="MenuLink">
            <a class="dropdown-item" @click="sortI('Album')">Album</a>
            <a class="dropdown-item" @click="sortI('LightStick')">Light Stick</a>
            <a class="dropdown-item" @click="sortI('PhotoCard')">Photo Card</a>
            <a class="dropdown-item" @click="sortI('Others')">Others</a>
            <div class="dropdown-divider"></div>

            <div class="dropdown-divider"></div>
            <a class="dropdown-item" @click="reSet">Reset</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col col-xl-3 col-lg-3 d-none d-lg-block d-xl-block">
        <div class="card-selector">
          <div class="card-body p-5">
            <div class="search-title">
              <h4>Categories</h4>
              <br>
              <h6 @click="sortI('Album')">Album</h6>
              <h6 @click="sortI('LightStick')">Light Stick</h6>
              <h6 @click="sortI('PhotoCard')">Photo Card</h6>
              <h6 @click="sortI('Others')">Others</h6>
              <br><br>

            </div>

          </div>
        </div>
      </div>
      <div class="row col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12 text-center">
        <div v-if="cards.length === 0" class="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h4 style="margin-left:9rem;margin-right:9rem">Sorry, we can't find a product with these features</h4>
        </div>

        <Card :CardArray="slicedCards" />

        <div class="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 py-5">
          <button type="button" @click="incCardNumber" class="btn btn-outline-secondary btn-lg btn-block">More +</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'Grid',
  components: {
    Card
  },
  data() {
    return {
      cards: [],
      showCards: 6,
      sortButton: 'DEFAULT',
      sortName: '',
    }
  },
  created() {
    this.cards = this.it
  },
  computed: {
    it() {
      return this.$store.state.items
    },
    slicedCards() {
      return this.cards.slice(0, this.showCards)
    }
  },
  methods: {
    incCardNumber() {
      this.showCards += 6
    },
    sortDate() {
      this.cards.sort((a, b) => (a.title.length * 2) - (b.title.length * 4))
      this.sortButton = 'DATE'
    },
    sortPrice() {
      this.cards.sort((a, b) => a.price - b.price)
      this.sortButton = 'PRICE'
    },
    sortTrend() {
      this.cards.sort((a, b) => a.type.length - b.type.length)
      this.sortButton = 'TRENDING'
    },
    sortI(name) {
      this.cards = this.it.filter((e) => e.type.match(name))
      this.sortName = name
    },
    reSet() {
      this.sortName = ''
      this.cards = this.it
    }
  }
}
</script>

<style>
.container.grid {
  min-height: 60rem;
}

.container.grid a {
  cursor: pointer !important;
}

.breadcrumb {
  background: inherit !important;
  color: #2c3539 !important;
  font-size: 20px;
}

.breadcrumb>li>a {
  text-decoration: none !important;
  color: #2c3539 !important;
}

.breadcrumb>li {
  text-decoration: none !important;
  color: #f2be00 !important;
}

.btn-light {
  color: black !important;
  background: white;
  border-radius: 0 !important;
  border: 1px solid grey !important;
}

.dropdown-menu {
  background-color: #eee;
  color: #2c3539;
}

.dropdown-menu > a:hover {
  background-color: #dae0e5
}

.btn-outline-secondary {
  border-radius: 0 !important;
}

/*search options*/

.card-selector {
  color: #DCDCDC;
  height: 50rem;
  background: #2c3539 !important;
  box-shadow: 0 8px 6px 0 rgba(0, 0, 0, 0.1), 0 26px 70px 0 rgba(0, 0, 0, 0.69);
}

.search-title h6 {
  cursor: pointer;
}

.circle {
  height: 17px;
  width: 17px;
  border-radius: 50%;
  border: 0.7px solid #2c3539;
  display: inline-block;
  margin-left: 6px;
  cursor: pointer
}
</style>