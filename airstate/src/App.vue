<template>
  <div id="app">
    <div>
      <h1 class="hd">Air State</h1>
      <div class='choices'>
        <b-form inline>
          <!-- <label class="mr-sm-2" for="inline-form-custom-select-pref">Year</label> -->
          <b-form-select
            class="mb-2 mr-4"
            :value="null"
            :options="{ '1': '2019'}"
            id="inline-form-custom-select-pref"
          >
            <option slot="first" :value="null">Year</option>
          </b-form-select>

          <b-form-select
            class="mb-2 mr-sm-2 mb-sm-0 "
            :value="null"
            :options="{ '1': '1', '2': '2', '3': '3','4': '4','5': '5','6': '6', '7': '7', '8': '8', '9': '9', '10': '10', '11': '11', '12': '12'}"
            id="inline-form-custom-select-pref"
          >
            <option slot="first" :value="null">Month</option>
          </b-form-select>

          <b-form-select
            class="mb-2 mr-sm-2 mb-sm-0"
            :value="null"
            :options="{ '1': '1', '2': '2', '3': '3','4': '4','5': '5','6': '6', '7': '7', '8': '8', '9': '9', '10': '10', 
            '11': '11', '12': '12', '13': '13','14': '14','15': '15','16': '16', '17': '17', '18': '18', '19': '19', '20': '20',
            '21': '21', '22': '22', '23': '23','24': '24','25': '25','26': '26', '27': '27', '28': '28', '29': '29', '30': '30', '31':'31'}"
            id="inline-form-custom-select-pref"
          >
            <option slot="first" :value="null">Day</option>
          </b-form-select>
          <b-form-select
            class="mb-2 mr-sm-2 mb-sm-0"
            :value="null"
            :options="{ '1': '1', '2': '2', '3': '3'}"
            id="inline-form-custom-select-pref"
          >
            <option slot="first" :value="null">Period</option>
          </b-form-select>
          <b-button variant="primary">Submit</b-button>
        </b-form>
      </div>
      <div id="bod">
        <Gallery/>
      </div>
    </div>
  </div>
</template>

<script>
import Gallery from '@/components/Gallery.vue';
export default {
  name: 'app',
  components: {
    Gallery
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.hd {
  margin-top: 2rem;
  margin-bottom: 0rem;
}
#bod {
    width: 95%;
    margin: auto;
    background-color: rgba(106, 141, 131, 0.356);
    border-radius: 3rem;
    

}
</style>
