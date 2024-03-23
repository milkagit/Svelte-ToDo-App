<!-- TodoForm.svelte -->
<script lang="ts">
  import Button from "@smui/button";
  import Textfield from "@smui/textfield";
  import HelperText from "@smui/textfield/helper-text";

  export let task: string;
  export let addTask: () => void;
  export let errMsg: string;
</script>

<div class="form">
  <div class="textField">
    <Textfield
      class="shaped-filled"
      variant="outlined"
      type="text"
      bind:value={task}
      on:keydown={(e) => {
        if (e.key === "Enter") {
          addTask();
        }
      }}
    />
    {#if errMsg}
      <!-- <p style="color: red;">{errMsg}</p> -->
      <HelperText slot="helper" style="color: red;">{errMsg}</HelperText>
    {/if}
    <!-- </Textfield> -->
  </div>
  <div>
    <Button on:click={addTask}>Add</Button>
  </div>
</div>

<style>
  .form {
    display: flex;
    gap: 8px;
  }

  /* .shaped-filled {
    margin-bottom: 8px;
  }

  .form input,
  .form button {
    border: 1px solid #1e85eb;
    height: 40px;
    outline: none;
    border-radius: 20px;
  }

  .form input {
    flex: 1;
    text-indent: 20px;
  }

  .form button {
    width: 60px;
    margin-left: 5px;
    color: #1e85eb;
    cursor: pointer;
  } */
</style>
