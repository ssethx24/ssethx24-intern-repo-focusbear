Research: common code smells & their impact
Magic Numbers/Strings: Hide intent, make changes risky and scattered.

Long Functions: Hard to read, test, and reuse; bugs hide in the noise.

Duplicate Code: Fixes must be applied in many places; easy to miss one.

Large Classes (God Objects): Violates SRP; changes cause wide ripple effects.

Deeply Nested Conditionals: Cognitive load spikes; edge cases slip through.

Commented-Out Code: Noise that misleads; version control already preserves history.

Inconsistent Naming: Readers guess meanings; bugs from misused variables.

Code smells — examples and refactors (JavaScript/TypeScript)
1) Magic Numbers & Strings
❌ Before
function calcFinal(price: number) {
  const tax = price * 0.18;
  const discount = price > 1000 ? 0.1 : 0.05;
  return price + tax - price * discount;
}
✅ After
const TAX_RATE = 0.18;
const DISCOUNT_THRESHOLD = 1000;
const HIGH_DISCOUNT = 0.10;
const LOW_DISCOUNT = 0.05;

function calcFinal(price: number) {
  const tax = price * TAX_RATE;
  const discount = price > DISCOUNT_THRESHOLD ? HIGH_DISCOUNT : LOW_DISCOUNT;
  return price + tax - price * discount;
}
2) Long Function
❌ Before
async function processOrder(order: any, db: any, mailer: any) {
  if (!order || !order.items || order.items.length === 0) throw new Error('invalid');
  let total = 0;
  for (const i of order.items) total += i.price * i.qty;
  if (order.coupon) {
    if (order.coupon.type === 'percent') total = total * (1 - order.coupon.value);
    else if (order.coupon.type === 'flat') total = total - order.coupon.value;
  }
  const tax = total * 0.18;
  total += tax;
  await db.save({ ...order, total, status: 'PAID' });
  await mailer.send(order.customerEmail, `Your total is ${total}`);
  return total;
}
✅ After (split by responsibility)
const TAX_RATE = 0.18 as const;

function assertValidOrder(order: any): void {
  if (!order || !Array.isArray(order.items) || order.items.length === 0) {
    throw new Error('Order must have at least one item.');
  }
}

function subtotal(items: { price: number; qty: number }[]): number {
  return items.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function applyCoupon(total: number, coupon?: { type: 'percent'|'flat'; value: number }): number {
  if (!coupon) return total;
  if (coupon.type === 'percent') return total * (1 - coupon.value);
  if (coupon.type === 'flat') return total - coupon.value;
  throw new Error('Unknown coupon type');
}

function addTax(total: number): number {
  return total * (1 + TAX_RATE);
}

export async function processOrder(order: any, db: any, mailer: any) {
  assertValidOrder(order);
  const base = subtotal(order.items);
  const discounted = applyCoupon(base, order.coupon);
  const finalTotal = addTax(discounted);
  await db.save({ ...order, total: finalTotal, status: 'PAID' });
  await mailer.send(order.customerEmail, `Your total is ${finalTotal}`);
  return finalTotal;
}
3) Duplicate Code
❌ Before
function toTitleCaseName(user: { first: string; last: string }) {
  return user.first[0].toUpperCase() + user.first.slice(1).toLowerCase() + ' ' +
         user.last[0].toUpperCase() + user.last.slice(1).toLowerCase();
}
function toTitleCaseCity(city: string) {
  return city[0].toUpperCase() + city.slice(1).toLowerCase();
}
✅ After (reuse a utility)
function titleCase(s: string) {
  return s ? s[0].toUpperCase() + s.slice(1).toLowerCase() : s;
}

function toTitleCaseName(user: { first: string; last: string }) {
  return `${titleCase(user.first)} ${titleCase(user.last)}`;
}
function toTitleCaseCity(city: string) {
  return titleCase(city);
}
4) Large Class (God Object)
❌ Before
class AppManager {
  users: any[] = [];
  cache = new Map<string, any>();
  logger = console;

