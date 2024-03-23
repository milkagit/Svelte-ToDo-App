// filter.js
import { writable } from 'svelte/store';

// export const filter = writable('all'); // Default filter is 'all'

export const filter = writable({
  type: 'all', // Default filter type
  color: null // Default color filter
});

