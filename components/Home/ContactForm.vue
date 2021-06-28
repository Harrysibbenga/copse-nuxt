<template>
  <form @submit.prevent="submit">
    <v-row>
      <v-col>
        <v-text-field
          v-model="fname"
          :error-messages="fnameErrors"
          label="First name"
          required
          @input="$v.fname.$touch()"
          @blur="$v.fname.$touch()"
        ></v-text-field>
      </v-col>

      <v-col>
        <v-text-field
          v-model="lname"
          :error-messages="lnameErrors"
          label="Last name"
          required
          @input="$v.lname.$touch()"
          @blur="$v.lname.$touch()"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-textarea
          v-model="message"
          :error-messages="messageErrors"
          label="Message"
          hint="Enter message here"
          required
          @input="$v.message.$touch()"
          @blur="$v.message.$touch()"
        ></v-textarea>
      </v-col>
    </v-row>

    <v-row class="pt-5">
      <v-alert v-if="submitStatus === 'OK'" type="success"
        >Thank you one of our team will get in touch with you shortly!</v-alert
      >
      <v-alert v-if="submitStatus === 'ERROR'" type="error"
        >Please fill the form correctly.</v-alert
      >
      <v-progress-circular
        v-if="submitStatus === 'PENDING'"
        indeterminate
        color="red"
      ></v-progress-circular>
    </v-row>

    <v-row class="pl-2">
      <v-btn class="mr-4 error mx-auto" type="submit"> submit </v-btn>
      <v-btn class="secondary mx-auto" @click.native="clear"> clear </v-btn>
    </v-row>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    fname: { required },
    lname: { required },
    email: { required, email },
    message: { required },
  },

  data: () => ({
    lname: '',
    fname: '',
    email: '',
    message: '',
    submitStatus: '',
  }),

  computed: {
    fnameErrors() {
      const errors = []
      if (!this.$v.fname.$dirty) return errors
      !this.$v.fname.required && errors.push('Name is required.')
      return errors
    },
    messageErrors() {
      const errors = []
      if (!this.$v.message.$dirty) return errors
      !this.$v.message.required && errors.push('Message is required')
      return errors
    },
    lnameErrors() {
      const errors = []
      if (!this.$v.lname.$dirty) return errors
      !this.$v.lname.required && errors.push('Name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
  },

  methods: {
    submit(e) {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        this.sendForm(e)
      }
    },
    sendForm(e) {
      e.preventDefault()
      this.$axios
        .post('https://formspree.io/f/xzbyzoro', {
          fname: this.fname,
          lname: this.lname,
          email: this.email,
          message: this.message,
        })
        .then(() => {
          this.submitStatus = 'OK'
          this.clear()
        })
        .catch(() => {
          this.submitStatus = 'ERROR'
        })
    },
    clear() {
      this.$v.$reset()
      this.fname = ''
      this.lname = ''
      this.email = ''
      this.message = ''
      this.reset()
    },
    reset() {
      setTimeout(() => {
        this.submitStatus = ''
      }, 5000)
    },
  },
}
</script>
