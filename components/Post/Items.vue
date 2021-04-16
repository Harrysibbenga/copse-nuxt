<template>
  <div>
    <v-container fluid class="my-10">
      <h3>Services</h3>
      <v-row v-for="(item, index) in items" :key="index">
        <v-col cols="10">
          <v-col cols="6">
            <PostImageUpload :image.sync="item.image" :type="type" />
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model.trim="item.name"
              label="Name of service"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <UIEditor :content.sync="item.content" />
          </v-col>
        </v-col>
        <v-col cols="2" class="my-auto text-center">
          <v-icon color="green" @click.native="add()">mdi-plus</v-icon>
          <v-icon v-if="index != 0" color="error" @click.native="remove(index)"
            >mdi-minus</v-icon
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    services: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      type: 'services',
    }
  },
  computed: {
    items: {
      get() {
        return this.services
      },
      set(newVal) {
        this.$emit('update:content', newVal)
      },
    },
  },
  methods: {
    add() {
      this.items.push({
        name: '',
        content: '',
        image: { url: '', alt: '', id: '' },
      })
    },
    remove(index) {
      this.items.splice(index, 1)
    },
  },
}
</script>
