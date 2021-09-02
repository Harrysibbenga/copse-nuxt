<template>
  <form @submit.prevent="submit">
    <v-row>
      <v-col>
        <v-text-field
          v-model="fname"
          :error-messages="fnameErrors"
          label="First name"
          name="fname"
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
          name="lname"
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
          name="email"
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
          name="message"
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
      <v-alert v-if="submitStatus === 'ERROR'" type="error">{{
        error
      }}</v-alert>
      <v-progress-circular
        v-if="submitStatus === 'PENDING'"
        indeterminate
        color="red"
      ></v-progress-circular>
    </v-row>
    <v-row class="pl-2" align="center">
      <v-col cols="12" md="6">
        <v-btn class="mr-4 error mx-auto" type="submit"> submit </v-btn>
        <v-btn class="secondary mx-auto" @click.native="clear"> clear </v-btn>
      </v-col>
    </v-row>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import emailjs from 'emailjs-com'

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
    error: '',
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
        this.error = 'Please check the form'
      } else {
        this.submitStatus = 'PENDING'
        this.sendEmail(e)
      }
    },
    sendEmail(e) {
      emailjs
        .sendForm(
          'service_mqk22oq',
          'copse_motorsport_lqxsy2v',
          e.target,
          'user_nzDfhN2MWfSPkCKqEp7Td'
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result.status, result.text)
            console.log(e.target)
            this.submitStatus = 'OK'
            this.reset()
          },
          (error) => {
            console.log('FAILED...', error)
            this.submitStatus = 'ERROR'
            this.error = error.message
          }
        )
    },
    clear() {
      this.$v.$reset()
      this.fname = ''
      this.lname = ''
      this.email = ''
      this.message = ''
      this.submitStatus = ''
      this.error = ''
    },
    reset() {
      this.$v.$reset()
      this.fname = ''
      this.lname = ''
      this.email = ''
      this.message = ''
      setTimeout(() => {
        this.submitStatus = ''
        this.error = ''
      }, 4000)
    },
  },
}
</script>
