<template>
  <form>
    <div class="row">
      <input class="six columns" type="text" placeholder="Name" v-model=newContact.name>
      <input class="six columns" type="text" placeholder="E-mail" v-model=newContact.email>
      <textarea class="u-full-width" placeholder="Description" v-model=newContact.description></textarea>
      <button class="u-full-width" type="button" @click="addContact">Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  props: ['contacts'],
  data: () => ({
    newContact: { name: '', email: '', description: '' }
  }),
  methods: {
    addContact: function() {
      this.contacts.push(this.newContact)
      this.newContact = { name: '', email: '', description: '' }
    }
  }
}
</script>
