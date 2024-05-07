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

    <div class="relative overflow-x-auto">
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Product name</th>
            <th scope="col" class="px-6 py-3">Color</th>
            <th scope="col" class="px-6 py-3">Category</th>
            <th scope="col" class="px-6 py-3">Price</th>
          </tr>
        </thead>
        <tbody
          v-for="(userDataItem, userDataIndex) in userData?.response"
          :key="userDataIndex"
        >
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
            >
              {{ userDataItem.id }}
            </th>
            <td class="px-6 py-4">{{ userDataItem.name }}</td>
            <td class="px-6 py-4">{{ userDataItem.email }}</td>
            <td class="px-6 py-4">
              <div
                v-for="(post, postsIndex) in userDataItem.posts"
                :key="postsIndex"
                class="py-3"
              >
                {{ post.id }}. {{ post.title }} {{ post.content }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- <pre>{{ userData }}</pre> -->
    <br />
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank"
      >Learn more about Nuxt Routing</a
    >
  </div>
</template>
