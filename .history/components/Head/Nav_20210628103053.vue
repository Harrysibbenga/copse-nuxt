<template>
  <div>
    <v-app-bar app height="100px">
      <nuxt-link to="/">
        <logo width="160"></logo>
      </nuxt-link>
      <v-spacer />
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon x-large>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" right="true" app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :href="item.to">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="user" :nuxt="true" to="/admin">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
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
          icon: 'mdi-apps',
          title: 'Home',
          to: '#home',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '#about',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Tuning',
          to: '#tuning',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Trackdays',
          to: '#trackdays',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Tuning',
          to: '#porsche',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Tuning',
          to: '#classic-restoration',
        },
        {
          icon: 'mdi-contact-mail-outline',
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
