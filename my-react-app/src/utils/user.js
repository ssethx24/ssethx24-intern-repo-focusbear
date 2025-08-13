// src/utils/user.js (after)
export function getFullName(user) {
  return `${user.firstName} ${user.lastName}`;
}
export function isValidEmail(email) {
  return email.includes('@');
}
export function normalizeEmail(email) {
  return email.toLowerCase();
}
export function filterActiveUsers(users) {
  return users.filter(u => u.isActive);
}
export function handleUserData(users) {
  return filterActiveUsers(users)
    .filter(user => isValidEmail(user.email))
    .map(user => ({
      id: user.id,
      fullName: getFullName(user),
      email: normalizeEmail(user.email),
    }));
}