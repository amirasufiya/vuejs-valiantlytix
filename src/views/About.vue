<template>
    <h1> </h1>
    <h2>Your subscription merchants : {{ subscribe.length }}</h2>
    <div v-if="subscribe.length">
    <div v-for="subscribe in subscribe" :key="subscribe.merchantName" class="fav">

            <h2>{{ subscribe.merchantName }}</h2>
            <p style="color: green; font-weight: bold; font-size: large;">{{ subscribe.pointsOffer[0].name }} </p>
                    <p style="font-style: italic;">{{ subscribe.pointsOffer[0].description }} </p>
                    <p style=""> Date: {{ subscribe.pointsOffer[0].startDate }} - {{ subscribe.pointsOffer[0].endDate }} </p>
                    <p style="">Points required: {{ subscribe.pointsOffer[0].pointsRequired }} </p>
                    <p style="">Balance: {{ subscribe.pointsOffer[0].balance }} </p>
            <!-- <h2> {{ merchant.name }} </h2> -->
            <!-- <div v-if="subscribe[index].pointsOffer !== null">
                <h2>{{ merchant[index-1].name }} </h2>
                <div v-for="vouch in merchant[index-1].pointsOffer.length" :key="vouch" class="voucher">
                    <p style="color: green; font-weight: bold; font-size: large;">{{ merchant[index-1].pointsOffer[vouch-1].name }} </p>
                    <p style="font-style: italic;">{{ merchant[index-1].pointsOffer[vouch-1].description }} </p>
                    <p style=""> Date: {{ merchant[index-1].pointsOffer[vouch-1].startDate }} - {{ merchant[index-1].pointsOffer[vouch-1].endDate }} </p>
                    <p style="">Points required: {{ merchant[index-1].pointsOffer[vouch-1].pointsRequired }} </p>
                    <p style="">*Points expire after {{ merchant[index-1].pointsOffer[vouch-1].pointsExpireAfterNMonths }} month(s) </p>
                </div>
            </div> -->
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
            subscribe: [  ],
            token: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNG9pMHhienFwY3AzcmUiLCJhdXRoIjoiUk9MRV9VU0VSLFJPTEVfVjhQX1VTRVIiLCJtZXJjaGFudF9yb2xlcyI6W3sidmVyc2lvbiI6MCwiaWQiOjIxOSwibWVyY2hhbnRJZCI6MTE1LCJ1c2VySWQiOjQ3LCJyb2xlTGV2ZWwiOjAsImlzQWN0aXZlIjp0cnVlfSx7InZlcnNpb24iOjAsImlkIjoyMjAsIm1lcmNoYW50SWQiOjczLCJ1c2VySWQiOjQ3LCJyb2xlTGV2ZWwiOjEsImlzQWN0aXZlIjp0cnVlfSx7InZlcnNpb24iOjAsImlkIjoyMjIsIm1lcmNoYW50SWQiOjExNywidXNlcklkIjo0Nywicm9sZUxldmVsIjowLCJpc0FjdGl2ZSI6dHJ1ZX0seyJ2ZXJzaW9uIjoxLCJpZCI6NjA0LCJtZXJjaGFudElkIjo0NTEsInVzZXJJZCI6NDcsInJvbGVMZXZlbCI6MSwiaXNBY3RpdmUiOnRydWV9XSwiZXhwIjoxNjA5MTI2NjM0fQ.hT4bn7UGiq-z9w_00MF873Bf7xqiylO_5J3YWeGVPERinaZREXiSO_EEaxEExQZg0NQcob9tgOvUJCG8VZk2NQ"
        }
    },
    mounted() {
        fetch('https://staging.value8.app/api/merchant/collection/offers/?categoryId=&page=0&size=10', {
            headers: {
                Authorization: "Bearer " + this.token,
            },
        })
            .then((res) => res.json()) //return promises, res is response
            .then((data) => {
                this.subscribe = data,
                console.log(this.subscribe)
            }) //actual pass data
            .catch(err => console.log(err.message))
    }
}
</script>

<style scoped>
    div .fav {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
  }
  /* div .merc :hover {
    background: #ddd;
  } */
  .fav a{
    text-decoration: none;
  }
  div .fav h2 {
      background: #42b983;
      border-radius: 50px;
      margin: 10px;
      padding: 10px;
  }
</style>