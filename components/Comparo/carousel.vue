<template>
  <div>
    <v-container class="success">
      <v-carousel
        v-model="slide"
        show-arrows-on-hover
        height="auto"
        style="min-height: 250px"
      >
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <v-img
            :src="require('../../assets/images/' + item.imgSrc)"
            max-width="100%"
            max-height="100%"
          ></v-img>
        </v-carousel-item>
      </v-carousel>
      <div v-for="(item, i) in items" :key="i">
        <p v-if="slide === i" class="text-h6 pt-5 white--text text-center">
          {{ item.text }}
        </p>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          imgSrc: 'comparo/Picture 1.png',
          text: 'If you double-click one of the cameras, you will launch into fullscreen mode, which looks visually stunning when combined with 1080p HD footage from a HDX2 system. In fullscreen mode you can display various graphical data displays such as track map, speed gauge and G-Force Meter. These items can be moved around the screen or resized. The second camera feed is displayed in Picture-in-Picture mode. To switch camera views, just double-click on the Picture-in-Picture view.',
        },
        {
          imgSrc: 'comparo/Picture 2.png',
          text: 'Comparo HD automatically creates a track map based on captured GPS data and overlays this on a GoogleMap satellite image (when internet access is available). Other captured data such as speed, G Force, RPM, and Gear Number can be overlaid onto the track map creating a rainbow map which can prove to be very useful, especially when comparing the fastest laps of two different drivers.',
        },
        {
          imgSrc: 'comparo/Picture 3.png',
          text: 'GPS track map example: 1',
        },
        {
          imgSrc: 'comparo/Picture 4.png',
          text: 'GPS track map example: 2',
        },
        {
          imgSrc: 'comparo/Picture 5.png',
          text: 'Comparo HD makes reading vehicle and driver data easy. Just select from the data channels available which ones you would like to display. If required you have the ability to thicken up the data lines or switch the background colour to make the data trace lines stand out easier to read in low light conditions',
        },
      ],
      slide: 0,
    }
  },
}
</script>
