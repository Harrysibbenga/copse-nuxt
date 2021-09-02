<template>
  <div>
    <v-container class="success my-10 white--text">
      <h2 class="py-10 text-h5">
        Order your Road-Keeper System from Copse Automotive, trackday and full
        roll cage mounted versions available to suit all installations
      </h2>
      <v-row class="text-center">
        <v-col
          cols="12"
          md="6"
          @mouseenter="set1(true)"
          @mouseleave="set1(false)"
        >
          <v-img
            v-if="!set_1"
            :src="
              require('../../assets/images/logging/Road-Keeper HD Standard2.png')
            "
            alt="Road-Keeper HD Standard"
          ></v-img>
          <v-img
            v-else
            :src="
              require('../../assets/images/logging/Road-Keeper with accessories.jpg')
            "
            alt="Road-Keeper with accessories"
          ></v-img>
          <p class="text-caption">
            Road-Keeper Dual HD vehicle video system with GPS
          </p>
          <p>£390 Inc. VAT</p>
        </v-col>
        <v-divider vertical class="black" inset></v-divider>
        <v-col
          cols="12"
          md="6"
          @mouseenter="set2(true)"
          @mouseleave="set2(false)"
        >
          <v-img
            v-if="!set_2"
            :src="
              require('../../assets/images/logging/Road-Keeper Roll Bar Mount side view.jpg')
            "
            alt="Road-Keeper Roll Bar Mount side view"
          ></v-img>
          <v-img
            v-else
            :src="
              require('../../assets/images/logging/Road-Keeper Roll Bar Mount.jpg')
            "
            alt="Road-Keeper Roll Bar Mount"
          ></v-img>
          <p class="text-caption">
            Road-Keeper Dual HD video system, Roll bar mount, 10ft GPS
          </p>
          <p>£525 Inc. VAT</p>
        </v-col>
      </v-row>
      <v-row class="text-h5 text-lg-h4 flex-column text-center pb-15 pt-5">
        <p>Contact us now for more details:</p>
        <a class="error--text" href="mailto:motorsport@copseauto.co.uk"
          >motorsport@copseauto.co.uk</a
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      set_1: false,
      set_2: false,
    }
  },
  methods: {
    set1(val) {
      this.set_1 = val
    },
    set2(val) {
      this.set_2 = val
    },
  },
}
</script>
