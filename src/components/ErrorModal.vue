<template>
  <transition name="backdrop">
    <div v-if="open" class="backdrop" @click="closeDialog" @keydown="closeDialog"></div>
  </transition>
  <transition name="modal">
    <dialog open v-if="open">
      <header>ERROR</header>
      <div class="error">
        {{ errorMessage }}
      </div>
      <menu>
        <button @click="closeDialog">Close</button>
      </menu>
    </dialog>
  </transition>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: { errorMessage: String, open: Boolean },
  emits: ['close'],
  setup(_, { emit }) {
    function closeDialog() {
      emit('close');
    }

    return {
      closeDialog,
    };
  },
});
</script>

<style lang="scss" scoped>
$primaryColor: rgb(105, 0, 0);
$secondaryColor: rgba(105, 0, 0, 0.7);

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

a {
  font: inherit;
  font-size: large;
  font-weight: 900;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
}

a:hover,
a:active,
a:focus {
  color: black;
}

dialog {
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  position: fixed;
  top: 30vh;
  left: calc(50% - 15rem);
  width: 25rem;
  background-color: white;
  z-index: 100;
  overflow: hidden;
}

header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: $primaryColor;
  color: white;
  box-shadow: rgba(149, 157, 165) 0 8px 24px;
}

dialog div {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

button {
  font: inherit;
  background-color: $primaryColor;
  border: 1px solid $primaryColor;
  border-radius: 8px;
  color: white;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: $secondaryColor;
  border-color: $secondaryColor;
}

.error {
  font-size: 1.5rem;
  text-align: center;
}

.modal {
  &-enter-active {
    animation: modal 0.3s ease-out;
  }

  &-leave-active {
    animation: modal 0.3s ease-in reverse;
  }
}

.backdrop {
  &-enter-active {
    animation: backdrop 0.3s ease-out;
  }

  &-leave-active {
    animation: backdrop 0.3s ease-in reverse;
  }
}

@keyframes backdrop {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
