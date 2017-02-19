<template>
  <div>
    <contact-list :all-contacts="contacts"></contact-list>
    <contact-form :contacts="contacts"></contact-form>
  </div>
</template>

<script>
import ContactList from './ContactList.vue'
import ContactForm from './ContactForm.vue'

export default {
  data: () => ({ contacts: [
    { name: 'Alan Abbotson', email: 'a@a.a', description: 'Front-end Unicorn' },
    { name: 'Betsy Bobson', email: 'b@b.b' },
    { name: 'Cara Carrotson' }
  ]}),
  components: { ContactList, ContactForm }
}
</script>

