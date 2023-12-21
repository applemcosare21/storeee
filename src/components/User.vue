<template>
    <div>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>full_name</th>
            <th>username</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.full_name }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const users = ref([]);
const loading = ref(true); // Set to true if you want to show "Loading..." initially

onMounted(async () => {
  try {
    const response = await axios.get('user.json'); // Replace with the actual path
    users.value = response.data.users;
  } catch (error) {
    console.error('Error fetching users:', error);
  } finally {
    loading.value = false; // Hide loading state after data is fetched
  }
});
</script>

<style scoped>
h1{
  color: white;
}
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
  
  td{
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
  }

  th {
    color: white;
    background-color: rgba(0, 0, 0, 1);
  }

  tbody tr:hover {
    background-color: #f5f5f5;
  }

  /* Optional: Add some additional styling for responsiveness */
  @media (max-width: 768px) {
    table {
      overflow-x: auto;
      display: block;
    }

    thead, tbody, th, td, tr {
      display: block;
    }

    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      margin-bottom: 15px;
    }

    td {
      border: none;
      border-bottom: 1px solid #ddd;
      position: relative;
      padding-left: 50%;
    }

    td:before {
      position: absolute;
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }
  }
</style>