  async boot() {/*...*/}
  addUser(u: any) {/*...*/}
  removeUser(id: string) {/*...*/}
  cacheGet(k: string) {/*...*/}
  cacheSet(k: string, v: any) {/*...*/}
  sendEmail(to: string, body: string) {/*...*/}
  renderUI() {/*...*/}
  handleRoute(path: string) {/*...*/}
}
✅ After (split by domain)

class UserService { /* addUser/removeUser/findUser */ }
class CacheService { /* get/set/has */ }
class Mailer { /* send */ }
class Router { /* handleRoute */ }
class UI { /* render */ }

class App {
  constructor(
    private users: UserService,
    private cache: CacheService,
    private mailer: Mailer,
    private router: Router,
    private ui: UI
  ) {}
  async boot() {/* compose collaborators */}
}
5) Deeply Nested Conditionals
❌ Before
function access(user: any, resource: any) {
  if (user) {
    if (user.active) {
      if (resource) {
        if (resource.ownerId === user.id || user.role === 'ADMIN') {
          return true;
        }
      }
    }
  }
  return false;
}
✅ After (guard clauses + early returns)
function access(user: any, resource: any) {
  if (!user?.active) return false;
  if (!resource) return false;
  const isOwner = resource.ownerId === user.id;
  const isAdmin = user.role === 'ADMIN';
  return isOwner || isAdmin;
}
6) Commented-Out Code
❌ Before
function fetchData() {
  // const cache = new Map(); // old cache
  // TODO: maybe restore cache later
  return api.get('/data');
}
✅ After

function fetchData() {
  return api.get('/data');
}
// If caching is needed, track it via an issue and add it when implemented.
7) Inconsistent Naming
❌ Before
const x = 60_000;         // milliseconds?
function getUsr(u: any) { /*...*/ } // abbreviation unclear
const OK = true;          // meaning?
✅ After
const REQUEST_TIMEOUT_MS = 60_000;
function getUser(userId: string) { /*...*/ }
const isHealthy = true;
Reflections for code_smells.md (paste this)
markdown
Copy
Edit
# code_smells.md

## What code smells did you find in your code?
- **Magic Numbers/Strings:** Hardcoded tax rate, thresholds, and discount values obscured intent.
- **Long Functions:** `processOrder` mixed validation, pricing, tax, persistence, and notifications.
- **Duplicate Code:** Repeated title-casing logic across different functions.
- **Large Class (God Object):** A single manager class handled users, cache, email, UI, and routing.
- **Deeply Nested Conditionals:** Access checks nested four levels deep.
- **Commented-Out Code:** Old caching lines left as comments.
- **Inconsistent Naming:** Ambiguous names (`x`, `OK`, `getUsr`) and unclear units.

## How did refactoring improve readability and maintainability?
- Introduced **constants** for business rules (tax, thresholds), making intent explicit and updates centralized.
- Split long functions into **small, single-purpose functions** (validation, subtotal, coupon, tax), reducing cognitive load and improving testability.
- Extracted **shared utilities** (e.g., `titleCase`) to remove duplication and ensure one source of truth.
- Replaced the God Object with **cohesive classes/services**, aligning code with the Single Responsibility Principle.
- Used **guard clauses** and early returns to flatten logic and make control flow obvious.
- Removed commented-out code to reduce noise; version control preserves history.
- Standardized **clear, descriptive names** and unit-suffixed constants (e.g., `REQUEST_TIMEOUT_MS`).

## How can avoiding code smells make future debugging easier?
- Clear boundaries and smaller units mean **faster pinpointing** of defects.
- Centralized constants prevent **inconsistent business rules** across the codebase.
- Reduced duplication ensures **one fix fixes all** usages.
- Flattened conditionals and guard clauses make the **failure paths explicit**, aiding error reproduction.
- Consistent naming and removal of dead code reduce **misinterpretation and false leads** during triage.