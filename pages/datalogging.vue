<template>
  <div>
    <logging-head></logging-head>
    <logging-desc></logging-desc>
    <logging-carousel></logging-carousel>
    <logging-spec></logging-spec>
    <logging-products></logging-products>
    <comparo-head></comparo-head>
    <comparo-carousel></comparo-carousel>
    <div class="black mt-5 py-10">
      <v-container id="contact" class="pb-16 mb-16">
        <v-row class="px-md-16 black" align="center">
          <v-col cols="12">
            <logging-contact-form></logging-contact-form>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'logging',
}
</script>
