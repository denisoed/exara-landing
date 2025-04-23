<template>
  <div class="default-layout">
    <AppHeader />
    <Transition name="fade" mode="out-in">
      <slot />
    </Transition>
    <AppFooter />
  </div>
</template>
