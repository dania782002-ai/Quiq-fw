const { User, Admin } = require('./user-class');

describe('User class functionality', () => {
  test('User can login', () => {
    const user = new User('Ali', 'ali@example.com');
    expect(user.login()).toBe('Ali logged in');
  });

  test('User can logout', () => {
    const user = new User('Ali', 'ali@example.com');
    expect(user.logout()).toBe('Ali logged out');
  });

  test('User can update profile', () => {
    const user = new User('Ali', 'ali@example.com');
    user.updateProfile({ name: 'Omar' });
    expect(user.name).toBe('Omar');
    expect(user.email).toBe('ali@example.com'); // الإيميل ما تغيّر
  });
});

describe('Admin class functionality', () => {
  test('Admin can delete a user', () => {
    const admin = new Admin('Sara', 'admin@example.com');
    const user = new User('Ali', 'ali@example.com');
    expect(admin.deleteUser(user)).toBe('Ali has been deleted by admin Sara');
  });
});
