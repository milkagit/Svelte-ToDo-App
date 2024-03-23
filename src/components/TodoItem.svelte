<!-- TodoItem.svelte -->
<script lang="ts">
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import IconButton from "@smui/icon-button";
  import Checkbox from "@smui/checkbox";
  // import ColorPicker from "./ColorPicker.svelte";

  export let todo: { status: string; task: any };
  export let i: number;
  export let filter: string;
  export let markComplete: (arg0: any) => any;
  export let removeTask: (arg0: any) => any;
  let checked = todo.status === "completed";

  export let selectedColor: string;
</script>

<!-- {#if filter == "all" || (filter === "completed" && todo.status === "completed") || (filter === "incomplete" && todo.status == "pending")}
  <div class="task" style="background-color: {selectedColor}">
    <div style="background-color: {selectedColor}">{todo.task}</div>
    <div class="task-btn">
      <input
        type="checkbox"
        class="common-style {todo.status === 'completed'}"
        checked={todo.status === "completed"}
        on:change={() => markComplete(i)}
      />
      <button class="common-style" on:click={() => removeTask(i)}>
        &#10006;
      </button>
    </div>
  </div>
{/if} -->
<LayoutGrid style="width: 100%">
  {#if filter == "all" || (filter === "completed" && todo.status === "completed") || (filter === "incomplete" && todo.status == "pending")}
    <Cell>
      <div class="task" style="background-color: {selectedColor}">
        <div class="task-description">{todo.task}</div>
        <div class="task-buttons">
          <Checkbox
            class="material-checkbox"
            style="display: inline-flex; width: 25px; height: 25px"
            bind:checked
            on:change={() => markComplete(i)}
          />
          <IconButton class="material-icons" on:click={() => removeTask(i)}>
            &#10006;
          </IconButton>
          <!-- <Button class="common-style" on:click={() => removeTask(i)}>
            &#10006;
            class="common-style {todo.status === 'completed'}"
          </Button> -->
        </div>
      </div>
    </Cell>
  {/if}
</LayoutGrid>

<style>
  .task {
    display: flex;
    justify-content: space-between;
    height: 25px;
    gap: 5px;
  }

  .task-buttons {
    display: flex;
    align-items: center;
  }
</style>
