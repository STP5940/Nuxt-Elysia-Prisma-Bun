<script setup lang="ts">
import { ref } from "vue";
import { api } from "libs";

const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const appConfig = useAppConfig();

interface UsersType {
  status: string;
  response: {
    name: string;
    id: number;
    email: string;
    posts: {
      id: number;
      title: string;
      content: string;
      published: boolean;
    }[];
  }[];
}

const userData = ref<UsersType | null>(null);

// ส่งคำขอ API และไม่ระบุ Cookie ในส่วนของคำขอ
const { data: skadiData, error: skadiError } = await api.nendoroid.skadi.get();
// const { data: userData, error: userError } = await api.v1.users.get();

if (skadiError) throw skadiError;
// if (userError) throw userError;

const { id, name, cover, type, license } = skadiData?.response;

const showAlert = async (_Language: string) => {
  alert("Hello " + _Language);
};

const authGet = async () => {
  await api.v1.sign["Nuxtjsdev"].get();
  usersGet();
};

const usersGet = async () => {
  const { data, error } = await api.v1.users.get();

  if (error) {
    console.error("Error fetching user data:", data);
    return;
  }
  userData.value = data;
};

onMounted(async () => {
  usersGet();
});
</script>

<template>
  <div>
    <AppAlert> ข้อมูลจาก api ที่ไม่มีการเชื่อมต่อฐานข้อมูล</AppAlert>

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
    <AppAlert> ตัวอย่างข้อมูลที่ได้จาก api</AppAlert>
    <pre>{{ skadiData }}</pre>
    <br />
    <AppAlert> ข้อมูลจาก api ที่มีการเชื่อมต่อฐานข้อมูล และเช็ค jwtToken</AppAlert>

    <div v-if="userData?.status == 'success'" class="relative overflow-x-auto">
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
                {{ post.id }}. {{ post.title }} <br />Link:
                <a :href="post.content" target="_blank" style="color: blue">
                  {{ post.content }}
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
    </div>
    <div v-else>
      <SpecialVButton
        class="mb-4"
        buttonText="SING IN [GET JWT TOKEN]"
        @click="authGet()"
      />
    </div>

    <!-- <pre>{{ userData }}</pre> -->

    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank"
      >Learn more about Nuxt Routing</a
    >
  </div>
</template>
