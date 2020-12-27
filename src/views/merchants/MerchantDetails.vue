<template>
    <div v-if="merchant" >
        <h1>The merchant id is {{ id }} : {{ name }}</h1>
        <div v-for="index in merchant.length" :key="index" class="merc" >
            
            <div v-if="merchant[index-1].pointsOffer !== null">
                <h2>{{ merchant[index-1].name }} </h2>
                <div v-for="vouch in merchant[index-1].pointsOffer.length" :key="vouch" class="voucher">
                    <p style="color: green; font-weight: bold; font-size: large;">{{ merchant[index-1].pointsOffer[vouch-1].name }} </p>
                    <p style="font-style: italic;">{{ merchant[index-1].pointsOffer[vouch-1].description }} </p>
                    <p style=""> Date: {{ merchant[index-1].pointsOffer[vouch-1].startDate }} - {{ merchant[index-1].pointsOffer[vouch-1].endDate }} </p>
                    <p style="">Points required: {{ merchant[index-1].pointsOffer[vouch-1].pointsRequired }} </p>
                    <p style="">*Points expire after {{ merchant[index-1].pointsOffer[vouch-1].pointsExpireAfterNMonths }} month(s) </p>
                </div>
            </div>
            
            <div v-if="merchant[index-1].uniqueVoucher !== null">
                <h2>{{ merchant[index-1].name }} </h2>
                <div v-for="vouch in merchant[index-1].uniqueVoucher.length" :key="vouch" class="voucher">
                    <p style="color: green; font-weight: bold; font-size: large;">{{ merchant[index-1].uniqueVoucher[vouch-1].name }} </p>
                    <p style="font-style: italic;">{{ merchant[index-1].uniqueVoucher[vouch-1].description }} </p>
                    <p style=""> Date: {{ merchant[index-1].uniqueVoucher[vouch-1].startDate }} - {{ merchant[index-1].uniqueVoucher[vouch-1].endDate }} </p>
                    <p style="">Limit per user: {{ merchant[index-1].uniqueVoucher[vouch-1].limitPerUser }} </p>
                    <p style="">Remaining Quantity {{ merchant[index-1].uniqueVoucher[vouch-1].quantityRemaining }} / {{ merchant[index-1].uniqueVoucher[vouch-1].initialQuantity }} </p>
                </div>
            </div>
            <div v-if="merchant[index-1].stampsOffer !== null">
                <h2>{{ merchant[index-1].name }} </h2>
                <div v-for="vouch in merchant[index-1].stampsOffer.length" :key="vouch" class="voucher">
                    <p style="color: green; font-weight: bold; font-size: large;">{{ merchant[index-1].stampsOffer[vouch-1].name }} </p>
                    <p style="font-style: italic;">{{ merchant[index-1].stampsOffer[vouch-1].description }} </p>
                    <p style=""> Date: {{ merchant[index-1].stampsOffer[vouch-1].startDate }} - {{ merchant[index-1].stampsOffer[vouch-1].endDate }} </p>
                    <p style="">Stamps required: {{ merchant[index-1].stampsOffer[vouch-1].stampsRequired }} </p>
                </div>
            </div>
            
            <div v-else>
                <h2>{{ merchant[index-1].name }} </h2>
                <p>No offer</p>
            </div>
        </div>
    </div>
    <div v-else>
        <p>Loading merchant details..... </p>
    </div>
</template>

<script>
// import moment from 'moment'

export default {
    props: ['id', 'name'],
    data() {
        return {
            merchant: null,
            token: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNG9pMHhienFwY3AzcmUiLCJhdXRoIjoiUk9MRV9VU0VSLFJPTEVfVjhQX1VTRVIiLCJtZXJjaGFudF9yb2xlcyI6W3sidmVyc2lvbiI6MCwiaWQiOjIxOSwibWVyY2hhbnRJZCI6MTE1LCJ1c2VySWQiOjQ3LCJyb2xlTGV2ZWwiOjAsImlzQWN0aXZlIjp0cnVlfSx7InZlcnNpb24iOjAsImlkIjoyMjAsIm1lcmNoYW50SWQiOjczLCJ1c2VySWQiOjQ3LCJyb2xlTGV2ZWwiOjEsImlzQWN0aXZlIjp0cnVlfSx7InZlcnNpb24iOjAsImlkIjoyMjIsIm1lcmNoYW50SWQiOjExNywidXNlcklkIjo0Nywicm9sZUxldmVsIjowLCJpc0FjdGl2ZSI6dHJ1ZX0seyJ2ZXJzaW9uIjoxLCJpZCI6NjA0LCJtZXJjaGFudElkIjo0NTEsInVzZXJJZCI6NDcsInJvbGVMZXZlbCI6MSwiaXNBY3RpdmUiOnRydWV9XSwiZXhwIjoxNjA5MTI2NjM0fQ.hT4bn7UGiq-z9w_00MF873Bf7xqiylO_5J3YWeGVPERinaZREXiSO_EEaxEExQZg0NQcob9tgOvUJCG8VZk2NQ"
        }
    },
    mounted() {
        fetch('https://staging.value8.app/api/merchant/ongoing/offers/'+ this.id + '?size=1&page=0' , {
            headers: {
                Authorization: "Bearer " + this.token,
            },
        })
            .then((res) => res.json()) //return promises, res is response
            .then((data) => {
                this.merchant = data,
                console.log(this.merchant)
            }) //actual pass data
            .catch(err => console.log(err.message))
    },
    
    // computed: {
    //     filteredVoucher(){
    //         return this.merchant.filter((merchant) => merchant)
    //     }
    // }
}
</script>

<style scoped>
    div .merc {
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
  .merc a{
    text-decoration: none;
  }
  div .merc h2 {
      background: #42b983;
      border-radius: 50px;
      margin: 10px;
      padding: 10px;
  }
</style>

