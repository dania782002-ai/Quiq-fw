class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    return `${this.name} logged in`;
  }

  logout() {
    return `${this.name} logged out`;
  }

  updateProfile(newData) {
    Object.assign(this, newData);
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email); // نمرر البيانات للأب
  }

  deleteUser(user) {
    return `${user.name} has been deleted by admin ${this.name}`;
  }
}

module.exports = { User, Admin };
