<template>
  <form>
    <v-row>
      <v-col>
        <v-text-field
          v-model="fname"
          :error-messages="fnameErrors"
          :counter="15"
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
          :counter="20"
          label="Last name"
          required
          @input="$v.lname.$touch()"
          @blur="$v.lname.$touch()"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>

    <v-textarea
      v-model="message"
      :error-messages="messageErrors"
      label="Message"
      hint="Enter message here"
      required
      @input="$v.message.$touch()"
      @blur="$v.message.$touch()"
    ></v-textarea>

    <v-btn class="mr-4" @click="submit"> submit </v-btn>
    <v-btn @click="clear"> clear </v-btn>
    <v-row align="end">
      <v-col cols="12">
        <div
          class="g-recaptcha"
          data-sitekey="6LfKVcMUAAAAAFYHEZEHFF0JhRJ712ki7MzcYBaN"
        ></div>
      </v-col>
    </v-row>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    fname: { required, maxLength: maxLength(15) },
    lname: { required, maxLength: maxLength(20) },
    email: { required, email },
    message: { required },
  },

  data: () => ({
    lname: '',
    fname: '',
    email: '',
    message: '',
  }),

  computed: {
    fnameErrors() {
      const errors = []
      if (!this.$v.fname.$dirty) return errors
      !this.$v.fname.maxLength &&
        errors.push('Name must be at most 15 characters long')
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
      !this.$v.lname.maxLength &&
        errors.push('Name must be at most 20 characters long')
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
    submit() {
      this.$v.$touch()
    },
    clear() {
      this.$v.$reset()
      this.fname = ''
      this.lname = ''
      this.email = ''
      this.message = ''
    },
  },
}
</script>
