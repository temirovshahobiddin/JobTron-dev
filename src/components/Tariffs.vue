<template>
  <div class="tariffs">
    <div class="tariffs-wrapper container">
      <h3 class="tariffs-wrapper__title title">
        <img :src="ellipse" alt="" class="ellipse">Тарифы</h3>

      <div class="tariffs-main">
        <table>
          <tr>
            <th v-for="headers in tableHeaders" :key="headers.id">
              {{ headers.name }}
            </th>
          </tr>
          <tr v-for="data in table" :key="data.id">
            <td>{{ data.first}}</td>
            <td>{{ data.second}}</td>
            <td>{{ data.third}}</td>
            <td>{{ data.fourth}}</td>
            <td>{{ data.fifth}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import table from "../table-data/table.data.json"

export default {
  data: () => ({
    tableHeaders: [
      { name: "         " },
      { name: "Бесплатный" },
      { name: "База" },
      { name: "Стандарт" },
      { name: "PRO" },
    ],
    table,
    tariffs: [],
    ellipse: require("@/assets/img/ellipses/title-img.png")
  }),
  created(){
    return table
  }

};
</script>

<style>
</style>