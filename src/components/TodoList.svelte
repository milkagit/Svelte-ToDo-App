<!-- TodoList.svelte -->
<script lang="ts">
  import ColorPicker from "./ColorPicker.svelte";
  import TodoItem from "./TodoItem.svelte";
  import { onMount, onDestroy } from "svelte";
  import { todos } from "../stores/todos.js";
  import { filter } from "../stores/filter";

  export let todosList: any;
  export let selectedFilter: any;
  export let markComplete: any;
  export let removeTask: any;

  let fetchedTodos: any[] = [];
  let filteredTodos: string | any[] = [];

  let selectedColors: string[] = [];

  function handleColorChange(event: { detail: string }, index: number) {
    selectedColors[index] = event.detail;
  }

  const unsubscribeTodos = todos.subscribe((value) => {
    fetchedTodos = value;
    updatedFilters();
  });

  const unsubscribeFilter = filter.subscribe(() => {
    updatedFilters();
  });

  onMount(() => {
    updatedFilters();
  });

  onDestroy(() => {
    unsubscribeTodos();
    unsubscribeFilter();
  });

  // function updatedFilters() {
  //   const selectedFilter = $filter;
  //   if (selectedFilter === "completed") {
  //     filteredTodos = fetchedTodos.filter(
  //       (todo) => todo.status === "completed"
  //     );
  //   } else if (selectedFilter === "incomplete") {
  //     filteredTodos = fetchedTodos.filter((todo) => todo.status === "pending");
  //   } else {
  //     filteredTodos = fetchedTodos;
  //   }
  // }
  function updatedFilters() {
    if (selectedFilter === "completed") {
      filteredTodos = fetchedTodos.filter(
        (todo) => todo.status === "completed"
      );
    } else if (selectedFilter === "uncompleted") {
      filteredTodos = fetchedTodos.filter((todo) => todo.status === "pending");
    } else {
      filteredTodos = fetchedTodos;
    }
  }
</script>

<div class="tasks">
  {#if Array.isArray(filteredTodos) && filteredTodos.length > 0}
    {#each filteredTodos as todo, i}
      <div class="task">
        <ColorPicker
          on:colorChange={(event) => handleColorChange(event, i)}
          bind:selectedColor={selectedColors[i]}
        />
        <TodoItem
          {todo}
          {i}
          filter={selectedFilter}
          {markComplete}
          {removeTask}
          selectedColor={selectedColors[i]}
        />
      </div>
    {/each}
  {:else}
    <p>No todos available.</p>
  {/if}
</div>

<style>
  .tasks {
    min-height: 100px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .task {
    display: flex;
    gap: 8px;
    justify-content: space-between;
  }
</style>
