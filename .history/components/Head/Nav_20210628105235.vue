<template>
  <div>
    <v-app-bar app height="100px">
      <nuxt-link to="/">
        <logo :width="160"></logo>
      </nuxt-link>
      <v-spacer />
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon x-large>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :right="true"
      app
      color="error"
      class="d-flex"
    >
      <v-list class="text-center font-weight-bold ma-auto">
        <v-list-item v-for="(item, i) in items" :key="i" :href="item.to">
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="user" :nuxt="true" to="/admin">
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          title: 'About',
          to: '#about',
        },
        {
          title: 'Tuning',
          to: '#tuning',
        },
        {
          title: 'Trackdays',
          to: '#trackdays',
        },
        {
          title: 'Porsche',
          to: '#porsche',
        },
        {
          title: 'Classic Restoration',
          to: '#classic-restoration',
        },
        {
          title: 'Social',
          to: '#social',
        },
        {
          title: 'Contact',
          to: '#contact',
        },
      ],
      title: 'Vuetify.js',
    }
  },
  computed: {
    user() {
      return this.$store.getters['users/user']
    },
  },
}
</script>
