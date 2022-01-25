export default class UserDto {
  constructor({ email, firstName, lastName, username, password }) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
  }
}
