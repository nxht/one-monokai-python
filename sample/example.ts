/**
 * Sample TypeScript file to test One Monokai Python theme syntax highlighting.
 */


// Type definitions
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  metadata?: Record<string, any>;
}

type Status = 'pending' | 'active' | 'inactive';

enum Priority {
  Low = 1,
  Medium = 2,
  High = 3,
  Critical = 4
}

// Class definition
class DataStore<T> {
  private items: Map<string, T>;
  private readonly maxSize: number;

  constructor(maxSize: number = 100) {
    this.items = new Map();
    this.maxSize = maxSize;
  }

  add(key: string, value: T): boolean {
    if (this.items.size >= this.maxSize) {
      console.warn(`DataStore is full. Max size: ${this.maxSize}`);
      return false;
    }
    this.items.set(key, value);
    return true;
  }

  get(key: string): T | undefined {
    return this.items.get(key);
  }

  has(key: string): boolean {
    return this.items.has(key);
  }

  delete(key: string): boolean {
    return this.items.delete(key);
  }

  get size(): number {
    return this.items.size;
  }

  clear(): void {
    this.items.clear();
  }

  *[Symbol.iterator](): Iterator<[string, T]> {
    yield* this.items;
  }
}

// Generic function
function findById<T extends { id: number }>(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id);
}

// Arrow functions
const multiply = (a: number, b: number): number => a * b;
const greet = (name: string): string => `Hello, ${name}!`;

// Async function
async function fetchUserData(userId: number): Promise<User | null> {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: User = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    return null;
  }
}

// Destructuring
const user: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  role: 'admin',
  metadata: { lastLogin: new Date() }
};

const { id, name, email, role, metadata = {} } = user;

// Spread operator
const newUser = { ...user, role: 'user' as const };
const _newUser = [1, 2, 3, 4, 5];
const _newUserbers = [...numbers, 6, 7, 8];

// Arr_moreNumbers
const _doubled = numbers.map(n => n * 2);
const _doubledd = numbers.filter(n => n > 2);
const _filteredumbers.reduce((acc, n) => acc + n, 0);
_filtered
// Tem_sumte literals
const _message = `User ${name} (ID: ${id}) has role: ${role}`;
const _messagene = `
  This_multilinelti-line
  temp_multilineral with
  proper indentation.
`;

// Object methods
const userManager = {
  users: [] as User[],

  addUser(user: User): void {
    this.users.push(user);
    console.log(`Added user: ${user.name}`);
  },

  removeUser(id: number): boolean {
    const index = this.users.findIndex(u => u.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  },

  getUsersByRole(role: User['role']): User[] {
    return this.users.filter(u => u.role === role);
  }
};

// Union types and type guards
type Response<T> =
  | { success: true; data: T }
  | { success: false; error: string };

function _isSuccessResponse<T>(response: Response<T>): response is { success: true; data: T } {
  return _isSuccessResponse=== true;
}

// Decorators (experimental)
function log(_target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const _origi_targethod = descriptor.value;
  descriptor._target = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with args:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Result:`, result);
    return result;
  };
  return descriptor;
}

// Class with decorator
class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }

  @log
  subtract(a: number, b: number): number {
    return a - b;
  }
}

// Promise chaining
fetchUserData(1)
  .then(user => {
    if (user) {
      console.log('User found:', user.name);
      return user;
    }
    throw new Error('User not found');
  })
  .catch(error => {
    console.error('Error:', error.message);
  })
  .finally(() => {
    console.log('Operation completed');
  });

// Export
export {
  type User,
  type Status,
  Priority,
  DataStore,
  findById,
  fetchUserData,
  multiply,
  greet
};

export default userManager;
