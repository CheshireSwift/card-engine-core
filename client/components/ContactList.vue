<template>
  <div>
    <h1>Contacts</h1>
    <ul>
      <li v-for="contact in displayContacts">
        <h2>{{ contact.name }}</h2>
        <a :href=contact.mailtoUrl>{{ contact.email }}</a>
        <div>{{ contact.description }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  props: ['allContacts'],
  computed: {
    displayContacts: function() {
      return _(this.allContacts)
        .filter('email')
        .map(
          contact => _.merge({}, contact, { mailtoUrl: 'mailto:' + contact.email })
        ).value()
    }
  }
}
</script>
