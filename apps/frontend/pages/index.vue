<script setup lang="ts">
import { api } from "libs";

// ส่งคำขอ API และไม่ระบุ Cookie ในส่วนของคำขอ
const { data: skadiData, error: skadiError } = await api.nendoroid.skadi.get();
const { data: userData, error: userError } = await api.v1.users.get();

if (skadiError) throw skadiError;
// if (userError) throw userError;

const { id, name, cover, type, license } = skadiData?.response;

const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const appConfig = useAppConfig();

const showAlert = async (_Language: string) => {
  alert("Hello " + _Language);
};
</script>

<template>
  <div>
    <AppAlert> Change a few things up and try submitting again.</AppAlert>

    <div class="grid gap-4">
      <div class="grid grid-cols-4 gap-12">
        <div>
          <img class="h-auto max-w-full rounded-lg" :src="cover" alt="" />
        </div>
        <div>
          <SpecialRButton
            class="mb-4"
            buttonText="Hello index"
            @click="showAlert(`${name} by React`)"
          />
          <p class="px-0 py-0 text-xm">id: {{ id }}</p>
          <p class="px-0 py-0 text-xm">Name: {{ name }}</p>
          <p class="px-0 py-0 text-xm">Type: {{ type }}</p>
          <p class="px-0 py-0 text-xm">Type: {{ license.type }}</p>
          <p class="px-0 py-0 text-xm">Holder: {{ license.holder }}</p>
          <p class="px-0 py-0 text-xm">From: {{ license.from }}</p>
        </div>

        <div>
          <img class="h-auto max-w-full rounded-lg" :src="cover" alt="" />
        </div>
        <div>
          <SpecialVButton
            class="mb-4"
            buttonText="Hello index"
            @click="showAlert(`${name} by vue`)"
          />
          <p class="px-0 py-0 text-xm">id: {{ id }}</p>
          <p class="px-0 py-0 text-xm">Name: {{ name }}</p>
          <p class="px-0 py-0 text-xm">Type: {{ type }}</p>
          <p class="px-0 py-0 text-xm">Type: {{ license.type }}</p>
          <p class="px-0 py-0 text-xm">Holder: {{ license.holder }}</p>
          <p class="px-0 py-0 text-xm">From: {{ license.from }}</p>
        </div>
      </div>
    </div>
    <br />
    <AppAlert> skadiData:</AppAlert>
    <pre>{{ skadiData }}</pre>
    <br />
    <AppAlert> userData:</AppAlert>
    <pre>{{ userData }}</pre>
    <br />
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank"
      >Learn more about Nuxt Routing</a
    >
  </div>
</template>
