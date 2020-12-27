<template>
  <h1>Merchants</h1>
  <div v-if="merchants.length">
    <div v-for="merchant in merchants" :key="merchant.id" class="merc">
        <router-link :to="{ name: 'MerchantDetails', params: {id: merchant.id, name: merchant.name }}">
            <h2>{{ merchant.id }} : {{ merchant.name }}</h2>
            <!-- <h2> {{ merchant.name }} </h2> -->
        </router-link>
    </div>
  </div>
  <div v-else>
        <p>Loading merchant..... </p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            merchants: [  ],
            token: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNG9pMHhienFwY3AzcmUiLCJhdXRoIjoiUk9MRV9VU0VSLFJPTEVfVjhQX1VTRVIiLCJtZXJjaGFudF9yb2xlcyI6W3sidmVyc2lvbiI6MCwiaWQiOjIxOSwibWVyY2hhbnRJZCI6MTE1LCJ1c2VySWQiOjQ3LCJyb2xlTGV2ZWwiOjAsImlzQWN0aXZlIjp0cnVlfSx7InZlcnNpb24iOjAsImlkIjoyMjAsIm1lcmNoYW50SWQiOjczLCJ1c2VySWQiOjQ3LCJyb2xlTGV2ZWwiOjEsImlzQWN0aXZlIjp0cnVlfSx7InZlcnNpb24iOjAsImlkIjoyMjIsIm1lcmNoYW50SWQiOjExNywidXNlcklkIjo0Nywicm9sZUxldmVsIjowLCJpc0FjdGl2ZSI6dHJ1ZX0seyJ2ZXJzaW9uIjoxLCJpZCI6NjA0LCJtZXJjaGFudElkIjo0NTEsInVzZXJJZCI6NDcsInJvbGVMZXZlbCI6MSwiaXNBY3RpdmUiOnRydWV9XSwiZXhwIjoxNjA5MTI2NjM0fQ.hT4bn7UGiq-z9w_00MF873Bf7xqiylO_5J3YWeGVPERinaZREXiSO_EEaxEExQZg0NQcob9tgOvUJCG8VZk2NQ"
        }
    },
    mounted() {
        fetch('https://staging.value8.app/api/merchants?status=ACTIVE&category=&page=0&size=20', {
            headers: {
                Authorization: "Bearer " + this.token,
            },
        })
            .then((res) => res.json()) //return promises, res is response
            .then((data) => this.merchants = data) //actual pass data
            .catch(err => console.log(err.message))
    }
}
</script>

<style scoped>
    .merc h2{
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
  }
  .merc h2:hover {
    background: #ddd;
  }
  .merc a{
    text-decoration: none;
  }
</style>