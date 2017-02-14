var dbg = (x => {console.log(x); return x})

function ContactItem(props) {
    return <li>
      <h2>{props.name}</h2>
      <a href={'mailto:' + props.email}>{props.email}</a>
      <div>{props.description}</div>
    </li>
}
ContactItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
  description: React.PropTypes.string
}

function ContactList(props) {
  return <div>
    <h1>Contacts</h1>
    <ul>{
      _(props.contacts)
        .filter(c => c.email)
        .map(c => React.createElement(ContactItem, c))
        .value()
    }</ul>
  </div>
}
ContactList.propTypes = {
  contacts: React.PropTypes.array.isRequired
}

class ContactForm extends React.Component {
  render() {
    if (!this.props.model.newContact) { this.resetContact(this.props) }
    return <form>
      <div className="row">
        <input
          className="six columns"
          type="text" placeholder="Name"
          value={this.props.model.newContact.name} onChange={this.updateContact('name')} />
        <input
          className="six columns"
          type="email" placeholder="E-mail"
          value={this.props.model.newContact.email} onChange={this.updateContact('email')} />
        <textarea
          className="u-full-width"
          placeholder="Description"
          value={this.props.model.newContact.description} onChange={this.updateContact('description')} />
        <button className="u-full-width" type="button" onClick={this.createContact(this.props)}>
          Add Contact
        </button>
      </div>
    </form>
  }

  updateContact(field) {
    return e => {
      _.assign(this.props.model.newContact, { [field]: e.target.value })
      this.props.onChange(this.props.model)
    }
  }

  createContact(props) {
    return () => {
      var newContact = props.model.newContact
      newContact.key = props.model.contacts.length
      props.model.contacts.push(newContact)
      this.resetContact()
      props.onChange(props.model)
    }
  }

  resetContact() {
    this.props.model.newContact = { name: '', email: '', description: '' }
  }
}
ContactForm.propTypes = {
  model: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired
}

function fullRender(model) {
  ReactDOM.render(<div>
    <ContactList contacts={model.contacts} />
    <ContactForm model={model} onChange={fullRender} />
  </div>, document.getElementById('react-app'))
}

window.fullRender = fullRender
